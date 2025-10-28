'use client';

import { useEffect, useState } from 'react';
import {
  EarlyAccessRequest,
  getAllEarlyAccessRequests,
} from '@/services/early-access-api';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const fetchEarlyAccessRequests = async (): Promise<EarlyAccessRequest[]> => {
  try {
    const response = await getAllEarlyAccessRequests();
    console.log('Early access requests data:', response);
    return response.requests;
  } catch (error) {
    console.error('Error fetching early access requests:', error);
    return [];
  }
};

const formatDate = (timestamp: number) => {
  return new Date(timestamp).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const EarlyAccessRequestsPage = () => {
  const [requests, setRequests] = useState<EarlyAccessRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRequests = async () => {
      setLoading(true);
      const data = await fetchEarlyAccessRequests();
      setRequests(data);
      setLoading(false);
    };

    loadRequests();
  }, []);

  console.log('Early Access Requests:', {
    totalRequests: requests.length,
    requests: requests.map((r) => ({
      id: r.id,
      email: r.email,
      name: r.name,
      company: r.company,
      phone: r.phone,
      createdAt: new Date(r.createdAt).toISOString(),
      hasMessage: !!(r.message && r.message.trim()),
      hasPhone: !!(r.phone && r.phone.trim()),
      hasCompany: !!(r.company && r.company.trim()),
    })),
  });

  const handleRefresh = async () => {
    setLoading(true);
    const data = await fetchEarlyAccessRequests();
    setRequests(data);
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-center items-center h-64">
          <div className="text-lg">Loading early access requests...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Early Access Requests</h2>
          <p className="text-gray-600 mt-1">
            Manage early access requests from potential users
          </p>
        </div>
        <Button onClick={handleRefresh} variant="outline">
          Refresh
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Requests ({requests.length})</CardTitle>
          <CardDescription>
            All early access requests submitted through the website
          </CardDescription>
        </CardHeader>
        <CardContent>
          {requests.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              No early access requests found
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Request Submitted</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {requests.map((request) => (
                    <TableRow key={request.id}>
                      <TableCell className="font-medium">
                        {request.name && request.name.trim()
                          ? request.name
                          : 'N/A'}
                      </TableCell>
                      <TableCell>{request.email}</TableCell>
                      <TableCell>
                        {request.company && request.company.trim()
                          ? request.company
                          : 'N/A'}
                      </TableCell>
                      <TableCell>
                        {request.phone && request.phone.trim()
                          ? request.phone
                          : 'N/A'}
                      </TableCell>
                      <TableCell>{formatDate(request.createdAt)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EarlyAccessRequestsPage;
