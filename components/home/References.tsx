/**
 * References Component
 */

// Dependencies
import React from 'react';
import ReferenceCard from '../cards/ReferenceCard';
import EmptyStateCard from '../cards/EmptyStateCard';

const References = () => {
	const references = [1, 2, 3] as number[];
	return (
		<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl pb-12 md:pb-16 lg:pb-32'>
			<h2 className='text-2xl md:text-3xl lg:text-4xl font-medium'>
				References
			</h2>
			{references && references.length > 0 ? (
				<ul className='w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{references.map((idx) => (
						<ReferenceCard key={`reference-${idx}`} />
					))}
				</ul>
			) : (
				<EmptyStateCard
					title='No references to be viewed yet.'
					className='mt-8'
				/>
			)}
		</section>
	);
};

export default References;
