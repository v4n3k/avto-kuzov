import { SITE } from '@/shared/config';
import Link from 'next/link';
import { BsArrowRight, BsCheck2 } from 'react-icons/bs';

const PRICE_ITEMS = [
	{
		title: 'Покраска элемента',
		price: 'от 9 500 ₽',
		description: 'Крыло, дверь, капот или багажник. Включает подбор краски.',
	},
	{
		title: 'Ремонт бампера',
		price: 'от 4 500 ₽',
		description:
			'Устранение трещин, пайка пластика и восстановление креплений.',
	},
	{
		title: 'Рихтовка (стапель)',
		price: 'от 15 000 ₽',
		description: 'Восстановление геометрии кузова после серьезных ДТП.',
	},
	{
		title: 'Полировка кузова',
		price: 'от 12 000 ₽',
		description: 'Восстановление блеска и удаление мелких царапин (паутины).',
	},
	{
		title: 'Локальный ремонт',
		price: 'от 3 500 ₽',
		description:
			'Устранение мелких сколов и царапин без полной покраски детали.',
	},
	{
		title: 'Ремонт порогов',
		price: 'от 8 000 ₽',
		description:
			'Замена или восстановление порогов, антикоррозийная обработка.',
	},
];

export const PricePreview = () => {
	return (
		<section className='py-16 bg-gray-50' id='price-preview'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
					<div className='max-w-2xl'>
						<h2 className='text-3xl font-bold text-gray-900 mb-4'>
							Стоимость работ
						</h2>
						<p className='text-gray-600 text-lg'>
							Прозрачное ценообразование без скрытых платежей. Точная стоимость
							рассчитывается после осмотра или по фото.
						</p>
					</div>
					<Link
						href={SITE.pages.prices}
						className='inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group'
					>
						Смотреть весь прайс-лист
						<BsArrowRight
							className='group-hover:translate-x-1 transition-transform'
							strokeWidth='0.7px'
						/>
					</Link>
				</div>

				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{PRICE_ITEMS.map((item, index) => (
						<li
							key={index}
							className='bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col'
						>
							<div className='flex justify-between items-start mb-4'>
								<h3 className='text-lg font-bold text-gray-900 pr-4 leading-tight'>
									{item.title}
								</h3>
								<span className='text-blue-600 font-extrabold text-xl whitespace-nowrap'>
									{item.price}
								</span>
							</div>

							<p className='text-gray-500 text-sm leading-relaxed mb-6 grow'>
								{item.description}
							</p>

							<div className='flex items-center gap-2 text-green-600 text-xs font-bold uppercase tracking-wider'>
								<BsCheck2 size={16} strokeWidth={1} />
								<span>Работа + Материалы</span>
							</div>
						</li>
					))}
				</ul>

				<div className='mt-12 p-8 bg-blue-600 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg shadow-blue-600/20'>
					<div className='text-center lg:text-left text-white'>
						<h4 className='text-xl font-bold mb-2'>Нужна точная оценка?</h4>
						<p className='opacity-90'>
							Пришлите фото повреждений — мы рассчитаем стоимость за 15 минут
						</p>
					</div>
					<a
						href={SITE.socials.whatsapp}
						className='px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors whitespace-nowrap'
					>
						Оценить по фото в WhatsApp
					</a>
				</div>
			</div>
		</section>
	);
};
