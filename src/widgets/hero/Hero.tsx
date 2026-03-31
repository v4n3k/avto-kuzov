import { SITE } from '@/shared/config';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsWhatsapp } from 'react-icons/bs'; // Используем ваши react-icons
import img from './kuzovnoy-remont.webp';

export const Hero = () => {
	return (
		<section className='relative min-h-[80vh] flex items-center bg-gray-900'>
			<div className='absolute inset-0 z-0'>
				<Image
					className='object-cover object-center'
					priority
					fill
					sizes='100vw'
					placeholder='blur'
					src={img}
					alt={`Кузовной ремонт в ${SITE.cityPrepositional} - ${SITE.name}`}
				/>

				<div className='absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-transparent' />
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32'>
				<div className='max-w-3xl text-left'>
					<h1 className='text-4xl sm:text-6xl font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-2xl'>
						{SITE.name} — <span className='text-blue-500'>безупречный</span>{' '}
						кузовной ремонт в {SITE.cityPrepositional}
					</h1>
					<p className='mt-6 text-xl text-gray-200 drop-shadow-md max-w-xl leading-relaxed'>
						Восстановим заводской вид вашего автомобиля с гарантией 12 месяцев
						по договору. Онлайн-оценка стоимости по фото.
					</p>

					<div className='mt-10 flex flex-col sm:flex-row gap-4'>
						<Link
							href={SITE.pages.contacts}
							className='flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transform hover:-translate-y-0.5 transition-all shadow-lg shadow-blue-600/30'
						>
							Записаться на осмотр
							<BsArrowRight size={18} />
						</Link>

						<a
							href={SITE.socials.whatsapp}
							target='_blank'
							rel='noopener noreferrer'
							className='flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transform hover:-translate-y-0.5 transition-all shadow-lg shadow-green-600/30'
						>
							<BsWhatsapp size={20} />
							Оценить по WhatsApp
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
