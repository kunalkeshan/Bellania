import './globals.css';
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';

const app = Raleway({
	subsets: ['latin'],
	variable: '--font-app',
});

export const metadata: Metadata = {
	title: 'Bellania - Unveiling Elegance and Sophistication | Lingerie Showcase',
	description:
		'Discover opulent lingerie collections at Bellania – a realm of elegance, grace, and allure. Explore luxurious intimates, from timeless classics to chic modern styles, offering unparalleled comfort and sophistication.',
	metadataBase: new URL('https://bellania.vercel.app'),
	openGraph: {
		title: 'Bellania - Unveiling Elegance and Sophistication | Lingerie Showcase',
		siteName:
			'Bellania - Unveiling Elegance and Sophistication | Lingerie Showcase',
		images: ['/images/hero/1.jpg'],
		type: 'website',
		description:
			'Discover opulent lingerie collections at Bellania – a realm of elegance, grace, and allure. Explore luxurious intimates, from timeless classics to chic modern styles, offering unparalleled comfort and sophistication.',
		url: 'https://bellania.vercel.app',
	},
	twitter: {
		card: 'summary',
		images: ['/images/hero/1.jpg'],
		title: 'Bellania - Unveiling Elegance and Sophistication | Lingerie Showcase',
		description:
			'Discover opulent lingerie collections at Bellania – a realm of elegance, grace, and allure. Explore luxurious intimates, from timeless classics to chic modern styles, offering unparalleled comfort and sophistication.',
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
