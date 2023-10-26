import React from 'react';
import Image from 'next/image';

type ProductCardProps = React.ComponentProps<'li'> & {
	product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, ...props }) => {
	return (
		<li className='w-full h-full flex flex-col gap-4' {...props}>
			<Image
				className='w-full max-h-[28rem] rounded object-cover'
				src={product.image}
				unoptimized
				alt={product.alt ?? ''}
				width={100}
				height={100}
			/>
			<div className='flex flex-col gap-2'>
				<h2 className='text-xl font-medium'>{product.title}</h2>
				<p className='text-slate-500'>{product?.description}</p>
			</div>
		</li>
	);
};

export default ProductCard;
