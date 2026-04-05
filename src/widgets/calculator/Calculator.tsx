import { CalculatorClient } from './CalculatorClient';

export const Calculator = () => {
	return (
		<section className='py-20 bg-gray-50 scroll-mt-20' id='calculator'>
			<div className='mx-auto max-w-5xl px-4'>
				<div className='text-center mb-10'>
					<h2 className='text-3xl font-bold mb-3'>
						Рассчитайте стоимость ремонта
					</h2>
					<p className='text-gray-600'>
						Выберите параметры — получите цену за 30 секунд
					</p>
				</div>
				<CalculatorClient />
			</div>
		</section>
	);
};
