/**
 * Showcase Component
 */

// Dependencies
import React from 'react';
import CategoryCard from '../cards/CategoryCard';
import EmptyStateCard from '../cards/EmptyStateCard';

type ShowcaseProps = React.ComponentProps<'section'> & {
	categories: ProductCategory[];
};

const Showcase: React.FC<ShowcaseProps> = ({ categories }) => {
	return (
		<section className='w-full h-full'>
			<div className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl py-12 md:py-16 lg:py-32'>
				<h2 className='text-2xl md:text-3xl lg:text-4xl font-medium w-fit'>
					Showcase
					<hr className='border-t-4 mt-1 border-t-app-primary rounded w-full' />
				</h2>
				{categories && categories.length > 0 ? (
					<ul className='w-full mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
						{categories.map((category) => (
							<CategoryCard
								category={category}
								key={`category-${category._id}`}
							/>
						))}
					</ul>
				) : (
					<EmptyStateCard
						title='No categories to be viewed yet.'
						className='mt-8'
					/>
				)}
			</div>
		</section>
	);
};

export default Showcase;
