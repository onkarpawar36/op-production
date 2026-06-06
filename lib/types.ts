export type Service = {
  title: string;
  description: string;
  features: string[];
  category: string;
};

export type PortfolioCategory =
  | 'Reels'
  | 'Shorts'
  | 'YouTube Videos'
  | 'Motion Graphics'
  | 'Commercial Projects'
  | 'Wedding Films'
  | '3D Animation';

export type PortfolioProject = {
  id: string;
  title: string;
  category: PortfolioCategory;
  client: string;
  summary: string;
  thumbnail: string;
  videoUrl: string;
  tags: string[];
  result: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  feedback: string;
};

export type CaseStudy = {
  id: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  before: string;
  after: string;
  videoUrl: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  details: string[];
  group: 'Reels' | 'YouTube' | 'Monthly Retainers';
};
