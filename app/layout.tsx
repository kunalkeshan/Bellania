import './globals.css';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';

const app = Josefin_Sans({
	subsets: ['latin'],
	variable: '--font-app',
});

export const metadata: Metadata = {
	title: 'Bellania',
	description: '',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${app.variable} font-app`}>{children}</body>
		</html>
	);
}
