type ProductCategory = Readonly<{
	_id: string;
	title: string;
	slug: string;
	description: string;
	image: string;
	alt?: string;
	cover: string;
	coverAlt?: string;
}>;

type Product = Readonly<{
	_id: string;
	title: string;
	description: string;
	image: string;
	alt?: string;
	category: ProductCategory;
}>;
