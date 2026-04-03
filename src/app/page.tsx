import { HomePage } from '@/screens/home-page';
import { SITE } from '@/shared/config';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `Кузовной ремонт авто в ${SITE.cityPrepositional} от ${SITE.minPrice}₽ за 1 день`,
	description: `Уберём ржавчину, вмятины и царапины без очередей. Кузовной ремонт и покраска авто с гарантией 12 месяцев. Оценка по фото за 15 минут — напишите сейчас!`,
	openGraph: {
		title: `Кузовной ремонт от ${SITE.minPrice}₽ в ${SITE.cityPrepositional}`,
		description: `Оценка по фото за 15 минут. Ремонт без очередей с гарантией 12 месяцев.`,
	},
};

export default function Home() {
	return <HomePage />;
}
