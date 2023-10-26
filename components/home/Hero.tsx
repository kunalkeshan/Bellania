/**
 * Hero Component
 */

'use client';

// Dependencies
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectFade, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type HeroProps = React.ComponentProps<'section'> & {
	sliderImages: SliderImage[];
};

const Hero: React.FC<HeroProps> = ({ sliderImages }) => {
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
				{sliderImages.map((item, idx) => {
					return (
						<SwiperSlide key={idx} className=''>
							<Image
								className='w-full aspect-[9/16] md:aspect-square lg:aspect-video h-auto object-cover'
								width={450}
								height={350}
								key={idx}
								src={item.image}
								alt={item.alt ?? ''}
								unoptimized
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Hero;
