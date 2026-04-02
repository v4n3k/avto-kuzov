import { Advantages } from '@/widgets/advantages';
import { BrandsTicker } from '@/widgets/brand-ticker';
import { Faq } from '@/widgets/faq';
import { Hero } from '@/widgets/hero';
import { Map } from '@/widgets/map';
import { PortfolioPreview } from '@/widgets/portfolio-preview';
import { PricePreview } from '@/widgets/price-preview';

export const HomePage = () => {
	return (
		<div className='flex flex-col gap-24 pt-5'>
			<Hero />
			<Advantages />
			<PortfolioPreview />
			<PricePreview />
			<BrandsTicker />
			<Faq />
			<Map />
		</div>
	);
};
