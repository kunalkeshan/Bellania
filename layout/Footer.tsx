import React from 'react';

type FooterProps = React.ComponentProps<'footer'> & {
	productCategory: ProductCategory[];
};

const Footer: React.FC<FooterProps> = ({}) => {
	return <footer>Footer</footer>;
};

export default Footer;
