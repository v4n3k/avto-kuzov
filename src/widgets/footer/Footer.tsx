import { SITE } from '@/shared/config/site';
import { TelegramIcon } from '@/shared/ui/icons/TelegramIcon';
import { WhatsappIcon } from '@/shared/ui/icons/WhatsappIcon';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className='bg-gray-50 border-t border-gray-200 mt-12'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12'>
				<div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					<div className='flex flex-col gap-2 sm:col-span-2 lg:col-span-1'>
						<div className='flex items-center gap-3'>
							<div className='h-10 w-10 bg-gray-900 text-white flex items-center justify-center rounded-md font-bold'>
								{SITE.logoInitials}
							</div>
							<span className='font-semibold text-lg'>{SITE.name}</span>
						</div>
						<p className='text-gray-600 text-sm mt-2 max-w-xs'>
							Кузовной ремонт с гарантией 12 месяцев. Быстро, качественно,
							надежно.
						</p>
					</div>

					<div className='flex flex-col gap-2 text-sm text-gray-700'>
						<span className='font-semibold mb-2'>Меню</span>
						<Link
							href={SITE.pages.services}
							className='hover:text-blue-600 transition'
						>
							Услуги
						</Link>
						<Link
							href={SITE.pages.portfolio}
							className='hover:text-blue-600 transition'
						>
							Работы
						</Link>
						<Link
							href={SITE.pages.prices}
							className='hover:text-blue-600 transition'
						>
							Цены
						</Link>
						<Link
							href={SITE.pages.reviews}
							className='hover:text-blue-600 transition'
						>
							Отзывы
						</Link>
						<Link
							href={SITE.pages.contacts}
							className='hover:text-blue-600 transition'
						>
							Контакты
						</Link>
					</div>

					<div className='flex flex-col gap-2 text-sm text-gray-700'>
						<span className='font-semibold mb-2'>Контакты</span>
						<a
							href={`tel:${SITE.phone}`}
							className='hover:text-blue-600 transition'
						>
							{SITE.phone}
						</a>
						<a
							href={`mailto:${SITE.email}`}
							className='hover:text-blue-600 transition'
						>
							{SITE.email}
						</a>
						<span>{SITE.address}</span>

						<div className='flex items-center gap-3 mt-2'>
							<TelegramIcon />
							<WhatsappIcon />
						</div>
					</div>
				</div>

				<div className='mt-8 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm flex flex-col lg:flex-row justify-center items-center gap-2'>
					<span>
						© {SITE.year} {SITE.name}. Все права защищены.
					</span>
				</div>
			</div>
		</footer>
	);
};
