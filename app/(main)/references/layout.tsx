import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'References | Bellania',
	description: '',
};

export default function ReferencesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
