import { Check, Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const PricingTable = () => {
  return (
    <div className="px-4 md:px-0 mt-10">
      <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-2xl">
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead className="w-1/4">
                <div className="mb-8 text-[#000] space-y-2">
                  <h2 className="text-3xl md:text-3xl font-semibold">
                    Find Your Compliance Plan
                  </h2>
                  <p>
                    Flexible, scorable, and tailored solutions to keep your firm
                    compliant and confident.
                  </p>
                </div>
              </TableHead>
              <TableHead className="w-1/4">
                <div className="space-y-2 text-center border border-b-0 rounded-xl rounded-b-none h-full pt-8">
                  <div className="space-y-2">
                    <div className="font-semibold text-xl text-[#000]">
                      Pay As You Use
                    </div>
                    <div className="text-primary text-lg font-semibold">
                      Top-up Anytime
                    </div>
                    <p className="text-xs text-[#1F1F1F] w-44 mx-auto">
                      From seeking assistance to compliance support without
                      long-term commitments
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Button className="w-44 mx-auto mt-6 transition-all duration-300 ease-in-out hover:scale-105">
                      Try for Free
                    </Button>
                    <div className="text-xs text-center text-[#000]">
                      or <span className="text-primary">top-up now</span>
                    </div>
                  </div>
                </div>
              </TableHead>
              <TableHead className="w-1/4">
                <div className="space-y-8 text-center relative border border-b-0 rounded-xl rounded-b-none h-full">
                  <div className="absolute -top-0 right-0 bg-primary text-white text-xs px-2 py-1 rounded-xl rounded-ss-none rounded-ee-none flex items-center gap-1">
                    <Star className="h-3 w-3 inline-block" />
                    <span>Most Popular</span>
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-xl text-[#000]">
                      Professional
                    </div>
                    <div className="text-primary text-lg font-semibold">
                      £49 <span className="text-sm text-[#7C7C7C]">/month</span>
                    </div>
                    <p className="text-xs text-[#1F1F1F] w-44 mx-auto">
                      Firms aiming to stay ahead of compliance requirements and
                      maintain quality accreditations
                    </p>
                  </div>
                  <Button className="w-44 mx-auto mt-6 transition-all duration-300 ease-in-out hover:scale-105">
                    Get Professional
                  </Button>
                </div>
              </TableHead>
              <TableHead className="w-1/4">
                <div className="space-y-8 text-center border border-b-0 rounded-xl rounded-b-none h-full pt-8">
                  <div className="space-y-2">
                    <div className="font-semibold text-xl text-[#000]">
                      Enterprise
                    </div>
                    <div className="text-primary text-lg font-semibold">
                      Custom Quote
                    </div>
                    <p className="text-xs text-[#1F1F1F] w-44 mx-auto">
                      From managing high-risk firms, multiple legal service or
                      future flagman
                    </p>
                  </div>
                  <Button className="w-44 mx-auto mt-6 transition-all duration-300 ease-in-out hover:scale-105">
                    Contact Sales
                  </Button>
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow className="border-none">
              <TableCell className="font-medium">Core</TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2 h-10"></div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2 h-10"></div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2 h-10"></div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none space-x-10">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Minimum Commitment</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    No Contract
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">12 Months</p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">24 Months</p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">User Licenses</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Single User
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Single User
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Multiple Users
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Accessibility</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Desktop Only
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Desktop Only
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Desktop & Mobile
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Key Benefits</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Flexibility
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Comprehensive Support
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Scalable Solutions
                  </p>
                </div>
              </TableCell>
            </TableRow>

            <TableRow className="border-none">
              <TableCell className="font-medium">Features</TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2 h-10"></div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2 h-10"></div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2 h-10"></div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Interactive Data Assistance</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4 text-center" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Create & Manage Uncertainty</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Account & Data Security</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Step-by-Step Guidance</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Automated Policy Review</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Document Upload</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">-</p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Up to 15 MB
                  </p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">
                    Up to 100 MB
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">File Review & Analysis</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">-</p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">-</p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Voice Assistant</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">-</p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">-</p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0">
                <p className="border-b mr-4">Upload Custom Compliance Manual</p>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">-</p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b text-center w-44 mx-auto">-</p>
                </div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-y-0 p-2">
                  <p className="border-b w-44 mx-auto flex items-center justify-center">
                    <Check className="h-4 w-4" />
                  </p>
                </div>
              </TableCell>
            </TableRow>
            <TableRow className="border-none">
              <TableCell className="!py-0"></TableCell>
              <TableCell className="!py-0">
                <div className="border border-t-0 rounded-b-xl p-2 h-10"></div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-t-0 rounded-b-xl p-2 h-10"></div>
              </TableCell>
              <TableCell className="!py-0">
                <div className="border border-t-0 rounded-b-xl p-2 h-10"></div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <p className="text-sm text-gray-500 mt-6 text-center">
          Mobile functionality on Pay As You Use and Professional plans is
          limited but still usable, with full optimisation exclusive to
          Enterprise
        </p>
      </div>
    </div>
  );
};

export default PricingTable;
