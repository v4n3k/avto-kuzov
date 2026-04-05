'use client';

import { SITE } from '@/shared/config';
import { useEffect, useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';

export const StickyCTA = () => {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setVisible(window.scrollY > 500);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	if (!visible) return null;

	return (
		<div className='fixed bottom-5 right-5 z-50'>
			<a
				href={SITE.socials.whatsapp}
				target='_blank'
				rel='noopener noreferrer'
				className='relative flex items-center justify-center w-14 h-14 rounded-full bg-green-600 text-white shadow-xl hover:scale-110 active:scale-95 transition'
			>
				<span className='absolute inset-0 rounded-full bg-green-500 animate-ping opacity-60' />
				<span className='relative z-10'>
					<BsWhatsapp size={26} />
				</span>
			</a>
		</div>
	);
};
