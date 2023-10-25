'use client';

import React from 'react';
import Image from 'next/image';
import NavMenu from './NavMenu';
import SheetMenu from './SheetMenu';

type NavbarProps = React.ComponentProps<'nav'> & {
	productCategory: ProductCategory[];
};

const Navbar: React.FC<NavbarProps> = ({ productCategory }) => {
	return (
		<nav className='w-full z-50 h-[5rem] fixed top-0 flex justify-between items-center p-4 md:px-16 lg:max-7xl lg:mx-auto'>
			<div>
				<Image
					src='/images/logo.png'
					alt='logo'
					className='w-20'
					width={128}
					height={77}
				/>
			</div>
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
