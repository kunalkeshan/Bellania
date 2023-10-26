/**
 * References Component
 */

// Dependencies
import React from 'react';
import ReferenceCard from '../cards/ReferenceCard';

const References = () => {
	return (
		<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl pb-12 md:pb-16 lg:pb-32'>
			<h2 className='text-2xl md:text-3xl lg:text-4xl font-medium'>
				References
			</h2>
			<ul className='w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{[1, 2, 3].map((idx) => (
					<ReferenceCard key={`reference-${idx}`} />
				))}
			</ul>
		</section>
	);
};

export default References;
