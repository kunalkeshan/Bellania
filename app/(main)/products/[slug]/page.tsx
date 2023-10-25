// ./nextjs-app/app/[slug]/page.tsx

import {
	productCategoryPathsQuery,
	productsByCategoryQuery,
} from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { client } from '@/sanity/lib/client';

export async function generateStaticParams() {
	const productCategories = await client.fetch(productCategoryPathsQuery);
	return productCategories;
}

export default async function Page({ params }: { params: { slug: string } }) {
	const products = await sanityFetch({
		query: productsByCategoryQuery,
		params,
	});

	return <div></div>;
}
