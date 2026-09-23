export type UserRole = 'admin' | 'investor' | 'founder' | 'user';
export type UserStatus = 'pending' | 'verified' | 'rejected';

export interface User {
  id: string;
  email: string;
  displayName?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: number;
  updatedAt?: number;
}

export type DealStatus = 'live' | 'pipeline' | 'closed';

export interface Deal {
  id: string;
  companyName: string;
  logoUrl?: string;
  sector: string;
  region: string;
  stage: string;
  status: DealStatus;
  shortDescription?: string;
  about?: string;
  locked?: boolean;
  createdAt: number;
  updatedAt?: number;
}

export type RelationshipType = 'portfolio' | 'opportunity' | 'network' | 'past';

export interface PortfolioCompany {
  id: string;
  name: string;
  logoUrl?: string;
  sector: string;
  region: string;
  stage: string;
  relationshipType: RelationshipType;
  createdAt: number;
}

export interface DealAccessRequest {
  id: string;
  userId: string;
  dealId: string;
  status: 'pending' | 'approved' | 'rejected';
  ndaSigned: boolean;
  createdAt: number;
}

export type SubmissionType = 'buy' | 'sell' | 'founder' | 'company_request';

export interface Submission {
  id: string;
  userId?: string; // Optional if anonymous requests are allowed
  type: SubmissionType;
  data: string; // JSON string containing form data
  status: 'new' | 'reviewed' | 'archived';
  createdAt: number;
}
