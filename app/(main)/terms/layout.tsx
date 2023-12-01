import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Terms & Conditions | Bellania',
	description: '',
};

export default function TTermsAndConditionsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
