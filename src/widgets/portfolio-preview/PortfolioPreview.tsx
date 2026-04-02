import { SITE } from '@/shared/config';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsClock } from 'react-icons/bs';
import img from '../hero/kuzovnoy-remont.webp';

const PORTFOLIO_ITEMS = [
	{
		title: 'Локальная покраска переднего крыла',
		car: 'Mazda CX-5',
		price: 'от 9 500 ₽',
		term: '1 день',
		image: '/portfolio/mazda-wing.webp',
		description:
			'Устранение глубоких царапин и притертости. Полное попадание в цвет.',
	},
	{
		title: 'Восстановление двери и порога',
		car: 'BMW X5',
		price: '24 000 ₽',
		term: '3 дня',
		image: '/portfolio/bmw-door.webp',
		description:
			'Рихтовка вмятины без замены деталей, шпатлевание и полная покраска.',
	},
	{
		description:
			'Ремонт разрыва пластика, пайка, восстановление текстуры и покраска в мат.',
		title: 'Ремонт и окрас заднего бампера',
		car: 'Hyundai Solaris',
		price: '12 000 ₽',
		term: '2 дня',
		image: '/portfolio/solaris-bumper.webp',
	},
	{
		title: 'Удаление вмятины без покраски (PDR)',
		car: 'Mercedes-Benz E-Class',
		price: '5 500 ₽',
		term: '3 часа',
		image: '/portfolio/merc-pdr.webp',
		description:
			'Исправление вмятины от падения ветки. Заводское ЛКП сохранено.',
	},
	{
		title: 'Восстановление после ДТП (Стапель)',
		car: 'Skoda Octavia',
		price: 'от 85 000 ₽',
		term: '10 дней',
		image: '/portfolio/skoda-crash.webp',
		description:
			'Вытяжка лонжерона, замена капота и фар, полная покраска морды.',
	},
	{
		title: 'Абразивная полировка кузова',
		car: 'Audi Q7',
		price: '18 000 ₽',
		term: '1.5 дня',
		image: '/portfolio/audi-polish.webp',
		description:
			'Удаление паутины и мелких царапин, нанесение двойного слоя керамики.',
	},
];

export const PortfolioPreview = () => {
	return (
		<section className='py-16 bg-white' id='portfolio-preview'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6'>
					<div className='max-w-2xl'>
						<h2 className='text-3xl font-bold text-gray-900 mb-4'>
							Примеры наших работ
						</h2>
						<p className='text-gray-600 text-lg'>
							Посмотрите, как мы возвращаем автомобилям первозданный вид.
							Работаем с повреждениями любой сложности.
						</p>
					</div>
					<Link
						href={SITE.pages.portfolio}
						className='inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group'
					>
						Смотреть все работы
						<BsArrowRight className='group-hover:translate-x-1 transition-transform' />
					</Link>
				</div>

				<ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{PORTFOLIO_ITEMS.slice(0, 3).map((item, index) => (
						<li key={index}>
							<Link
								href={SITE.pages.portfolio}
								className='group block bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300'
							>
								<div className='relative h-64 w-full overflow-hidden'>
									<Image
										className='object-cover object-center group-hover:scale-105 transition-transform duration-500'
										src={img}
										alt={item.title}
										placeholder='blur'
										fill
										sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
									/>
									<div className='absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg'>
										{item.car}
									</div>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-bold text-gray-900 mb-4 flex flex-col justify-center min-h-14 leading-tight'>
										<span className='line-clamp-2'>{item.title}</span>
									</h3>

									<div className='flex items-center justify-between py-4 border-y border-gray-200/60 mb-4'>
										<div className='flex flex-col gap-1'>
											<span className='text-xs text-gray-400 uppercase font-bold tracking-tight'>
												Срок
											</span>
											<div className='flex items-center gap-1.5 text-gray-700 font-semibold'>
												<BsClock className='text-blue-500' />
												{item.term}
											</div>
										</div>
										<div className='flex flex-col gap-1 text-right'>
											<span className='text-xs text-gray-400 uppercase font-bold tracking-tight'>
												Стоимость
											</span>
											<div className='text-blue-600 font-bold text-lg'>
												{item.price}
											</div>
										</div>
									</div>

									<div className='w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors duration-300'>
										Подробнее
									</div>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
