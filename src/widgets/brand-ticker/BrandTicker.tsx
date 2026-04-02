import Image from 'next/image';
import audiImg from './logos/audi.jpeg';
import bmwImg from './logos/bmw.jpeg';
import lexusImg from './logos/lexus.jpeg';
import mercedesImg from './logos/mercedes.jpeg';
import porscheImg from './logos/porsche.jpeg';
import toyotaImg from './logos/toyota.jpeg';

const BRANDS = [
	{ name: 'BMW', logo: bmwImg },
	{ name: 'Mercedes', logo: mercedesImg },
	{ name: 'Audi', logo: audiImg },
	{ name: 'Toyota', logo: toyotaImg },
	{ name: 'Lexus', logo: lexusImg },
	{ name: 'Porsche', logo: porscheImg },
];

export const BrandsTicker = () => {
	return (
		<section className='py-20 bg-gray-50' id='brands-ticker'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='max-w-2xl mb-12'>
					<h2 className='text-3xl font-bold text-gray-900 mb-4'>
						Работаем с любыми марками авто
					</h2>
					<p className='text-gray-600 text-lg'>
						Собственный подбор краски и дилерское оборудование позволяют
						работать с авто любого класса.
					</p>
				</div>

				<div className='relative overflow-hidden rounded-2xl border border-gray-100 bg-white py-12 shadow-sm'>
					<div className='absolute left-0 top-0 bottom-0 z-10 w-30 bg-linear-to-r from-white to-transparent pointer-events-none' />
					<div className='absolute right-0 top-0 bottom-0 z-10 w-30 bg-linear-to-l from-white to-transparent pointer-events-none' />

					<ul className='flex animate-infinite-scroll w-max items-center gap-10 pr-10 flex-nowrap hover:[animation-play-state:paused]'>
						{[...BRANDS, ...BRANDS].map((brand, index) => (
							<li key={index} className='shrink-0'>
								<div className='relative h-14 w-32'>
									<Image
										src={brand.logo}
										alt={`Ремонт кузова ${brand.name}`}
										fill
										className='object-contain'
										sizes='128px'
										priority
									/>
								</div>
								<span className='sr-only'>{brand.name}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};
