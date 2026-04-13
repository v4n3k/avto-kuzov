import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	experimental: {
		viewTransition: true,
	},

	async headers() {
		return [
			{
				source: '/studio/:path*',
				headers: [
					{
						key: 'X-Robots-Tag',
						value: 'noindex, nofollow',
					},
				],
			},
		];
	},
};

export default nextConfig;
