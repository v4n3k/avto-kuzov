import { client } from '@/sanity/client';
import Image from 'next/image';
import { FaqAccordion, FaqItem } from './FaqAccordion';

/*
const FAQ_ITEMS: FaqItem[] = [
	{
		question: 'Как получить точную стоимость ремонта по фото?',
		answer:
			'Просто отправьте нам в WhatsApp 3-4 фотографии повреждений с разных ракурсов. Мастер оценит объем работ и назовет итоговую стоимость в течение 15 минут.',
	},
	{
		question: 'Сколько времени занимает кузовной ремонт?',
		answer:
			'В среднем от 1 до 7 дней в зависимости от объема повреждений и типа ремонта.',
	},
	{
		question: 'Даёте ли вы гарантию на работы?',
		answer:
			'Да, мы предоставляем официальную гарантию 12 месяцев по договору. Она распространяется на отсутствие отслоений и изменения цвета краски, а также на сохранность геометрии восстановленных деталей. По окончании работ вы получаете гарантийный талон.',
	},

	{
		question: 'Можно ли сделать ремонт с моей страховкой?',
		answer:
			'Да, мы работаем с большинством страховых компаний и поможем оформить документы.',
	},
	{
		question: 'Предоставляете ли вы эвакуатор?',
		answer:
			'Да, при необходимости мы можем организовать эвакуацию вашего автомобиля.',
	},
]; 
*/

async function getFaqs() {
	return await client.fetch<FaqItem[]>(`*[_type == "faq"] | order(order asc) {
		question,
		answer
	}`);
}

export const Faq = async () => {
	const faqItems = await getFaqs();

	return (
		<section className='bg-gray-50 py-16' id='faq'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<h2 className='text-3xl font-bold text-center text-gray-900 mb-12'>
					Часто задаваемые вопросы
				</h2>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
					<div className='relative h-75 lg:h-125 w-full rounded-2xl overflow-hidden shadow-lg'>
						<Image
							className='object-cover object-center'
							src='/hero/kuzovnoy-remont.webp'
							alt='Наш мастер за работой'
							fill
							sizes='(max-width: 1024px) 100vw, 50vw'
						/>
						<div className='absolute inset-0 bg-blue-600/5' />
					</div>
					<FaqAccordion faqItems={faqItems} />
				</div>
			</div>
		</section>
	);
};
