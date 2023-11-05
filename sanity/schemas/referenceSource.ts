import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'referenceSource',
	title: 'References',
	description:
		"This section helps manage and organize references obtained from different companies or sources. It's a repository to store and access information related to these references.",
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description:
				'The name of the company or source. It should be a clear and concise title identifying the reference.',
			type: 'string',
			validation: (Rule) => Rule.required().max(500),
		}),
		defineField({
			name: 'description',
			title: 'Description',
			description:
				'A detailed description or additional information about the reference. Use this field to provide context or relevant details regarding the company or source.',
			type: 'text',
		}),
		defineField({
			name: 'website',
			title: 'Website',
			type: 'url',
			description:
				'The website URL of the company or source being referenced.',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			description:
				'Upload an image associated with the reference. This image serves as an identifying visual for the reference details.',
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
						'Provide alternative text for the image. This text is essential for accessibility purposes.',
				},
			],
		}),
	],
});
