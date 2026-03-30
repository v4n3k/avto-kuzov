import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Кузовной ремонт',
	description: 'Кузовной ремонт с гарантией. Оценка по фото за 15 минут.',
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
				<Header />

				<main className='flex-1'>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						{children}
					</div>
				</main>

				<Footer />
			</body>
		</html>
	);
}
