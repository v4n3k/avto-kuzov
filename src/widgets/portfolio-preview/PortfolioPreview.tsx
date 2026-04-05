import { SITE } from '@/shared/config';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { PortfolioPreviewCard } from './PortfolioPreviewCard';

const PORTFOLIO_ITEMS = [
	{
		title: 'Покраска крыла',
		car: 'Mazda CX-5',
		price: 'от 9 500 ₽',
		term: '1 день',
		before: '/faq/faq-img.avif',
		after: '/hero/kuzovnoy-remont.webp',
	},
	{
		title: 'Дверь и порог',
		car: 'BMW X5',
		price: '24 000 ₽',
		term: '3 дня',
		before: '/faq/faq-img.avif',
		after: '/hero/kuzovnoy-remont.webp',
	},
	{
		title: 'Ремонт бампера',
		car: 'Hyundai Solaris',
		price: '12 000 ₽',
		term: '2 дня',
		before: '/faq/faq-img.avif',
		after: '/hero/kuzovnoy-remont.webp',
	},
];

export const PortfolioPreview = () => {
	return (
		<section className='py-16 bg-gray-50'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-end mb-12'>
					<div>
						<h2 className='text-3xl font-bold mb-4'>До и после ремонта</h2>
						<p className='text-gray-600'>
							Реальные примеры кузовного ремонта: фото до и после, сроки и
							стоимость работ
						</p>
						<Link
							className='text-blue-600 font-semibold hover:text-blue-700 transition'
							href={SITE.pages.contacts}
						>
							Хотите так же? Запишитесь
						</Link>
					</div>
					<Link
						href={SITE.pages.portfolio}
						className='inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group'
					>
						Смотреть все работы
						<BsArrowRight
							className='group-hover:translate-x-1 transition-transform'
							strokeWidth='0.7px'
						/>
					</Link>
				</div>

				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{PORTFOLIO_ITEMS.map((item, index) => (
						<PortfolioPreviewCard key={index} item={item} />
					))}
				</ul>
			</div>
		</section>
	);
};
