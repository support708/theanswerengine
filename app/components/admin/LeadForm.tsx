'use client';

import { useState } from 'react';

interface LeadFormProps {
  onLeadCreated: () => void;
}

export default function LeadForm({ onLeadCreated }: LeadFormProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const form = new FormData(e.currentTarget);
    const data = {
      businessName: form.get('businessName'),
      contactFirstName: form.get('contactFirstName'),
      contactEmail: form.get('contactEmail'),
      websiteUrl: form.get('websiteUrl'),
      city: form.get('city'),
      serviceNiche: form.get('serviceNiche'),
      competitorName: form.get('competitorName'),
      reviewCount: form.get('reviewCount'),
      rating: form.get('rating'),
      notes: form.get('notes'),
    };

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to create lead');
      }

      setOpen(false);
      onLeadCreated();
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create lead');
    } finally {
      setLoading(false);
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-[#FF6A00] hover:bg-[#e55f00] text-white font-semibold rounded-lg transition-colors text-sm"
      >
        + Add Lead
      </button>
    );
  }

  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white">New Lead</h2>
        <button onClick={() => setOpen(false)} className="text-zinc-400 hover:text-white text-sm">
          Cancel
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field name="businessName" label="Business Name" required />
          <Field name="contactFirstName" label="Contact First Name" required />
          <Field name="contactEmail" label="Contact Email" type="email" required />
          <Field name="websiteUrl" label="Website URL" placeholder="https://" />
          <Field name="city" label="City" required />
          <Field name="serviceNiche" label="Service / Niche" required placeholder="e.g. Property Management, HVAC" />
          <Field name="competitorName" label="Competitor Name" placeholder="Optional - system can discover" />
          <div className="grid grid-cols-2 gap-4">
            <Field name="reviewCount" label="Review Count" type="number" placeholder="e.g. 47" />
            <Field name="rating" label="Rating" type="number" placeholder="e.g. 4.8" />
          </div>
        </div>

        <div>
          <label className="block text-sm text-zinc-400 mb-1">Notes / Hidden Differentiators</label>
          <textarea
            name="notes"
            rows={3}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FF6A00] resize-none"
            placeholder="Board positions, awards, community involvement, origin story, certifications..."
          />
        </div>

        {error && <p className="text-red-400 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="px-6 py-2 bg-[#FF6A00] hover:bg-[#e55f00] disabled:opacity-50 text-white font-semibold rounded-lg transition-colors text-sm"
        >
          {loading ? 'Creating...' : 'Add to Queue'}
        </button>
      </form>
    </div>
  );
}

function Field({
  name,
  label,
  type = 'text',
  required = false,
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm text-zinc-400 mb-1">
        {label} {required && <span className="text-[#FF6A00]">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        step={type === 'number' ? 'any' : undefined}
        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-600 rounded-lg text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-[#FF6A00]"
      />
    </div>
  );
}
