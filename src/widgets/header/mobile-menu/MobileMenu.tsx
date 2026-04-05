'use client';

import { SITE } from '@/shared/config/site';
import { TelegramIcon } from '@/shared/ui/icons';
import { WhatsappIcon } from '@/shared/ui/icons/WhatsappIcon';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

export const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (isOpen) {
			const scrollY = window.scrollY;

			document.body.style.position = 'fixed';
			document.body.style.top = `-${scrollY}px`;
			document.body.style.left = '0';
			document.body.style.right = '0';
		} else {
			const scrollY = document.body.style.top;

			document.body.style.position = '';
			document.body.style.top = '';

			if (scrollY) {
				window.scrollTo(0, -parseInt(scrollY));
			}
		}
	}, [isOpen]);

	const close = () => setIsOpen(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className='lg:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 transition'
			>
				<HiOutlineMenu size={24} />
			</button>

			{mounted &&
				createPortal(
					<div className='fixed inset-0 z-9999 pointer-events-none'>
						<div
							onClick={close}
							className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
								isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
							}`}
						/>

						<div
							className={`absolute top-0 right-0 h-screen w-[85%] max-w-sm bg-white shadow-xl transform transition-transform duration-300 pointer-events-auto ${
								isOpen ? 'translate-x-0' : 'translate-x-full'
							}`}
						>
							<div className='p-5 flex flex-col h-full'>
								<div className='flex justify-between items-center mb-6'>
									<span className='font-semibold text-lg'>{SITE.name}</span>

									<button
										onClick={close}
										className='p-2 rounded-md hover:bg-gray-100 transition'
									>
										<IoClose size={26} />
									</button>
								</div>
								<nav className='flex flex-col gap-5 text-lg'>
									<Link href={SITE.pages.services} onClick={close}>
										Услуги
									</Link>
									<Link href={SITE.pages.portfolio} onClick={close}>
										Работы
									</Link>
									<Link href={SITE.pages.prices} onClick={close}>
										Цены
									</Link>
									<Link href={SITE.pages.reviews} onClick={close}>
										Отзывы
									</Link>
									<Link href={SITE.pages.contacts} onClick={close}>
										Контакты
									</Link>
								</nav>
								<div className='flex-1' />
								<div className='flex flex-col gap-5'>
									<div className='flex gap-7'>
										<div className='flex gap-3 text-2xl'>
											<WhatsappIcon size={28} />
											<TelegramIcon size={28} />
										</div>
										<a
											href={`tel:${SITE.phone}`}
											className='block text-lg font-semibold'
										>
											{SITE.phone}
										</a>
									</div>
									<Link
										href={SITE.pages.contacts}
										onClick={close}
										className='block text-center bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition'
									>
										Оценить авто
									</Link>
								</div>
							</div>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
};
