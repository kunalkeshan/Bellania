'use client';

import Image from 'next/image';
import NavMenu from './NavMenu';
import SheetMenu from './SheetMenu';

const Navbar = () => {
	return (
		<nav className='w-full h-[5rem] flex justify-between items-center px-4'>
			<div>
				<Image
					src='/images/logo.png'
					alt='logo'
                    className='w-20'
					width={128}
					height={77}
				/>
			</div>
			<div>
				<SheetMenu />
			</div>
			<div className='hidden'>
				<NavMenu />
			</div>
		</nav>
	);
};

export default Navbar;
