import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import References from '@/components/home/References';
import Showcase from '@/components/home/Showcase';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { productCategoryQuery } from '@/sanity/lib/queries';

async function Home() {

	const categories = await sanityFetch<ProductCategory[]>({ query: productCategoryQuery });

	return (
        <div className="">
            <Hero />
            <Showcase categories={categories} />
            <References />
            <Contact />
        </div>
    );
}

export default Home;
