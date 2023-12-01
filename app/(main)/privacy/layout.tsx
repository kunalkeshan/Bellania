import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Privacy Policy | Bellania',
	description: '',
};

export default function PrivacyPolicyLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
