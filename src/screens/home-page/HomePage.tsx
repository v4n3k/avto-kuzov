import { Advantages } from '@/widgets/advantages';
import { BrandsTicker } from '@/widgets/brand-ticker';
import { Calculator } from '@/widgets/calculator';
import { Faq } from '@/widgets/faq';
import { Hero } from '@/widgets/hero';
import { MapWrapper } from '@/widgets/map';
import { PortfolioPreview } from '@/widgets/portfolio-preview';
import { PricePreview } from '@/widgets/price-preview';
import { StickyCTA } from '@/widgets/sticky-cta';

export const HomePage = () => {
	return (
		<div className='flex flex-col gap-24'>
			<Hero />
			<PortfolioPreview />
			<Advantages />
			<PricePreview />
			<Calculator />
			<BrandsTicker />
			<Faq />
			<MapWrapper />
			<StickyCTA />
		</div>
	);
};
