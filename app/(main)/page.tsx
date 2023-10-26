import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import References from '@/components/home/References';
import Showcase from '@/components/home/Showcase';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { productCategoryQuery, sliderImagesQuery } from '@/sanity/lib/queries';

async function Home() {
	const categories = await sanityFetch<ProductCategory[]>({
		query: productCategoryQuery,
	});
	const sliderImages = await sanityFetch<SliderImage[]>({
		query: sliderImagesQuery,
	});

	return (
		<div className=''>
			<Hero sliderImages={sliderImages} />
			<Showcase categories={categories} />
			<References />
			<Contact />
		</div>
	);
}

export default Home;
