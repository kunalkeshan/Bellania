import React from 'react';

type ReferenceCardProps = React.ComponentProps<'li'>;

const ReferenceCard: React.FC<ReferenceCardProps> = () => {
	return (
		<li
			style={{ backgroundImage: `url('/images/hero/1.jpg')` }}
			className='w-full max-h-[28rem] group bg-no-repeat bg-cover bg-center rounded aspect-video cursor-pointer hover:scale-[1.02] transition-all duration-300'
		/>
	);
};

export default ReferenceCard;
