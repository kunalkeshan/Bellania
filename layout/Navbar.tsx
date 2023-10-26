/**
 * Navbar Component
 */

'use client';

// Dependencies
import React from 'react';
import Image from 'next/image';
import NavMenu from './NavMenu';
import SheetMenu from './SheetMenu';
import Link from 'next/link';

type NavbarProps = React.ComponentProps<'nav'> & {
	productCategory: ProductCategory[];
};

const Navbar: React.FC<NavbarProps> = ({ productCategory }) => {
	return (
		<nav className='w-full z-50 bg-white h-[5rem] sticky top-0 flex justify-between items-center p-4 md:px-16 lg:max-7xl lg:mx-auto'>
			<Link href={'/'} className='block'>
				<Image
					src='/images/logo.png'
					alt='logo'
					className='w-20'
					width={128}
					height={77}
				/>
			</Link>
			<div className='lg:hidden'>
				<SheetMenu productCategory={productCategory} />
			</div>
			<div className='hidden lg:block'>
				<NavMenu productCategory={productCategory} />
			</div>
		</nav>
	);
};

export default Navbar;
