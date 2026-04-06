'use client';

import { FaStar } from 'react-icons/fa';

const REVIEWS = [
	{
		name: 'Алексей',
		text:
			'Сделали бампер как новый, цвет попали идеально. Сроки соблюли, цена как договаривались.',
		rating: 5,
	},
	{
		name: 'Ирина',
		text:
			'Очень понравился сервис — быстро оценили по фото, записали без очереди. Рекомендую!',
		rating: 5,
	},
	{
		name: 'Дмитрий',
		text: 'Убирали вмятину без покраски. Вообще не видно, что что-то было.',
		rating: 5,
	},
];

export const ReviewsPreview = () => {
	return (
		<section className='py-20 bg-white' id='reviews'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='max-w-2xl mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-4'>
						Отзывы клиентов
					</h2>
					<p className='text-gray-600 text-lg'>
						Наш рейтинг – 4.9 на основе более 120 честных отзывов.
					</p>
					<a
						href='https://www.avito.ru/brands/88a8d37735abbc227325c4a91f5e2433#open-reviews-list'
						target='_blank'
						rel='noopener noreferrer'
						className='text-blue-600 text-lg font-semibold rounded-md hover:text-blue-700 transition'
					>
						Смотреть отзывы на Avito
					</a>
				</div>

				<ul className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{REVIEWS.map((review, i) => (
						<li
							key={i}
							className='flex flex-col p-6 rounded-2xl border border-gray-100 shadow-sm bg-gray-50'
						>
							<div className='flex items-center gap-4 mb-3'>
								<div className='flex'>
									{Array.from({ length: review.rating }).map((_, i) => (
										<FaStar
											key={i}
											size={18}
											className='text-yellow-400 fill-yellow-400'
										/>
									))}
								</div>
								<span className='font-semibold text-gray-900'>
									{review.name}
								</span>
							</div>
							<p className='flex-1 text-gray-700'>{review.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};
