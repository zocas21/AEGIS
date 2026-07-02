export interface Capability {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  subCapabilities: string[];
  applications: string[];
}

export interface ComplianceStandard {
  id: string;
  name: string;
  fullName: string;
  level: string;
  description: string;
  controlAreas: string[];
  status: 'COMPLIANT' | 'AUDIT_READY' | 'AUTHORIZED';
}

export interface PastPerformance {
  id: string;
  client: string;
  title: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: string[];
  classification: string;
}

export interface Executive {
  id: string;
  name: string;
  role: string;
  biography: string;
  credentials: string[];
  background: 'Defense' | 'Intelligence' | 'Enterprise' | 'Cybersecurity';
  imagePlaceholder: string;
}

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  clearanceRequired: 'None' | 'Secret' | 'Top Secret' | 'TS/SCI' | 'Public Trust';
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface NewsInsight {
  id: string;
  category: 'CHOUGHT_LEADERSHIP' | 'INDUSTRY_ANALYSIS' | 'TECHNICAL_ARTICLE' | 'COMPANY_UPDATE';
  title: string;
  summary: string;
  date: string;
  author: string;
  readTime: string;
  content: string;
}
