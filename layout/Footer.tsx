import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InstagramIcon, MailIcon, MapPin } from 'lucide-react';
import { FOOTER_NAVIGATION } from '@/constants/navigation';

type FooterProps = React.ComponentProps<'footer'> & {
	productCategory: ProductCategory[];
};

const Footer: React.FC<FooterProps> = ({ productCategory }) => {
	return (
		<footer className='w-full h-full bg-app-primary text-white p-4 md:px-16 md:pt-16 lg:'>
			<div className='lg:flex w-full justify-between'>
				<div className='mb-8 flex flex-col gap-4'>
					<Link href={'/'} className='font-semibold text-2xl'>
						Bellania
					</Link>
					<div className='flex items-center gap-1'>
						<MapPin />
						<p className='text-sm'>Your Location</p>
					</div>
					<div className='flex items-center gap-4'>
						<Link
							target='_blank'
							href={'https://instagram.com/user'}
						>
							<InstagramIcon className='hover:text-app-primary transition-all duration-300' />
						</Link>
						<Link href={'mailto:bellania@gmail.com'}>
							<MailIcon className='hover:text-app-primary transition-all duration-300' />
						</Link>
					</div>
				</div>
				<div className='grid grid-cols-1 lg:grid-cols-5 gap-4 mb-2'>
					<div className='lg:col-span-3'>
						<h1 className='font-medium mb-2'>Products</h1>
						<div className='grid grid-cols-2 md:grid-cols-3'>
							{productCategory.map((category, idx) => (
								<Button
									asChild
									key={idx}
									variant='link'
									className='p-0 w-fit text-white'
								>
									<Link href={`/products/${category.slug}`}>
										{category.title}
									</Link>
								</Button>
							))}
						</div>
					</div>
					{Object.keys(FOOTER_NAVIGATION).map((item) => (
						<div
							className='lg:col-span-1'
							key={`footer-item-${item
								.toLowerCase()
								.replace(/\s+/gi, '-')}`}
						>
							<p className='font-medium mb-2'>{item}</p>
							<div className='flex flex-col'>
								{FOOTER_NAVIGATION[
									item as keyof typeof FOOTER_NAVIGATION
								].map((link) => (
									<Button
										asChild
										variant='link'
										className='p-0 w-fit text-white'
										key={`footer-item-${item
											.toLowerCase()
											.replace(/\s+/gi, '-')}-${
											link.url
										}`}
									>
										<Link
											href={link.url}
											target={link.target}
										>
											{link.name}
										</Link>
									</Button>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className='pt-4 flex flex-col lg:flex-row lg:gap-4 items-center mt-2 border-t border-app-primary'>
				<p className='text-xs py-2 lg:mt-[1px]'>
					Copyright &copy; {new Date().getFullYear()} Bellania
				</p>
			</div>
		</footer>
	);
};

export default Footer;
