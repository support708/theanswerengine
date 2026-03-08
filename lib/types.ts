export type LeadStatus =
  | 'queued'
  | 'researching'
  | 'research_complete'
  | 'generating_report'
  | 'report_ready'
  | 'email_drafted'
  | 'approved'
  | 'sent'
  | 'replied'
  | 'follow_up_1'
  | 'follow_up_2'
  | 'follow_up_3'
  | 'closed_won'
  | 'closed_lost'
  | 'no_response';

export interface AERO10Score {
  answerQuality: number;            // P1: 0-10
  entityOptimization: number;       // P2: 0-10
  relevanceFreshness: number;       // P3: 0-10
  optimizationStructure: number;    // P4: 0-10
  voiceAuthenticity: number;        // P5: 0-10
  authoritySignals: number;         // P6: 0-10
  authorityDistribution: number;    // P7: 0-10
  consensusCoCitation: number;      // P8: 0-10 (NEW)
  platformReadiness: number;        // P9: 0-10 (NEW)
  technicalAccessibility: number;   // P10: 0-10 (NEW)
  total: number;                    // 0-100
}

/** @deprecated Use AERO10Score instead */
export type AERO7Score = AERO10Score;

export interface ResearchResults {
  reviewCount: number;
  rating: number;
  yearsInBusiness: number | null;
  credentials: string[];
  awards: string[];
  communityInvolvement: string[];
  hiddenDifferentiators: string[];
  topCompetitors: { name: string; reason: string }[];
  faqContentPresent: boolean;
  blogPresent: boolean;
  gmbPresent: boolean;
  schemaDetected: boolean;
  recentContent: boolean;
  uniqueStory: string | null;
  aiCited: boolean;
  aero7: AERO10Score;
  rawNotes: string;
  researchedAt: string;
}

export interface Lead {
  id: string;
  businessName: string;
  contactFirstName: string;
  contactEmail: string;
  websiteUrl: string;
  city: string;
  serviceNiche: string;
  competitorName: string;
  reviewCount: number | null;
  rating: number | null;
  notes: string;
  status: LeadStatus;
  research: ResearchResults | null;
  reportSlug: string | null;
  emailDraftId: string | null;
  fabricationFlags: string[];
  emDashClean: boolean;
  actionLog: { action: string; timestamp: string }[];
  createdAt: string;
  updatedAt: string;
  // Lead Hunter Bot fields
  huntSource?: string;
  huntScore?: number;
  huntPriority?: 'P1' | 'P2' | 'P3';
}

export interface LeadFormData {
  businessName: string;
  contactFirstName: string;
  contactEmail: string;
  websiteUrl: string;
  city: string;
  serviceNiche: string;
  competitorName: string;
  reviewCount: string;
  rating: string;
  notes: string;
}
