/**
 * Footer Component
 */

// Dependencies
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { InstagramIcon, MailIcon, MapPin } from 'lucide-react';
import { FOOTER_NAVIGATION } from '@/constants/navigation';
import Image from 'next/image';

type FooterProps = React.ComponentProps<'footer'> & {
	productCategory: ProductCategory[];
};

const Footer: React.FC<FooterProps> = ({ productCategory }) => {
	return (
		<footer className='w-full h-full bg-app-primary text-white p-4 md:px-16 md:pt-16 lg:'>
			<div className='lg:flex w-full justify-between'>
				<div className='mb-8 flex flex-col gap-4'>
					<Link href={'/'} className='font-semibold text-2xl'>
						<Image
							src='/images/logo-light.png'
							alt='logo'
							className='w-24'
							width={128}
							height={77}
						/>
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
							<InstagramIcon className='hover:text-app-accent transition-all duration-300' />
						</Link>
						<Link href={'mailto:bellania@gmail.com'}>
							<MailIcon className='hover:text-app-accent transition-all duration-300' />
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
				<p className='text-xs py-2 lg:mt-[1px] [&>a]:underline [&>a]:underline-offset-2 hover:[&>a]:underline-offset-1 [&>a]:transition-all'>
					Copyright &copy; 2023 Bellania | Design & Developed by{' '}
					<Link
						href={'https://kunalkeshan.dev'}
						target='_blank'
						title='Never gonna give you up 😜'
					>
						Kunal Keshan
					</Link>{' '}
					&{' '}
					<Link
						href={'https://surendarpd.vercel.app/'}
						target='_blank'
						title='Pro Dev'
					>
						Surendar PD
					</Link>{' '}
					| Open Source on{' '}
					<Link
						href={'https://github.com/kunalkeshan/Bellania'}
						target='_blank'
						title='Access code to this website'
					>
						GitHub
					</Link>{' '}
					| Powered by{' '}
					<Link
						href={'https://nextjs.org/'}
						target='_blank'
						title='Full-Stack Framework to build web apps'
					>
						Next.js
					</Link>{' '}
					+{' '}
					<Link
						href={'https://tailwindcss.com/'}
						target='_blank'
						title='CSS Utility Class Styling'
					>
						Tailwind CSS
					</Link>{' '}
					+
					<Link
						href={'https://ui.shadcn.com/'}
						target='_blank'
						title='Component Library'
					>
						Shadcn-UI
					</Link>{' '}
					+{' '}
					<Link
						href={'https://www.sanity.io/'}
						target='_blank'
						title='Content Management System'
					>
						Sanity
					</Link>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
