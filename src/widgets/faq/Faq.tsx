'use client';

import { useState } from 'react';

type FAQItem = {
	question: string;
	answer: string;
};

const FAQ_DATA: FAQItem[] = [
	{
		question: 'Сколько времени занимает кузовной ремонт?',
		answer:
			'В среднем от 1 до 7 дней в зависимости от объема повреждений и типа ремонта.',
	},
	{
		question: 'Даёте ли вы гарантию на работы?',
		answer:
			'Да, на все работы по кузовному ремонту предоставляется гарантия 12 месяцев.',
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

	const toggle = (index: number) => {
		setOpenIndex(index);
	};

	return (
		<section className='bg-gray-50 py-16' id='faq'>
			<div className='mx-auto max-w-3xl px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
					Часто задаваемые вопросы
				</h2>

				<div className='space-y-4'>
					{FAQ_DATA.map((item, index) => {
						const isOpen = openIndex === index;

						return (
							<div
								key={index}
								className={`border border-gray-200 rounded-md overflow-hidden transition-shadow duration-300  ${
									isOpen ? 'shadow-md bg-white' : 'bg-gray-50 hover:shadow-sm'
								}`}
							>
								<button
									className='w-full text-left px-4 py-3 flex justify-between items-center text-gray-800 font-medium hover:bg-gray-100 transition-colors cursor-pointer'
									onClick={() => toggle(index)}
								>
									<span>{item.question}</span>
									<span className='ml-2 text-xl'>{!isOpen && '+'}</span>
								</button>

								<div
									className={`transition-max-height duration-500 ease-in-out overflow-hidden px-4 text-gray-600 ${
										isOpen
											? 'max-h-96 py-3 border-t border-gray-200'
											: 'max-h-0 py-0'
									}`}
								>
									{item.answer}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
