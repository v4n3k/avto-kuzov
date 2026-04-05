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

	const initMap = () => {
		const ymaps = window.ymaps;
		const container = mapRef.current;

		if (!ymaps || !container) return;

		ymaps.ready(() => {
			// защита от повторной инициализации
			if (container.childElementCount > 0) return;

			const map = new ymaps.Map(container, {
				center: SITE.addressCoords,
				zoom: 15,
				controls: ['zoomControl', 'fullscreenControl'],
			});

			map.geoObjects.add(
				new ymaps.Placemark(SITE.addressCoords, {
					balloonContent: SITE.name,
				}),
			);
		});
	};

	return (
		<>
			<Script
				src='https://api-maps.yandex.ru/2.1/?lang=ru_RU'
				strategy='lazyOnload'
				onLoad={initMap}
			/>

			<div
				ref={mapRef}
				className='h-96 w-full rounded-md overflow-hidden shadow-md bg-gray-100'
			/>
		</>
	);
};
