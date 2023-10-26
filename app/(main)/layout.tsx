import Footer from '@/layout/Footer';
import Navbar from '@/layout/Navbar';
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { productCategoryQuery } from '@/sanity/lib/queries';
import { Toaster } from '@/components/ui/toaster';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const productCategory = await sanityFetch<ProductCategory[]>({
		query: productCategoryQuery,
	});

	return (
		<>
			<Navbar productCategory={productCategory} />
			<main>{children}</main>
			<Footer productCategory={productCategory} />
			<Toaster />
		</>
	);
}
