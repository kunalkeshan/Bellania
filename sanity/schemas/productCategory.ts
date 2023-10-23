import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'productCategory',
	title: 'Product Category',
	description:
		"This section helps you group and sort products based on their similarities. It's like putting products into folders or drawers, making it easier for customers to find what they're looking for.",
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description:
				'This is the name of the product category. It should be a clear and concise title that describes the category.',
			type: 'string',
			validation: (Rule) => Rule.required().max(500),
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			description:
				"The slug is a URL-friendly version of the category title. It is automatically generated based on the title you provide, but you can also customize it if needed. Slugs are used in the website's URLs.",
			type: 'slug',
			options: {
				source: 'title',
				maxLength: 96,
			},
			validation: (Rule) => [Rule.required()],
		}),
		defineField({
			name: 'description',
			title: 'Description',
			description:
				'This field is for adding a description of the product category. You can provide additional information or context about the category in this field.',
			type: 'text',
			validation: (Rule) => Rule.required(),
		}),
	],
});
