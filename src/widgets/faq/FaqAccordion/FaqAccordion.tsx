'use client';

import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

export type FaqItem = {
	question: string;
	answer: string;
};

export const FaqAccordion = ({ faqItems }: { faqItems: FaqItem[] }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<ul className='space-y-4'>
			{faqItems.map((item, index) => {
				const isOpen = activeIndex === index;

				return (
					<li
						key={index}
						className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${
							isOpen
								? 'shadow-md bg-white border-blue-100'
								: 'bg-white/50 hover:bg-white'
						}`}
					>
						<button
							className='w-full text-left px-5 py-5 flex justify-between items-center text-gray-800 font-semibold transition-colors cursor-pointer group'
							onClick={() => setActiveIndex(index)}
						>
							<span className='pr-4 leading-tight'>{item.question}</span>
							<span
								className={`text-blue-600 transition-transform duration-300 ${
									isOpen ? 'rotate-180' : 'rotate-0'
								}`}
							>
								<BsChevronDown size={20} />
							</span>
						</button>

						<div
							className={`transition-all duration-500 ease-in-out overflow-hidden px-5 text-gray-600 leading-relaxed ${
								isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'
							}`}
						>
							<div className='pt-2 border-t border-gray-100'>{item.answer}</div>
						</div>
					</li>
				);
			})}
		</ul>
	);
};
