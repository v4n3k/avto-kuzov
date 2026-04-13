import { defineField, defineType } from 'sanity';

const requiredTrimmed = (message: string) => (Rule: any) =>
	Rule.required().custom((value: string) => {
		if (!value || !value.trim()) return message;
		return true;
	});

export const faqType = defineType({
	name: 'faq',
	title: 'Вопрос-ответ',
	type: 'document',
	fields: [
		defineField({
			name: 'question',
			type: 'string',
			title: 'Вопрос',
			validation: requiredTrimmed('Вопрос обязателен'),
		}),
		defineField({
			name: 'answer',
			type: 'text',
			title: 'Ответ',
			validation: requiredTrimmed('Ответ обязателен'),
		}),
		defineField({
			name: 'order',
			type: 'number',
			title: 'Порядок отображения',
			initialValue: 1,
			validation: Rule =>
				Rule.required()
					.integer()
					.min(1)
					.max(100)
					.error('Порядок должен быть от 1 до 100'),
		}),
	],
});
