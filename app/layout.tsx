import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const app = Raleway({
	subsets: ['latin'],
	variable: '--font-app',
});

export const metadata: Metadata = {
	title: 'Bellania',
	metadataBase: new URL('https://bellania.vercel.app'),
	openGraph: {
		title: 'Bellania',
		images: ['/images/hero/1.jpg'],
	},
	twitter: {
		card: 'summary',
		images: ['/images/hero/1.jpg'],
		title: 'Bellania',
	},
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
