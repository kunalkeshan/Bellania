import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Products | Bellania',
	description: 'View categories of products available at Bellania',
};

export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
