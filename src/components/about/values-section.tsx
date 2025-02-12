import Image from 'next/image';

import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';

interface ValueCardProps {
  title: string;
  description: string;
  icon?: string;
  leftImage?: string;
  rightImage?: string;
  topImage?: string;
  bottomImage?: string;
  className?: string;
  bottomImageClassName?: string;
}

function ValueCard({ title, description, icon, className }: ValueCardProps) {
  return (
    <div
      className={cn(
        'p-4 bg-[url(/images/bg/value-card-bg.svg)] bg-cover bg-center bg-no-repeat rounded-3xl',
        className
      )}
    >
      <div className="relative p-0.5 bg-gradient-to-l from-white to-[#0a59eb96] rounded-3xl h-full">
        <Card className="h-full overflow-hidden bg-white hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center rounded-3xl">
          <CardContent className="p-6 flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center gap-2">
              {icon && <Image src={icon} width={52} height={52} alt="" />}
              <h3 className="text-2xl font-semibold text-[#000]">{title}</h3>

              <p className="text-lg text-[#1D1E4A]">{description}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function ValuesSection() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold mb-4">Our Values</h2>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-6 ">
          {/* First Row */}
          <ValueCard
            className="md:col-span-2"
            title="Technology-Driven Leadership"
            description="We	pioneer the use	of cutting-edge technology to transform	compliance in	the legal	industry,	setting	new standards	for	efficiency and innovation"
            icon="/images/icons/technology.svg"
          />
          <ValueCard
            title="Collaboration for Impact"
            description="We foster teamwork and partnership to create meaningful change for our users and the industry."
            icon="/images/icons/collaborate.svg"
          />

          {/* Second Row */}
          <ValueCard
            title="Integrity	and	Accountability"
            description="We are committed to acting with integrity, taking ownership of our work, and delivering dependable solutions."
            icon="/images/icons/integrity.svg"
          />
          <ValueCard
            className="col-span-2"
            title="Empowerment Through Simplicity"
            description="We enable legal teams to master compliance effortlessly, delivering tools that make the complex simple and accessible."
            icon="/images/icons/empowerment.svg"
          />
        </div>
      </div>
    </section>
  );
}
