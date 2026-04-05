import { SITE } from '@/shared/config';
import { IconBaseProps } from 'react-icons';
import { FaWhatsapp } from 'react-icons/fa';

interface WhatsappIconProps extends IconBaseProps {}

export const WhatsappIcon = ({ ...props }: WhatsappIconProps) => {
	return (
		<a
			href={SITE.socials.whatsapp}
			target='_blank'
			rel='noopener noreferrer'
			aria-label='WhatsApp'
		>
			<FaWhatsapp
				className='hover:text-green-600 transition'
				size={24}
				{...props}
			/>
		</a>
	);
};
