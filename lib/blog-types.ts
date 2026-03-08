export interface BlogTopic {
  id: string;
  title: string;
  slug: string;
  targetKeyword: string;
  category: string;
  pillar: 'AEO Education' | 'How-To' | 'Competitive Intelligence' | 'Platform Deep Dives' | 'Case Studies';
  priority: 1 | 2 | 3;
  status: 'queued' | 'in_progress' | 'published' | 'failed';
  hubSlug?: string;
  createdAt: string;
  publishedAt?: string;
  error?: string;
}

export interface BlogSession {
  id: string;
  startedAt: string;
  completedAt?: string;
  trigger: 'cron' | 'manual';
  topicId: string;
  topicTitle: string;
  slug: string;
  researchTokens: number;
  generationTokens: number;
  auditTokens: number;
  auditScore: number;
  auditPassed: boolean;
  published: boolean;
  error?: string;
}

export interface BlogState {
  lastRun?: string;
  totalPublished: number;
  totalFailed: number;
  sessionsToday: number;
  lastResetDate: string;
  sessions: BlogSession[];
}

export interface ResearchOutput {
  refinedTitle: string;
  slug: string;
  outline: string[];
  keyStats: string[];
  faqQuestions: { question: string; answer: string }[];
  excerpt: string;
  tags: string[];
  readTimeMinutes: number;
  category: string;
}

export interface AuditResult {
  score: number;
  passed: boolean;
  issues: string[];
  suggestions: string[];
}

export interface BlogPostMeta {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: string;
  image: string;
  publishDate: string;
  lastModified: string;
  featured: boolean;
  tags: string[];
}
