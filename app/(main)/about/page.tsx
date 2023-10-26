import { Quote } from 'lucide-react';
import Image from 'next/image';

function About() {
	return (
		<>
			<section>
				<div
					style={{ backgroundImage: `url('/images/hero/1.jpg')` }}
					className='w-full max-h-[28rem] bg-no-repeat bg-cover bg-center aspect-video'
				>
					<div className='bg-gradient-to-t text-white from-black/50 p-8 flex flex-col gap-2 justify-center items-center to-black/50 w-full h-full text-center'>
						<h1 className=' text-2xl md:text-3xl lg:text-4xl'>
							About Us
						</h1>
						<p className='text-sm md:text-base lg:text-lg max-w-3xl'>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quis voluptas tenetur tempore doloremque
							dolorem consequuntur. Sit odit est itaque! Inventore
							reprehenderit iure corrupti ducimus quos dolorem
							ratione earum nam accusantium?
						</p>
					</div>
				</div>
			</section>
			<section className='w-full h-full'>
				<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl py-12 md:py-16 text-center lg:text-left'>
					{[
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique blanditiis, nihil suscipit expedita ducimus, delectus voluptatum excepturi tempore esse, cumque sunt temporibus rem natus beatae. Harum corporis architecto numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique blanditiis, nihil suscipit expedita ducimus, delectus voluptatum excepturi tempore esse, cumque sunt temporibus rem natus beatae. Harum corporis architecto numquam.',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique blanditiis, nihil suscipit expedita ducimus, delectus voluptatum excepturi tempore esse, cumque sunt temporibus rem natus beatae. Harum corporis architecto numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique blanditiis, nihil suscipit expedita ducimus, delectus voluptatum excepturi tempore esse, cumque sunt temporibus rem natus beatae. Harum corporis architecto numquam.',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique blanditiis, nihil suscipit expedita ducimus, delectus voluptatum excepturi tempore esse, cumque sunt temporibus rem natus beatae. Harum corporis architecto numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique blanditiis, nihil suscipit expedita ducimus, delectus voluptatum excepturi tempore esse, cumque sunt temporibus rem natus beatae. Harum corporis architecto numquam.',
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique blanditiis, nihil suscipit expedita ducimus, delectus voluptatum excepturi tempore esse, cumque sunt temporibus rem natus beatae. Harum corporis architecto numquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia similique blanditiis, nihil suscipit expedita ducimus, delectus voluptatum excepturi tempore esse, cumque sunt temporibus rem natus beatae. Harum corporis architecto numquam.',
					].map((item, idx) => (
						<p key={`about-item-${idx}`} className='mt-4'>
							{item}
						</p>
					))}
					<div className='bg-app-accent rounded px-8 py-4 mt-8 flex gap-4 w-fit mx-auto font-semibold'>
						<Quote strokeWidth={1.5} />{' '}
						<p>
							We continue to create special feelings for you with
							love for women.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
