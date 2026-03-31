'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import faqImg from './faq-img.avif';

type FAQItem = {
	question: string;
	answer: string;
};

const FAQ_DATA: FAQItem[] = [
	{
		question: 'Как получить точную стоимость ремонта по фото?',
		answer:
			'Просто отправьте нам в WhatsApp 3-4 фотографии повреждений с разных ракурсов. Мастер оценит объем работ и назовет итоговую стоимость в течение 15 минут.',
	},
	{
		question: 'Сколько времени занимает кузовной ремонт?',
		answer:
			'В среднем от 1 до 7 дней в зависимости от объема повреждений и типа ремонта.',
	},
	{
		question: 'Даёте ли вы гарантию на работы?',
		answer:
			'Да, мы предоставляем официальную гарантию 12 месяцев по договору. Она распространяется на отсутствие отслоений и изменения цвета краски, а также на сохранность геометрии восстановленных деталей. По окончании работ вы получаете гарантийный талон.',
	},

	{
		question: 'Можно ли сделать ремонт с моей страховкой?',
		answer:
			'Да, мы работаем с большинством страховых компаний и поможем оформить документы.',
	},
	{
		question: 'Предоставляете ли вы эвакуатор?',
		answer:
			'Да, при необходимости мы можем организовать эвакуацию вашего автомобиля.',
	},
];

export const Faq = () => {
	const [openIndex, setOpenIndex] = useState<number>(0);

	const handleClick = (index: number) => {
		setOpenIndex(index);
	};

	return (
		<section className='bg-gray-50 py-16' id='faq'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
					Часто задаваемые вопросы
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
					<div className='relative h-75 lg:h-125 w-full rounded-2xl overflow-hidden shadow-lg'>
						<Image
							src={faqImg}
							alt='Наш мастер за работой'
							fill
							placeholder='blur'
							objectFit='cover'
							sizes='(max-width: 1024px) 100vw, 50vw'
						/>
						<div className='absolute inset-0 bg-blue-600/5' />
					</div>

					<div className='space-y-4'>
						{FAQ_DATA.map((item, index) => {
							const isOpen = openIndex === index;

							return (
								<div
									key={index}
									className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
										isOpen
											? 'shadow-md bg-white border-blue-100'
											: 'bg-white/50 hover:bg-white'
									}`}
								>
									<button
										className='w-full text-left px-5 py-5 flex justify-between items-center text-gray-800 font-semibold transition-colors cursor-pointer group'
										onClick={() => handleClick(index)}
									>
										<span className='pr-4 leading-tight'>{item.question}</span>
										<span
											className={`text-blue-600 transition-transform duration-300 ${
												isOpen ? 'rotate-180' : 'rotate-0'
											}`}
										>
											<BsChevronDown size={20} strokeWidth='1' />
										</span>
									</button>

									<div
										className={`transition-all duration-500 ease-in-out overflow-hidden px-5 text-gray-600 leading-relaxed ${
											isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
										}`}
									>
										<div className='pt-2 border-t border-gray-100'>
											{item.answer}
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};
