import { sanityClient } from './client';

type SanityFetchParams = {
	query: string;
	params?: Record<string, unknown>;
	tags?: string[];
};

export const sanityFetch = async <T>({
	query,
	params = {},
}: SanityFetchParams): Promise<T> => {
	try {
		const data = await sanityClient.fetch<T>(query, params);

		if (data === null || data === undefined) {
			throw new Error('Sanity returned empty response');
		}

		return data;
	} catch (error) {
		console.error('[SanityFetch Error]:', error);

		throw new Error('Failed to fetch data from CMS');
	}
};
