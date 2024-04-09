import { Poppins, Lato, Overpass } from 'next/font/google';
import { PropsWithChildren } from 'react';

const overpass = Overpass({
	weight: 'variable',
	preload: true,
	display: 'swap',
	variable: '--font-overpass',
	subsets: ['latin-ext'],
});

const poppins = Poppins({
	weight: ['400', '700'],
	preload: true,
	display: 'swap',
	variable: '--font-poppins',
	subsets: ['latin-ext'],
});

const lato = Lato({
	weight: ['300', '400', '700'],
	preload: true,
	display: 'swap',
	variable: '--font-lato',
	subsets: ['latin-ext'],
});

import '@/styles/globals.css';

const RootLayout = (props: PropsWithChildren) => {
	return (
		<html lang='en'>
			<body
				className={`${poppins.variable} ${lato.variable} ${overpass.variable} font-overpass`}>
				{props.children}
			</body>
		</html>
	);
};

export default RootLayout;
