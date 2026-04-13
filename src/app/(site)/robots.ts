import { SITE } from '@/shared/config';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
				disallow: ['/studio'],
			},
		],
		sitemap: `${SITE.url}/sitemap.xml`,
	};
}
