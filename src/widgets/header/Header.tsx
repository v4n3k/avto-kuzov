import { SITE } from '@/shared/config/site';
import { TelegramIcon } from '@/shared/ui/icons/TelegramIcon';
import { WhatsappIcon } from '@/shared/ui/icons/WhatsappIcon';
import Link from 'next/link';
import { MobileMenu } from './mobile-menu';

export const Header = () => {
	return (
		<header className='sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/80'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between'>
				<div className='flex items-center gap-3'>
					<Link href='/' className='flex items-center gap-3'>
						<div className='h-9 w-9 rounded-md bg-gray-900 text-white flex items-center justify-center text-sm font-bold'>
							{SITE.logoInitials}
						</div>
						<span className='hidden sm:block font-semibold tracking-tight'>
							{SITE.name}
						</span>
					</Link>
				</div>

				<nav className='hidden lg:flex items-center gap-8 text-sm text-gray-700'>
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
				</nav>

				<div className='hidden lg:flex items-center gap-4'>
					<div className='flex items-center gap-3'>
						<TelegramIcon />
						<WhatsappIcon />
					</div>
					<a
						href={`tel:${SITE.phone}`}
						className='font-medium hover:text-blue-600 transition'
					>
						{SITE.phone}
					</a>

					<Link
						href={SITE.pages.contacts}
						className='bg-blue-600 text-sm font-bold text-white py-2 px-4 rounded-md hover:bg-blue-700 transition'
					>
						Оценить авто
					</Link>
				</div>

				<MobileMenu />
			</div>
		</header>
	);
};
