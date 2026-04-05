import Image from 'next/image';

const BRANDS = [
	{ name: 'BMW', logo: '/brand-ticker/bmw.jpeg' },
	{ name: 'Mercedes', logo: '/brand-ticker/mercedes.jpeg' },
	{ name: 'Audi', logo: '/brand-ticker/audi.jpeg' },
	{ name: 'Toyota', logo: '/brand-ticker/toyota.jpeg' },
	{ name: 'Lexus', logo: '/brand-ticker/lexus.jpeg' },
	{ name: 'Porsche', logo: '/brand-ticker/porsche.jpeg' },
];

export const BrandsTicker = () => {
	return (
		<section className='py-20 bg-gray-50' id='brands-ticker'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='max-w-2xl mb-10'>
					<h2 className='text-3xl font-bold text-gray-900 mb-4'>
						Работаем с любыми марками авто — от бюджетных до премиум
					</h2>
					<p className='text-lg font-semibold text-blue-600 mb-3'>
						Более 500 отремонтированных автомобилей
					</p>
					<p className='text-gray-600 text-lg'>
						Собственный подбор краски и дилерское оборудование позволяют
						восстанавливать автомобили любого класса без потери качества.
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
										className='object-contain'
										src={brand.logo}
										alt={`Ремонт кузова ${brand.name}`}
										fill
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
