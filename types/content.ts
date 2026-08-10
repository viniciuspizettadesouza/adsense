import type { LucideIcon } from 'lucide-react';

export type Category = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type OfficialSource = {
  title: string;
  publisher: string;
  url: string;
  checkedAt: string;
};

export type GuideLink = {
  label: string;
  description: string;
  url: string;
};

export type GuideStep = {
  title: string;
  description: string;
};

export type GuideSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
  steps?: GuideStep[];
  links?: GuideLink[];
  note?: {
    tone: 'info' | 'warning';
    title: string;
    text: string;
  };
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type Guide = {
  slug: string;
  categorySlug: string;
  title: string;
  description: string;
  eyebrow: string;
  lastVerified: string;
  audience: string[];
  quickFacts: Array<{ label: string; value: string }>;
  sections: GuideSection[];
  commonMistakes: string[];
  faqs: GuideFaq[];
  sources: OfficialSource[];
  relatedGuideSlugs: string[];
};
