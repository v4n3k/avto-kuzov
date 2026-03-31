import { Faq } from '@/widgets/faq';
import { Hero } from '@/widgets/hero';
import { Map } from '@/widgets/map';

export const HomePage = () => {
	return (
		<div className='flex flex-col gap-16'>
			<Hero />
			<Faq />
			<Map />
		</div>
	);
};
