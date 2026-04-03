import { SITE } from '@/shared/config';
import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ViewTransition } from 'react';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin', 'cyrillic'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
	title: {
		default: `Кузовной ремонт авто в ${SITE.cityPrepositional} — от ${SITE.minPrice}₽, гарантия 12 месяцев | ${SITE.name}`,
		template: `%s | ${SITE.name}`,
	},
	description: `Профессиональный кузовной ремонт и покраска авто в ${SITE.cityPrepositional}. Гарантия 12 месяцев, оценка по фото за 15 минут. Рихтовка, полировка, удаление коррозии. Без очередей. Запишитесь онлайн или позвоните прямо сейчас!`,
	keywords: [
		'кузовной ремонт',
		'покраска авто',
		'рихтовка',
		'удаление царапин',
		'удаление ржавчины',
		'удаление коррозии',
		'полировка',
		SITE.city,
	],
	openGraph: {
		title: `Кузовной ремонт в ${SITE.cityPrepositional} — ${SITE.name}`,
		description:
			'Качественное восстановление кузова с гарантией. Оцените стоимость ремонта онлайн!',
		url: SITE.url,
		siteName: SITE.name,
		locale: 'ru_RU',
		type: 'website',
		images: [
			{
				url: `${SITE.url}/og.jpg`,
				width: 1200,
				height: 630,
				alt: 'Кузовной ремонт авто',
			},
		],
	},
	icons: {
		icon: '/favicon.ico',
		apple: '/apple-touch-icon.png',
	},
	alternates: {
		canonical: SITE.url,
	},
	robots: {
		index: true,
		follow: true,
	},
	metadataBase: new URL(SITE.url),
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='ru'
			className={`${geistSans.variable} ${geistMono.variable} h-full`}
		>
			<body className='flex min-h-screen flex-col bg-white text-gray-900 antialiased'>
				<ViewTransition
					enter={{
						default: 'fade-in',
						'slide-in': 'slide-from-right', // Соответствует transitionTypes={['slide-in']}
					}}
				>
					<Header />

					<main className='flex-1'>
						<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
							{children}
						</div>
					</main>

					<Footer />
				</ViewTransition>
			</body>
		</html>
	);
}
