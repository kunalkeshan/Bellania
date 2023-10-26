// Navigation Data

interface Navdata {
	name: string;
	url: string;
	target: '_blank' | '_self';
}

type NavdataCollection = ReadonlyArray<Navdata>;

const COMMON_NAVIGATION: NavdataCollection = [
	{
		name: 'About',
		url: '/about',
		target: '_self',
	},
	{
		name: 'References',
		url: '/references',
		target: '_self',
	},
	{
		name: 'Contact',
		url: '/#contact',
		target: '_self',
	},
];

export const NAVBAR_NAVIGATION = [...COMMON_NAVIGATION];

export const FOOTER_NAVIGATION = {
	Information: [
		{
			name: 'Home',
			url: '/',
			target: '_self',
		},
		...COMMON_NAVIGATION,
	],
	Legal: [
		{
			name: 'Terms & Conditions',
			url: '#',
			target: '_self',
		},
		{
			name: 'Privacy Policy',
			url: '#',
			target: '_self',
		},
	],
};
