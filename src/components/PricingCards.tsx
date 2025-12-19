import { siteContent } from '../data/content';
import Card from './Card';
import HeadingScrollAnimation from './HeadingScrollAnimation';

const PricingCards = () => {
    // Group prices by category
    const groupedPrices = siteContent.prices.reduce((acc, item) => {
        const category = item.category || 'Other Services';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {} as Record<string, typeof siteContent.prices>);

    return (
        <div className="space-y-16">
            {Object.entries(groupedPrices).map(([category, items]) => (
                <div key={category}>
                    <div className="flex items-center gap-4 mb-8">
                        <HeadingScrollAnimation
                            as="h3"
                            className="text-2xl font-bold text-teal-800 shrink-0"
                            variant="fade-up"
                        >
                            {category}
                        </HeadingScrollAnimation>
                        <div className="h-0.5 bg-teal-100 w-full rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {items.map((item, index) => (
                            <Card
                                key={index}
                                delay={index * 0.1}
                                className="flex flex-col justify-between h-full border border-teal-50 hover:border-teal-200 transition-all duration-300"
                            >
                                <div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2 leading-tight">{item.service}</h4>
                                    <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 mb-6">
                                        <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {item.duration}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                                    <div className="flex flex-col">
                                        <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Price</span>
                                        <span className="text-3xl font-bold text-teal-600 leading-none">{item.price}</span>
                                    </div>
                                    <a
                                        href="https://app.theclinicportal.com/?Email=info@bodyfirst.clinic#login"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center bg-teal-50 text-teal-700 font-bold py-2.5 px-4 rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-300 text-sm group"
                                    >
                                        Book
                                        <svg className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PricingCards;
