/**
 * Early Access API service for Firebase Realtime Database
 */

import { get, ref } from 'firebase/database';

import { database } from '@/app/firebase/firebase';

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

/**
 * Get all early access requests from Firebase Realtime Database
 */
export async function getAllEarlyAccessRequests(): Promise<EarlyAccessListResponse> {
  try {
    const earlyAccessRef = ref(database, 'compl-ai-early-access-form');
    const snapshot = await get(earlyAccessRef);

    if (!snapshot.exists()) {
      return { requests: [], totalCount: 0 };
    }

    const data = snapshot.val();
    const requests: EarlyAccessRequest[] = [];

    // Convert Firebase data to array format
    Object.keys(data).forEach((key) => {
      const request = data[key];
      requests.push({
        id: key,
        email: request.email || '',
        company: request.companyName || '',
        name: request.fullName || '',
        phone: request.phoneNumber || '',
        message: request.message || '',
        createdAt: request.submittedAt || Date.now(),
        updatedAt: request.updatedAt || undefined,
        status: request.status || 'pending',
        notes: request.notes || '',
      });
    });

    // Sort by creation date (newest first)
    requests.sort((a, b) => b.createdAt - a.createdAt);

    return {
      requests,
      totalCount: requests.length,
    };
  } catch (error) {
    console.error('Error fetching early access requests:', error);
    throw new Error('Failed to fetch early access requests');
  }
}

/**
 * Get a single early access request by ID
 */
export async function getEarlyAccessRequestById(
  id: string
): Promise<EarlyAccessRequest | null> {
  try {
    const requestRef = ref(database, `compl-ai-early-access-form/${id}`);
    const snapshot = await get(requestRef);

    if (!snapshot.exists()) {
      return null;
    }

    const data = snapshot.val();
    return {
      id,
      email: data.email || '',
      company: data.companyName || '',
      name: data.fullName || '',
      phone: data.phoneNumber || '',
      message: data.message || '',
      createdAt: data.submittedAt || Date.now(),
      updatedAt: data.updatedAt,
      status: data.status || 'pending',
      notes: data.notes || '',
    };
  } catch (error) {
    console.error('Error fetching early access request:', error);
    throw new Error('Failed to fetch early access request');
  }
}

/**
 * Update early access request status
 */
export async function updateEarlyAccessRequestStatus(
  id: string,
  status: 'pending' | 'approved' | 'rejected',
  notes?: string
): Promise<void> {
  try {
    const updates: Record<string, unknown> = {
      status,
      updatedAt: Date.now(),
    };

    if (notes) {
      updates.notes = notes;
    }

    // Note: This would require Firebase Admin SDK on the server side
    // For now, we'll throw an error indicating server-side implementation needed
    throw new Error(
      'Status updates require server-side implementation with Firebase Admin SDK'
    );
  } catch (error) {
    console.error('Error updating early access request:', error);
    throw new Error('Failed to update early access request');
  }
}
