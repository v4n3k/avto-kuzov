import { SITE } from '@/shared/config';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsappIcon = () => {
	return (
		<a
			href={SITE.socials.whatsapp}
			target='_blank'
			rel='noopener noreferrer'
			aria-label='WhatsApp'
		>
			<FaWhatsapp className='w-6 h-6 hover:text-green-600 transition' />
		</a>
	);
};
