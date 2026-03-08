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

export interface AERO7Score {
  answerQuality: number;       // 0-10
  entityOptimization: number;  // 0-10
  relevanceFreshness: number;  // 0-10
  optimizationStructure: number; // 0-10
  voiceAuthenticity: number;   // 0-10
  authoritySignals: number;    // 0-10
  aiVisibility: number;        // 0-10
  total: number;               // 0-70
}

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
  aero7: AERO7Score;
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
