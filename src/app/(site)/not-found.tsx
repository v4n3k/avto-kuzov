import { SITE } from '@/shared/config';
import Link from 'next/link';
import { BsArrowLeft, BsWhatsapp } from 'react-icons/bs';

export default function NotFound() {
	return (
		<section className='flex items-center justify-center py-24 bg-gray-50 min-h-[70vh]'>
			<div className='mx-auto max-w-3xl px-4 text-center'>
				<div className='text-7xl sm:text-8xl font-extrabold text-blue-600 mb-6'>
					404
				</div>
				<h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
					Страница не найдена
				</h1>
				<p className='text-gray-600 text-lg mb-10 max-w-xl mx-auto'>
					Возможно, вы перешли по неверной ссылке или страница была удалена. Но
					мы всё ещё можем помочь с кузовным ремонтом
				</p>

				<div className='bg-white p-8 rounded-2xl border border-gray-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 mb-10'>
					<div className='text-center sm:text-left'>
						<h3 className='text-xl font-bold text-gray-900 mb-2'>
							Нужна оценка ремонта?
						</h3>
						<p className='text-gray-600 text-sm'>
							Отправьте фото — рассчитаем стоимость за 15 минут
						</p>
					</div>
					<a
						href={SITE.socials.whatsapp}
						className='inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors'
					>
						<BsWhatsapp size={18} />
						Написать в WhatsApp
					</a>
				</div>

				<div className='flex flex-col sm:flex-row gap-4 justify-center'>
					<Link
						href='/'
						className='inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors'
					>
						<BsArrowLeft />
						На главную
					</Link>
					<Link
						href={SITE.pages.prices}
						className='inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-100 transition-colors'
					>
						Посмотреть цены
					</Link>
				</div>
			</div>
		</section>
	);
}
