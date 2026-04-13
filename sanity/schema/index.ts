import { type SchemaTypeDefinition } from 'sanity';
import { faqType } from './faq';

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [faqType],
};
