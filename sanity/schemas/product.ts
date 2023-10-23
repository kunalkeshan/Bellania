import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'product',
	title: 'Product',
	description:
		"This section is where you manage and display information about each item or service you offer. Think of it as your product catalog. You can add the product's name, a detailed description, choose its category, and upload an image to make it visually appealing to your customers.",
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
			description:
				"This is the title of your product. It's a short, descriptive name that will be displayed to users.",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			description:
				'Use this field to provide a detailed description of your product. This is where you can explain its features, benefits, and any other relevant information.',
			validation: (Rule) => Rule.max(500),
		}),
		defineField({
			name: 'productCategory',
			title: 'Category',
			description:
				'Choose the category that best describes your product. This helps in organizing and grouping products for easier navigation.',
			type: 'reference',
			to: { type: 'productCategory' },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			description:
				'Upload an image of your product. This image will be displayed alongside the product details.',
			type: 'image',
			options: {
				hotspot: true,
			},
			validation: (Rule) => Rule.required(),
			fields: [
				{
					name: 'alt',
					type: 'string',
					title: 'Alternative Text',
					description:
						"Provide alternative text for the product image. This text is essential for accessibility and helps describe the image when it can't be seen.",
					validation: (Rule) => Rule.required(),
				},
			],
		}),
	],
});
