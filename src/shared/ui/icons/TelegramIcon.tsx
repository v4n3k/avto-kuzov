import { SITE } from '@/shared/config';
import { FaTelegramPlane } from 'react-icons/fa';

export const TelegramIcon = () => {
	return (
		<a
			href={SITE.socials.telegram}
			target='_blank'
			rel='noopener noreferrer'
			aria-label='Telegram'
		>
			<FaTelegramPlane className='w-6 h-6 hover:text-blue-500 transition' />
		</a>
	);
};
