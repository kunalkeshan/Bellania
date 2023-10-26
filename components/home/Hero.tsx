/**
 * Hero Component
 */

'use client';

// Dependencies
import * as React from 'react';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const works = [
	{
		artist: 'Ornella Binni',
		art: '/images/hero/1.jpg',
	},
	{
		artist: 'Tom Byrom',
		art: '/images/hero/2.jpg',
	},
	{
		artist: 'Vladimir Malyavko',
		art: '/images/hero/3.jpg',
	},
	{
		artist: 'Ornella Binni',
		art: '/images/hero/1.jpg',
	},
	{
		artist: 'Tom Byrom',
		art: '/images/hero/2.jpg',
	},
	{
		artist: 'Vladimir Malyavko',
		art: '/images/hero/3.jpg',
	},
	{
		artist: 'Ornella Binni',
		art: '/images/hero/1.jpg',
	},
	{
		artist: 'Tom Byrom',
		art: '/images/hero/2.jpg',
	},
	{
		artist: 'Vladimir Malyavko',
		art: '/images/hero/3.jpg',
	},
];

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

export default function Hero() {
	return (
		<section className='w-full h-fit'>
			<Carousel
				responsive={responsive}
				ssr
				autoPlay
				infinite
				slidesToSlide={1}
				itemClass='image-item'
				deviceType={''}
				autoPlaySpeed={2000}
				customRightArrow={<div></div>}
				customLeftArrow={<div></div>}
				transitionDuration={500}
				centerMode={true}
			>
				{works.map((image, idx) => {
					return (
						<Image
							className='w-screen aspect-[9/16] md:aspect-square lg:aspect-video h-full object-cover'
							width={450}
							height={350}
							key={idx}
							src={image.art}
							alt={image.artist}
						/>
					);
				})}
			</Carousel>
		</section>
	);
}
