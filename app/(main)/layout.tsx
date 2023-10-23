import Footer from '@/layout/Footer';
import Navbar from '@/layout/Navbar';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
