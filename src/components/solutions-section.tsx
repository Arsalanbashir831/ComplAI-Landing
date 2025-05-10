// components/sections/SolutionsSection.tsx
import SolCard, { CardProps } from './sol-card';

const solutions: CardProps[] = [
    {
        title: 'Companion',
        description: 'Your AI-powered compliance expert.',
        image: '/images/companion.svg',
        buttonLabel: 'Learn More →',
        buttonLink: '/companion',
        imageAlign: 'left',
    },
    {
        title: 'Resolve',
        description: 'Let AI handle complaints efficiently.',
        image: '/images/resolve.svg',
        buttonLabel: 'Learn More →',
        buttonLink: '/resolve',
    },
    {
        title: 'Compose',
        description: 'Streamline policy drafting with AI support.',
        image: '/images/compose.svg',
        comingSoon: true,
    },
    {
        title: 'Review',
        description: 'Upload your policies and let AI find and fix compliance gaps.',
        image: '/images/review.svg',
        comingSoon: true,
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


export default function SolutionsSection() {
    return (
        <section className="text-center px-4 py-12 md:px-6">
            <div className="max-w-7xl mx-auto">


                <h2 className="text-5xl font-bold mb-2">Our Solutions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-10">
                    Discover the innovative features that streamline compliance, enhance productivity, and provide peace of mind. Tailored for legal professionals, by legal professionals.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 items-stretch">
                    {solutions.map((card, idx) => (
                        <SolCard key={idx} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
