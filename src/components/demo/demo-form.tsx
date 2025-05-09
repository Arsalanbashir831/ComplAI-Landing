
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import Image from 'next/image';

export default function DemoForm() {
    return (
        <div className="grid md:grid-cols-2  px-4 md:px-12">
            <div className="w-full flex justify-center  ">
                <div className="w-full max-w-6xl px-4 flex flex-col">

                    {/* Heading */}
                    <h2 className="text-5xl font-bold leading-tight mb-4 text-black">
                        Let’s Walk You <br className="hidden sm:block" />
                        Through Smarter Compliance.
                    </h2>
                    <p className="text-lg text-gray-700 mb-12">
                        All your compliance tools. One powerful AI platform.
                    </p>

                    {/* Illustration */}
                    <div className="relative w-full max-w-3xl aspect-[1.2/1]">
                        <Image
                            src="/images/demohead.svg" // replace with actual path
                            alt="Demo Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            

            <div className="w-4/5 space-y-4 pt-8 flex-1 order-1 md:order-2">
                <Input placeholder="Your full name" className="py-6" />
                <Input type="email" placeholder="Your email" className="py-6" />
                <Input placeholder="Company name" className="py-6" />
                <Input placeholder="Your role" className="py-6" />
                <Input placeholder="+44" className="py-6" />
                <Textarea placeholder="Write a message" className="h-[200px] py-6" />
                <Button className="w-full transition-all duration-300 ease-in-out hover:scale-105">
                    Submit Enquiry
                </Button>
            </div>
        </div>
    );
}
