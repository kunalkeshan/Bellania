import Image from 'next/image';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type EmptyStateCardProps = React.ComponentProps<'div'> & {
	title: string;
};

const EmptyStateCard: React.FC<EmptyStateCardProps> = ({ title, ...props }) => {
	return (
		<div
			className={twMerge(
				'max-w-sm lg:max-w-xl flex flex-col lg:flex-row gap-8 mx-auto items-center jusitfy-center text-center lg:text-left',
				props.className
			)}
		>
			<div className='overflow-hidden'>
				<Image
					src='/images/lost.svg'
					width={100}
					height={100}
					alt=''
					className='w-full h-auto max-w-[80%] mx-auto'
				/>
			</div>
			<div>
				<p className='text-2xl lg:text-4xl font-medium'>{title}</p>
			</div>
		</div>
	);
};

export default EmptyStateCard;
