'use client';

import { SITE } from '@/shared/config';
import Script from 'next/script';
import { useRef } from 'react';

declare global {
	interface Window {
		ymaps: any;
	}
}

export const Map = () => {
	const mapRef = useRef<HTMLDivElement>(null);

	const initializeMap = () => {
		if (window.ymaps && mapRef.current) {
			window.ymaps.ready(() => {
				if (mapRef.current?.innerHTML !== '') return;

				const map = new window.ymaps.Map(mapRef.current, {
					center: SITE.addressCoords,
					zoom: 15,
					controls: ['zoomControl', 'fullscreenControl'],
				});

				const placemark = new window.ymaps.Placemark(SITE.addressCoords, {
					balloonContent: SITE.name,
				});

				map.geoObjects.add(placemark);
			});
		}
	};

	return (
		<section className='py-16' id='map'>
			<Script
				src='https://api-maps.yandex.ru/2.1/?lang=ru_RU'
				strategy='lazyOnload'
				onLoad={initializeMap}
			/>

			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
					Наш сервис на карте
				</h2>
				<div
					ref={mapRef}
					className='h-96 w-full rounded-md overflow-hidden shadow-md bg-gray-100'
				/>
			</div>
		</section>
	);
};
