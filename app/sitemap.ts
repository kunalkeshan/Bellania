import { client } from '@/sanity/lib/client';
import { productCategoryPathsQuery } from '@/sanity/lib/queries';
import { MetadataRoute } from 'next';

const DEFAULT_SITEMAPS: MetadataRoute.Sitemap = [
	{
		url: 'https://bellania.vercel.app',
		lastModified: new Date(),
		changeFrequency: 'yearly',
		priority: 1,
	},
	{
		url: 'https://bellania.vercel.app/products',
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.8,
	},
	{
		url: 'https://bellania.vercel.app/about',
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.7,
	},
	{
		url: 'https://bellania.vercel.app/references',
		lastModified: new Date(),
		changeFrequency: 'monthly',
		priority: 0.5,
	},
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	try {
		const productCategories = await client.fetch<
			Array<{ params: { slug: string } }>
		>(productCategoryPathsQuery);
		const productCategoriesSitemap = productCategories.map((category) => {
			return {
				url: `https://bellania.vercel.app/products/${category.params.slug}`,
				lastModified: new Date(),
				changeFrequency: 'monthly',
				priority: 0.8,
			};
		});
		return [
			...DEFAULT_SITEMAPS,
			...productCategoriesSitemap,
		] as MetadataRoute.Sitemap;
	} catch (e) {
		return DEFAULT_SITEMAPS;
	}
}
