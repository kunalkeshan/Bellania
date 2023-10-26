// ./nextjs-app/app/[slug]/page.tsx

import {
	productCategoryBySlugQuery,
	productCategoryPathsQuery,
	productsByCategoryQuery,
} from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { client } from '@/sanity/lib/client';
import type { Metadata, ResolvingMetadata } from 'next';
import { redirect } from 'next/navigation';
import ProductCard from '@/components/cards/ProductCard';
import Image from 'next/image';
import EmptyStateCard from '@/components/cards/EmptyStateCard';

export async function generateStaticParams() {
	const productCategories = await client.fetch(productCategoryPathsQuery);
	return productCategories;
}

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
	const products = await sanityFetch<Product[]>({
		query: productsByCategoryQuery,
		params,
	});

	const category = await sanityFetch<ProductCategory>({
		query: productCategoryBySlugQuery,
		params,
	});

	if (!category) {
		redirect('/products');
	}

	return (
		<>
			<section>
				<div
					style={{ backgroundImage: `url('${category.cover}')` }}
					className='w-full max-h-[28rem] bg-no-repeat bg-cover bg-center aspect-video'
				>
					<div className='bg-gradient-to-t text-white from-black/50 p-8 flex flex-col gap-2 justify-center items-center to-black/50 w-full h-full text-center'>
						<h1 className=' text-2xl md:text-3xl lg:text-4xl'>
							{category.title}
						</h1>
						<p className='text-sm md:text-base lg:text-lg max-w-3xl'>
							{category.description}
						</p>
					</div>
				</div>
			</section>
			<section className='w-full h-full'>
				<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl py-12 md:py-16'>
					{products && products.length > 0 ? (
						<ul className='w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{products.map((product) => (
								<ProductCard
									product={product}
									key={`product-${product._id}`}
								/>
							))}
						</ul>
					) : (
						<EmptyStateCard
							title={`No products in ${category.title} yet!`}
						/>
					)}
				</div>
			</section>
		</>
	);
}
