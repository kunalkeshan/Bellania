import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'About | Bellania',
	description: '',
};

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
