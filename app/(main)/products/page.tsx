import { productCategoryQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import Showcase from '@/components/home/Showcase';

async function Products() {
	const productCategory = await sanityFetch<ProductCategory[]>({
		query: productCategoryQuery,
	});
	return (
		<div>
			<Showcase categories={productCategory} />
		</div>
	);
}

export default Products;
