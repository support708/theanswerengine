import { NextResponse } from 'next/server';

export const revalidate = 300; // 5 minutes

interface StripeCharge {
  id: string;
  amount: number;
  currency: string;
  status: string;
  created: number;
  billing_details: {
    name: string | null;
    email: string | null;
  };
  customer: string | null;
  description: string | null;
}

interface StripeListResponse {
  data: StripeCharge[];
  has_more: boolean;
  object: string;
}

interface PaymentRecord {
  id: string;
  amount: number;
  amountFormatted: string;
  name: string;
  email: string;
  date: string;
  dateTimestamp: number;
  status: string;
  description: string | null;
}

interface StripeApiResponse {
  payments: PaymentRecord[];
  totalCollected: number;
  totalFormatted: string;
  count: number;
  lastUpdated: string;
}

function formatCurrency(cents: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(cents / 100);
}

function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export async function GET() {
  const stripeKey = process.env.STRIPE_RESTRICTED_KEY;

  if (!stripeKey) {
    return NextResponse.json(
      { error: 'Stripe key not configured' },
      { status: 500 }
    );
  }

  try {
    const response = await fetch(
      'https://api.stripe.com/v1/charges?limit=100',
      {
        headers: {
          Authorization: `Bearer ${stripeKey}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        next: { revalidate: 300 },
      }
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error('[Borges OS Stripe] API error:', response.status, errorBody);
      return NextResponse.json(
        { error: `Stripe API error: ${response.status}` },
        { status: response.status }
      );
    }

    const data: StripeListResponse = await response.json();

    const payments: PaymentRecord[] = data.data
      .filter((charge) => charge.status === 'succeeded')
      .map((charge) => ({
        id: charge.id,
        amount: charge.amount / 100,
        amountFormatted: formatCurrency(charge.amount),
        name: charge.billing_details.name ?? 'Unknown',
        email: charge.billing_details.email ?? '',
        date: formatDate(charge.created),
        dateTimestamp: charge.created,
        status: charge.status,
        description: charge.description,
      }))
      .sort((a, b) => b.dateTimestamp - a.dateTimestamp);

    const totalCollectedCents = data.data
      .filter((c) => c.status === 'succeeded')
      .reduce((sum, c) => sum + c.amount, 0);

    const result: StripeApiResponse = {
      payments,
      totalCollected: totalCollectedCents / 100,
      totalFormatted: formatCurrency(totalCollectedCents),
      count: payments.length,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('[Borges OS Stripe] Fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Stripe data' },
      { status: 500 }
    );
  }
}
