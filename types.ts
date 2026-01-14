
export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  sources: { name: string; color: string; initial: string; logoUrl?: string }[];
  category: string;
  image?: string;
  readTime: string;
  published: string;
  analysis?: AnalysisData;
  perspectives?: Perspective[];
}

export interface AnalysisData {
  findings: string[];
  timeline: { date: string; event: string; description: string }[];
}

export interface Perspective {
  source: string;
  initial: string;
  color: string;
  sentiment: string;
  label: string;
  quote: string;
  detail: string;
  icon: string;
  categoryColor: string;
}

export type NavTab = 'feed' | 'explore' | 'manage' | 'library' | 'profile' | 'events' | 'analysis';
