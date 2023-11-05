import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type ReferenceCardProps = React.ComponentProps<'li'> & {
	reference: Reference;
};

const ReferenceCard: React.FC<ReferenceCardProps> = ({ reference }) => {
	return (
		<li className='group rounded'>
			<Link
				href={reference?.website ?? '#'}
				className='w-full max-h-[28rem]'
			>
				<Image
					src={reference.image}
					alt={reference?.alt || ''}
					width={100}
					height={100}
					className='w-full h-auto object-contain group-hover:scale-[1.02] transition-all duration-300'
					unoptimized
				/>
			</Link>
		</li>
	);
};

export default ReferenceCard;
