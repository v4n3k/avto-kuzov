'use client';

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { ruKZLocale } from '@sanity/locale-ru-kz';
import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@/shared/api/sanity/env';
import { schema } from './schema';
import { structure } from './structure';

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	schema,
	unstable_releases: {
		enabled: false,
	},
	unstable_menuItems: [
		{
			name: 'release',
			show: () => false,
		},
	],
	plugins: [
		structureTool({
			structure,
			title: 'Структура',
		}),
		visionTool({
			defaultApiVersion: apiVersion,
			title: 'Запросы',
		}),
		ruKZLocale({ title: 'Русский' }),
	],
});
