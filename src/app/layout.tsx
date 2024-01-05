import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Codeeng',
	description: 'Code environment basic and required setup for your project or new machine.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				<article className='min-h-screen'>{children}</article>
				<Footer />
			</body>
		</html>
	);
}
