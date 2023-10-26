import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'slider',
	title: 'Slider Image',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description:
				'Enter a title for the slider image. This title should provide a brief, descriptive name for the image, helping to identify its content.',
			type: 'string',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'productCategory',
			title: 'Category',
			description:
				'Choose the category that best describes your product. This helps in organizing and grouping products for easier navigation. Link to an existing product category to categorize this slider image.',
			type: 'reference',
			to: { type: 'productCategory' },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'image',
			title: 'Image',
			description:
				'Upload an image to be displayed in the slider. For the best appearance, it is recommended that each image has a ratio of 1920x960 pixels. Images with this ratio provide the optimal viewing experience.',
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
						"Provide alternative text for the image. This text is used for accessibility purposes and should concisely describe the image's content. It helps users who rely on screen readers to understand the image.",
				},
			],
		}),
	],
});
