import React from 'react';
import Link from 'next/link';

type CategoryCardProps = React.ComponentProps<'li'> & {
	category: ProductCategory;
};

const CategoryCard: React.FC<CategoryCardProps> = ({ category, ...props }) => {
	return (
		<li
			{...props}
			style={{
				backgroundImage: `url(${category.image})`,
			}}
			className='w-full max-h-[28rem] group bg-no-repeat cursor-pointer bg-cover bg-center rounded aspect-[9/16]'
		>
			<Link
				href={`/products/${category.slug}`}
				className='bg-gradient-to-t from-black/80 p-8 lg:opacity-0 transition-all duration-300 via-transparent lg:group-hover:opacity-100 flex to-transparent w-full h-full rounded text-center'
			>
				<div className='mt-auto w-full text-white text-xl'>
					{category.title}
				</div>
			</Link>
		</li>
	);
};

export default CategoryCard;
