import { SITE } from '@/shared/config';
import Image from 'next/image';
import Link from 'next/link';
import img from './kuzovnoy-remont.webp';

export const Hero = () => {
	return (
		<section className='relative bg-gray-50'>
			<div className='absolute inset-0'>
				<Image
					className='w-full h-full object-cover'
					priority
					fill
					sizes='100vw'
					src={img}
					alt='Кузовной ремонт'
				/>
				<div className='absolute inset-0 bg-black/40' />
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center'>
				<h1 className='text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg'>
					{SITE.name} — кузовной ремонт в {SITE.cityPrepositional}
				</h1>
				<p className='mt-4 text-lg sm:text-xl text-gray-100 drop-shadow-md max-w-2xl mx-auto'>
					{'Быстро, качественно и с гарантией 12 месяцев.'}
				</p>
				<Link
					href={SITE.pages.contacts}
					className='inline-block mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition'
				>
					{'Оценить авто'}
				</Link>
			</div>
		</section>
	);
};
