// ./nextjs-app/app/[slug]/page.tsx

import {
	productCategoryBySlugQuery,
	productCategoryPathsQuery,
	productsByCategoryQuery,
} from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { client } from '@/sanity/lib/client';

export async function generateStaticParams() {
	const productCategories = await client.fetch(productCategoryPathsQuery);
	return productCategories;
}

import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
	{ params, searchParams }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const category = await client.fetch<ProductCategory>(
		productCategoryBySlugQuery,
		params
	);

	return {
		title: `${category.title} | Bellania`,
		description: category.description,
		openGraph: {
			images: [category.image],
			type: 'website',
			title: `${category.title} | Bellania`,
			description: category.description,
		},
		twitter: {
			images: [category.image],
			card: 'summary_large_image',
			title: `${category.title} | Bellania`,
			description: category.description,
		},
	};
}

export default async function Page({ params }: { params: { slug: string } }) {
	const products = await sanityFetch({
		query: productsByCategoryQuery,
		params,
	});

	return <div></div>;
}
