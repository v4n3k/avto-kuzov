'use client';

import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/widgets/map').then(m => m.Map), {
	ssr: false,
	loading: () => (
		<div className='h-96 w-full rounded-md bg-gray-100 animate-pulse' />
	),
});

export const MapWrapper = () => {
	return (
		<section className='py-16' id='map'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
					Наш сервис на карте
				</h2>
				<Map />
			</div>
		</section>
	);
};
