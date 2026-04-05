import { SITE } from '@/shared/config';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { PortfolioPreviewCard } from './PortfolioPreviewCard';

const PORTFOLIO_ITEMS = [
	{
		title: 'Восстановление ноуската',
		car: 'Kia Sportage',
		price: 'от 45 000 ₽',
		term: '5 дней',
		before: '/portfolio/sportage-before.jpg',
		after: '/portfolio/sportage-after.jpg',
	},
	{
		title: 'Задний бампер и крыло',
		car: 'Mini Cooper',
		price: '24 000 ₽',
		term: '3 дня',
		before: '/portfolio/mini-before.jpg',
		after: '/portfolio/mini-after.jpg',
	},
	{
		title: 'Удаление царапины на бампере',
		car: 'Infiniti QX50',
		price: '8 000 ₽',
		term: '1 день',
		before: '/portfolio/qx50-before.jpg',
		after: '/portfolio/qx50-after.jpg',
	},
];

export const PortfolioPreview = () => {
	return (
		<section className='py-16 bg-gray-50'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col justify-between items-start gap-4 mb-12 md:flex-row md:items-end'>
					<div>
						<h2 className='text-3xl font-bold mb-4'>До и после ремонта</h2>
						<p className='text-gray-600 text-lg'>
							Реальные примеры кузовного ремонта: фото до и после, сроки и
							стоимость работ.
						</p>
						<Link
							className='text-blue-600 text-lg font-semibold hover:text-blue-700 transition'
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
