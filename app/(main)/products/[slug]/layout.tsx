import { client } from '@/sanity/lib/client';
import { productCategoryBySlugQuery } from '@/sanity/lib/queries';
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

export default function CategoryProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
