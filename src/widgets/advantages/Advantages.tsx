import { BsCamera, BsClock, BsPalette, BsShieldCheck } from 'react-icons/bs';

const ADVANTAGES_DATA = [
	{
		title: 'Гарантия 12 месяцев',
		description:
			'Закрепляем гарантийные обязательства в договоре на все виды кузовных работ.',
		icon: BsShieldCheck,
	},
	{
		title: 'Оценка по фото',
		description: `Узнайте стоимость ремонта за 15 минут, просто отправив фото нам в WhatsApp.`,
		icon: BsCamera,
	},
	{
		title: 'Точный подбор цвета',
		description:
			'Используем компьютерный подбор краски, гарантируем 100% попадание в цвет кузова.',
		icon: BsPalette,
	},
	{
		title: 'Соблюдение сроков',
		description:
			'Средний срок ремонта от 1 до 7 дней. Возвращаем авто точно в обещанный срок.',
		icon: BsClock,
	},
];

export const Advantages = () => {
	return (
		<section className='bg-white py-16' id='advantages'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
					Почему выбирают наш сервис
				</h2>

				<ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 list-none'>
					{ADVANTAGES_DATA.map((item, index) => {
						const Icon = item.icon;

						return (
							<li
								key={index}
								className='flex flex-col items-center text-center p-6 border border-gray-100 rounded-xl bg-gray-50 shadow-md'
							>
								<div className='flex items-center justify-center h-14 w-14 rounded-full bg-blue-600 text-white mb-6'>
									<Icon size={28} />
								</div>
								<h3 className='text-xl font-bold text-gray-900 mb-3 leading-tight'>
									{item.title}
								</h3>
								<p className='text-gray-600 text-sm sm:text-base leading-normal'>
									{item.description}
								</p>
							</li>
						);
					})}
				</ul>
			</div>
		</section>
	);
};
