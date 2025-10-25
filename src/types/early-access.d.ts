export interface EarlyAccessRequest {
  id: string;
  email: string;
  company?: string;
  name?: string;
  phone?: string;
  message?: string;
  createdAt: number;
  updatedAt?: number;
  status?: 'pending' | 'approved' | 'rejected';
  notes?: string;
}

export interface EarlyAccessListResponse {
  requests: EarlyAccessRequest[];
  totalCount: number;
}
