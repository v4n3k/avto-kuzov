'use client';

import { SITE } from '@/shared/config';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

type DamageType = {
	label: string;
	coef: number;
	exclude?: string[];
	only?: string[];
};

const BODY_PARTS = [
	{ label: 'Бампер', base: 6000 },
	{ label: 'Крыло', base: 7200 },
	{ label: 'Дверь', base: 9000 },
	{ label: 'Порог', base: 11000 },
	{ label: 'Капот', base: 10500 },
	{ label: 'Крыша', base: 13500 },
	{ label: 'Багажник', base: 8200 },
];

const DAMAGE_TYPES: DamageType[] = [
	{ label: 'Царапина', coef: 1 },
	{ label: 'Сколы', coef: 1.2 },
	{ label: 'Вмятина', coef: 1.3 },
	{ label: 'Трещина', coef: 1.4, only: ['Бампер'] },
	{ label: 'Коррозия', coef: 1.5, exclude: ['Бампер'] },
];

const DAMAGE_SIZE = [
	{ label: 'Маленькое', coef: 1 },
	{ label: 'Среднее', coef: 1.3 },
	{ label: 'Сильное', coef: 1.7 },
];

export const Calculator = () => {
	const [part, setPart] = useState(BODY_PARTS[0]);
	const [damage, setDamage] = useState(DAMAGE_TYPES[0]);
	const [size, setSize] = useState(DAMAGE_SIZE[0]);

	const availableDamageTypes = useMemo(() => {
		return DAMAGE_TYPES.map(item => {
			const isExcluded = item.exclude?.includes(part.label);
			const isOnly = item.only && !item.only.includes(part.label);

			return {
				...item,
				disabled: isExcluded || isOnly,
			};
		});
	}, [part]);

	useEffect(() => {
		const current = availableDamageTypes.find(d => d.label === damage.label);

		if (current?.disabled) {
			const firstValid = availableDamageTypes.find(d => !d.disabled);
			if (firstValid) setDamage(firstValid);
		}
	}, [part]);

	const price = Math.round(part.base * damage.coef * size.coef);

	return (
		<section className='py-20 bg-gray-50'>
			<div className='mx-auto max-w-5xl px-4'>
				<div className='text-center mb-10'>
					<h2 className='text-3xl font-bold mb-3'>
						Рассчитайте стоимость ремонта
					</h2>
					<p className='text-gray-600'>
						Выберите параметры — получите цену за 30 секунд
					</p>
				</div>

				<div className='bg-white rounded-3xl shadow-sm p-6 md:p-8'>
					<div className='mb-8'>
						<p className='font-semibold mb-4'>Что повреждено?</p>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
							{BODY_PARTS.map(item => (
								<button
									key={item.label}
									onClick={() => setPart(item)}
									className={`cursor-pointer p-4 rounded-xl border text-sm font-medium transition-all duration-200 active:scale-95
										${
											part.label === item.label
												? 'bg-blue-100 text-blue-800 border-blue-300 shadow-sm'
												: 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
										}
									`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>

					<div className='mb-8'>
						<p className='font-semibold mb-4'>Тип повреждения</p>
						<div className='flex flex-wrap gap-3'>
							{availableDamageTypes.map(item => (
								<button
									key={item.label}
									onClick={() => !item.disabled && setDamage(item)}
									className={`px-4 py-2 rounded-full text-sm border transition-all duration-200
										${
											damage.label === item.label
												? 'bg-blue-100 text-blue-800 border-blue-300 shadow-sm'
												: 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
										}
										${
											item.disabled
												? 'opacity-40 cursor-not-allowed'
												: 'cursor-pointer active:scale-95'
										}
									`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>

					<div className='mb-10'>
						<p className='font-semibold mb-4'>Степень повреждения</p>
						<div className='flex flex-wrap gap-3'>
							{DAMAGE_SIZE.map(item => (
								<button
									key={item.label}
									onClick={() => setSize(item)}
									className={`cursor-pointer px-4 py-2 rounded-full text-sm border transition-all duration-200 active:scale-95
										${
											size.label === item.label
												? 'bg-blue-100 text-blue-800 border-blue-300 shadow-sm'
												: 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
										}
									`}
								>
									{item.label}
								</button>
							))}
						</div>
					</div>

					<div className='flex flex-col items-center p-6 rounded-2xl bg-blue-50 text-center border border-blue-100'>
						<p className='text-gray-600 mb-2'>Примерная стоимость ремонта</p>
						<p className='text-4xl font-bold text-blue-600 mb-2'>
							от {price.toLocaleString('ru-RU')} ₽
						</p>
						<p className='text-sm text-gray-500 mb-6'>
							Точная цена зависит от осмотра автомобиля
						</p>
						<Link
							href={`${SITE.pages.contacts}?type=photo`}
							className='block w-full md:w-[50%] py-3 px-6 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-sm hover:shadow-md mb-3 text-center'
						>
							Оценить по фото онлайн
						</Link>
						<Link
							href={`${SITE.pages.contacts}?type=visit`}
							className='block w-full md:w-[50%] py-3 px-6 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all duration-200 text-center'
						>
							Записаться на осмотр
						</Link>
						<p className='text-xs text-gray-500 mt-3'>
							Ответим по фото за 10–15 минут • бесплатно
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
