/**
 * Hero Component
 */

'use client';

// Dependencies
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
	{
		art: '/images/hero/1.jpg',
	},
	{
		art: '/images/hero/2.jpg',
	},
	{
		art: '/images/hero/3.jpg',
	},
	{
		art: '/images/hero/1.jpg',
	},
	{
		art: '/images/hero/2.jpg',
	},
	{
		art: '/images/hero/3.jpg',
	},
	{
		art: '/images/hero/1.jpg',
	},
	{
		art: '/images/hero/2.jpg',
	},
	{
		art: '/images/hero/3.jpg',
	},
];

export default function Hero() {
	return (
		<section className='w-full h-fit'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				centeredSlides={true}
				navigation={true}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay, Navigation, EffectFade]}
				className='mySwiper'
				effect='fade'
				loop={true}
			>
				{slides.map((image, idx) => {
					return (
						<SwiperSlide key={idx} className=''>
							<Image
								className='w-full aspect-[9/16] md:aspect-square lg:aspect-video h-auto object-cover'
								width={450}
								height={350}
								key={idx}
								src={image.art}
								alt=''
								unoptimized
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
}
