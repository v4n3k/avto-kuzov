import { Advantages } from '@/widgets/advantages';
import { Faq } from '@/widgets/faq';
import { Hero } from '@/widgets/hero';
import { Map } from '@/widgets/map';

export const HomePage = () => {
	return (
		<div className='flex flex-col gap-24'>
			<Hero />
			<Advantages />
			<Faq />
			<Map />
		</div>
	);
};
