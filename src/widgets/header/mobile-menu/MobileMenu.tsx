'use client';

import { SITE } from '@/shared/config/site';
import { TelegramIcon } from '@/shared/ui/icons/TelegramIcon';
import { WhatsappIcon } from '@/shared/ui/icons/WhatsappIcon';
import Link from 'next/link';
import { useState } from 'react';

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const closeMenu = () => {
		setIsOpen(false);
	};

	const toggleMenu = () => {
		setIsOpen(prev => !prev);
	};

	return (
		<>
			<button
				className='lg:hidden text-2xl font-bold'
				onClick={toggleMenu}
				aria-label='Открыть меню'
			>
				☰
			</button>

			{isOpen && (
				<div className='lg:hidden border-t border-gray-200 bg-white'>
					<div className='space-y-4 px-4 py-4 text-sm text-gray-700'>
						{Object.entries(SITE.pages).map(([key, href]) => (
							<Link
								key={key}
								href={href}
								onClick={closeMenu}
								className='block hover:text-blue-600 transition'
							>
								{key === 'services' && 'Услуги'}
								{key === 'portfolio' && 'Работы'}
								{key === 'prices' && 'Цены'}
								{key === 'reviews' && 'Отзывы'}
								{key === 'contacts' && 'Контакты'}
							</Link>
						))}

						<div className='pt-4 border-t border-gray-200 space-y-2'>
							<a
								href={`tel:${SITE.phone}`}
								className='block font-medium hover:text-blue-600 transition'
							>
								{SITE.phone}
							</a>

							<div className='flex items-center gap-3'>
								<WhatsappIcon />
								<TelegramIcon />
							</div>

							<Link
								href={SITE.pages.contacts}
								className='block mt-2 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition'
								onClick={closeMenu}
							>
								Оценить авто
							</Link>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
