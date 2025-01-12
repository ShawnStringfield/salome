export interface Metadata {
  date: string;
  category: string;
  stage: string;
  duration: string;
}

export interface ClientInformation {
  title: string;
  content: string;
}

export interface ProjectOverview {
  title: string;
  summary: string;
  goals: string[];
  outcome: string;
}

export interface Challenge {
  title: string;
  description: string;
}

export interface ProblemStatement {
  title: string;
  challenges: Challenge[];
}

export interface TechnicalStackItem {
  name: string;
  description: string;
  iconName: string;
}

export interface Solution {
  title: string;
  intro: string;
  technicalStack: {
    title: string;
    items: TechnicalStackItem[];
  };
}

export interface Metric {
  label: string;
  value: string;
  suffix: string;
}

export interface Results {
  title: string;
  timeframe: string;
  metrics: Metric[];
}

export interface CaseStudy {
  title: string;
  metadata: Metadata;
  clientInformation: ClientInformation;
  projectOverview: ProjectOverview;
  problemStatement: ProblemStatement;
  solution: Solution;
  results: Results;
}

export interface PortfolioItem {
  company: string;
  link: string;
  url?: string;
  image: string;
  alt: string;
  dateCreated: string;
  tech: string[];
  hasCaseStudy: boolean;
  websiteUrl?: string;
  caseStudy?: CaseStudy;
}

export interface WorkData {
  portfolio: PortfolioItem[];
}
