import { Advantages } from '@/widgets/advantages';
import { Faq } from '@/widgets/faq';
import { Hero } from '@/widgets/hero';
import { Map } from '@/widgets/map';
import { PortfolioPreview } from '@/widgets/PortfolioPreview';
import { PricePreview } from '@/widgets/price-preview';

export const HomePage = () => {
	return (
		<div className='flex flex-col gap-24'>
			<Hero />
			<Advantages />
			<PortfolioPreview />
			<PricePreview />
			<Faq />
			<Map />
		</div>
	);
};
