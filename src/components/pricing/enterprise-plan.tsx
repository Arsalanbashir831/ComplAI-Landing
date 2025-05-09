// components/sections/SolutionsSection.tsx
import SolCard, { CardProps } from '../sol-card';

const solutions: CardProps[] = [
    {
        title: 'Companion',
        description: 'Your AI-powered compliance expert.',
        image: '/images/companion.svg',
        buttonLabel: 'Learn More →',
        buttonLink: '/companion',
        imageAlign: 'right',
    },
    {
        title: 'Resolve',
        description: 'Let AI handle complaints efficiently.',
        image: '/images/resolve.svg',
        buttonLabel: 'Learn More →',
        buttonLink: '/resolve',
        imageAlign: 'right',
    },
    {
        title: 'Compose',
        description: 'Streamline policy drafting with AI support.',
        image: '/images/compose.svg',
        comingSoon: true,
        imageAlign: 'left',
    },
    {
        title: 'Review',
        description: 'Upload your policies and let AI find and fix compliance gaps.',
        image: '/images/review.svg',
        comingSoon: true,
        imageAlign: 'right',
    },
    {
        title: 'Validate',
        description: 'Simplify case file review with AI insights.',
        image: '/images/validate.svg',
        comingSoon: true,
    },
    {
        title: 'Audit',
        description: 'Achieve audit readiness and peer review standards with AI.',
        image: '/images/audit.svg',
        comingSoon: true,
    },
];


export default function EnterprisePlan() {
    return (
        <section className="text-center px-4 py-12 flex flex-col justify-center items-center">
            <h2 className="text-6xl font-bold mb-16 ">
                Available with
                <span className="bg-gradient-to-b from-[#179DFF] to-[#1754FF] bg-clip-text text-transparent "> 
                     Enterprise Plans
                </span>
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-stretch">
                {solutions.map((card, idx) => (
                    <SolCard key={idx} {...card} />
                ))}
            </div>
            
        </section>
    );
}
