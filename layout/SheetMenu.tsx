/**
 * SheetMenu Component
 */

'use client';

// Dependencies
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import NavMenu from './NavMenu';
import Link from 'next/link';
import Image from 'next/image';

type SheetMenuProps = React.ComponentProps<'div'> & {
	productCategory: ProductCategory[];
};

const SheetMenu: React.FC<SheetMenuProps> = ({ productCategory }) => {
	const [open, setOpen] = useState(false);

	const handleCloseSheet = () => {
		setOpen(false);
	};

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>
			<SheetContent className='w-full'>
				<SheetHeader>
					<SheetTitle className='mx-auto'>
						<Link href={'/'} className='block'>
							<Image
								src='/images/logo.png'
								alt='logo'
								className='w-24'
								width={128}
								height={77}
							/>
						</Link>
					</SheetTitle>
					<SheetDescription className='w-full'>
						<NavMenu
							productCategory={productCategory}
							handleCloseSheet={handleCloseSheet}
						/>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default SheetMenu;

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className
					)}
					{...props}
				>
					<div className='text-sm font-medium leading-none'>
						{title}
					</div>
					<p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = 'ListItem';
