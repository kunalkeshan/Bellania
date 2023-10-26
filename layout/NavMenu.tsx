/**
 * NavMenu Component
 */

'use client';

// Depedencies
import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { NAVBAR_NAVIGATION } from '@/constants/navigation';

type NavMenuProps = React.ComponentProps<'div'> & {
	productCategory: ProductCategory[];
	handleCloseSheet?: () => void;
};

const NavMenu: React.FC<NavMenuProps> = ({
	productCategory,
	handleCloseSheet,
}) => {
	return (
		<NavigationMenu>
			<NavigationMenuList className='flex flex-col lg:flex-row'>
				<NavigationMenuItem
					onClick={handleCloseSheet && handleCloseSheet}
				>
					<Link href='/' legacyBehavior passHref>
						<NavigationMenuLink
							className={navigationMenuTriggerStyle()}
						>
							Home
						</NavigationMenuLink>
					</Link>
				</NavigationMenuItem>
				<NavigationMenuItem className='hidden lg:block'>
					<NavigationMenuTrigger>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className='grid w-[400px] gap-3 p-4 grid-cols-3'>
							{productCategory.map((categoroy) => (
								<ListItem
									className='w-full text-center'
									key={`nav-menu-1-${categoroy.slug}`}
									title={categoroy.title}
									href={`/products/${categoroy.slug}`}
									onClick={
										handleCloseSheet && handleCloseSheet
									}
								>
									{/* {categoroy.description} */}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem className='lg:hidden'>
					<Accordion type='multiple' className='w-full'>
						<AccordionItem value='item-1'>
							<AccordionTrigger>Products</AccordionTrigger>
							<AccordionContent>
								{productCategory.map((categoroy) => (
									<ListItem
										className='text-slate-400 w-full text-center'
										key={`nav-menu-2-${categoroy.slug}`}
										title={categoroy.title}
										href={`/products/${categoroy.slug}`}
										onClick={
											handleCloseSheet && handleCloseSheet
										}
									>
										{/* {categoroy.description} */}
									</ListItem>
								))}
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</NavigationMenuItem>
				{NAVBAR_NAVIGATION.map((item) => (
					<NavigationMenuItem
						key={`nav-item-${item.url}`}
						onClick={handleCloseSheet && handleCloseSheet}
					>
						<Link
							href={item.url}
							legacyBehavior
							passHref
							target={item.target}
						>
							<NavigationMenuLink
								className={navigationMenuTriggerStyle()}
							>
								{item.name}
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
};

export default NavMenu;

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
