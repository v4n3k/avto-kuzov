import { SITE } from '@/shared/config';
import { IconBaseProps } from 'react-icons';
import { FaTelegramPlane } from 'react-icons/fa';

interface TelegramIconProps extends IconBaseProps {}

export const TelegramIcon = ({ ...props }: TelegramIconProps) => {
	return (
		<a
			href={SITE.socials.telegram}
			target='_blank'
			rel='noopener noreferrer'
			aria-label='Telegram'
		>
			<FaTelegramPlane
				className='hover:text-blue-500 transition'
				size={24}
				{...props}
			/>
		</a>
	);
};
