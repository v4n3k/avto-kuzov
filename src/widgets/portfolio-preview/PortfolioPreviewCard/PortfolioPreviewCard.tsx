'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BsClock } from 'react-icons/bs';

export interface PortfolioPreviewItem {
	title: string;
	car: string;
	price: string;
	term: string;
	before: string;
	after: string;
}

interface PortfolioPreviewCardProps {
	item: PortfolioPreviewItem;
}

export const PortfolioPreviewCard = ({ item }: PortfolioPreviewCardProps) => {
	const [showBefore, setShowBefore] = useState(false);

	const toggle = () => setShowBefore(prev => !prev);

	return (
		<li className='bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition'>
			<div
				onClick={toggle}
				className='relative aspect-4/3 cursor-pointer group overflow-hidden'
			>
				<Image
					src={showBefore ? item.before : item.after}
					alt={showBefore ? 'До ремонта' : 'После ремонта'}
					fill
					className={`object-cover transition-all duration-500
						${showBefore ? 'brightness-90 scale-100' : 'brightness-100 scale-105'}
					`}
				/>

				<div
					className={`absolute top-3 left-3 text-xs px-3 py-1.5 rounded-full font-semibold text-white transition-colors
						${showBefore ? 'bg-black/70' : 'bg-blue-600'}
					`}
				>
					{showBefore ? 'До' : 'После'}
				</div>
			</div>

			{/* INFO */}
			<div className='p-4'>
				<h3 className='font-semibold text-lg mb-2'>{item.title}</h3>

				<div className='flex justify-between text-sm text-gray-600 mb-4'>
					<span className='flex items-center gap-1'>
						<BsClock /> {item.term}
					</span>

					<span className='font-bold text-black'>{item.price}</span>
				</div>

				{/* BUTTON */}
				<button
					onClick={toggle}
					className='w-full flex items-center justify-center gap-2 py-2 rounded-lg font-semibold transition cursor-pointer bg-blue-600 text-white hover:bg-blue-700'
				>
					{showBefore ? 'Показать результат' : 'Посмотреть до ремонта'}
				</button>
			</div>
		</li>
	);
};
