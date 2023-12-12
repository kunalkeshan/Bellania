/**
 * Application Legal Data
 */

interface LegalInfo {
	title: string;
	information: string[];
}

type LegalInfoList = LegalInfo[];

export const TERMS_AND_CONDITIONS: LegalInfoList = [
	{
		title: 'Description of the Website',
		information: [
			'Bellania is a showcase lingerie website that features lingerie-related products for display and viewing purposes. The website utilizes stock images from Pexels (https://www.pexels.com/) and Unsplash (https://unsplash.com/). Bellania claims no ownership of these images and attributes them to the respective sources mentioned.',
		],
	},
	{
		title: 'Acceptable Use',
		information: [
			'You agree to use Bellania only for lawful and non-commercial purposes. You shall not:',
			'Attempt to gain unauthorized access to the website or its servers.',
			'Use the website to infringe upon the rights of others, including intellectual property rights.',
			'Transmit any harmful or malicious content that could damage the website or harm other users.',
			'Engage in any activity that may disrupt or interfere with the proper functioning of the website.',
		],
	},
	{
		title: 'Privacy',
		information: [
			'We respect your privacy and handle your personal information in accordance with our Privacy Policy, which is incorporated into these Terms. By using Bellania, you consent to our collection, use, and disclosure of your personal information as described in the Privacy Policy.',
		],
	},
	{
		title: 'Intellectual Property',
		information: [
			'All intellectual property rights related to Bellania, including but not limited to copyrights, trademarks, and trade secrets, are owned by the respective content creators and platforms providing stock images. Bellania claims no ownership of the stock images used on the website.',
		],
	},
	{
		title: 'Disclaimer',
		information: [
			'The content on Bellania is for display and viewing purposes only. We do not guarantee the accuracy or completeness of the information provided. Bellania is not a substitute for professional advice or product recommendations. Always refer to the product details and consult with relevant professionals for accurate information.',
		],
	},
	{
		title: 'Limitation of Liability',
		information: [
			'To the extent permitted by law, Bellania shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from or in connection with the use of the website or its content. This includes but is not limited to damages for loss of profits, data, or other intangible losses.',
		],
	},
	{
		title: 'Modifications',
		information: [
			'Bellania reserves the right to modify these Terms at any time. Any changes will be effective immediately upon posting the updated Terms on the website. Your continued use of Bellania after the posting of the updated Terms constitutes your acceptance of the revised Terms.',
		],
	},
	{
		title: 'Governing Law',
		information: [
			'These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.',
		],
	},
];

export const PRIVACY_POLICY: LegalInfoList = [
	{
		title: 'Information We Collect',
		information: [
			'1.1 Personal Information. We may collect personal information, such as: name, email, and phone number.',
			'1.2 Image Sources. When you view products on Bellania, we may display stock images sourced from Pexels and Unsplash. We claim no ownership of these images and attribute them to the respective sources.',
			'1.3 Log Data. We collect information that your browser sends whenever you visit Bellania. This may include your IP address, device type, operating system, browser version, and usage statistics. This data helps us analyze trends and improve user experience.',
		],
	},
	{
		title: 'How We Use Your Information',
		information: [
			'We use the collected information for the following purposes:',
			'To provide and personalize the display of lingerie-related products on Bellania',
			'To improve the website functionality and user experience',
			'To respond to inquiries submitted through the contact form',
			'To send periodic emails related to Bellania (optional)',
			'To analyze usage trends and gather statistical information',
		],
	},
	{
		title: 'Data Sharing and Disclosure',
		information: [
			'We may share your personal information and image sources in the following circumstances:',
			'With your explicit consent',
			'With our trusted service providers who assist us in operating Bellania and delivering services to you',
			'When required by law, regulation, or legal process',
			'In connection with a merger, acquisition, or sale of all or a portion of our assets',
			"We do not sell, trade, or rent Users' personal information to third parties for marketing purposes.",
		],
	},
	{
		title: 'Data Security',
		information: [
			"We take appropriate security measures to protect Users' personal information and image sources from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.",
		],
	},
	{
		title: 'Data Retention',
		information: [
			'We retain personal information and image sources for as long as necessary to fulfill the purposes outlined in this Policy, unless a longer retention period is required by law.',
		],
	},
	{
		title: "Children's Privacy",
		information: [
			'Bellania is intended for users who are 18 years of age and older. We do not knowingly collect personal information from individuals under 18. If we discover that personal information from an individual under 18 has been collected, we will delete it immediately.',
		],
	},
	{
		title: 'Third-Party Links',
		information: [
			'Bellania may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third parties. We encourage users to review the privacy policies of those third parties before providing any personal information.',
		],
	},
	{
		title: 'Changes to this Policy',
		information: [
			'We reserve the right to update or modify this Policy at any time. Any changes will be posted on this page, and the "Last Updated" date at the top of the Policy will be revised accordingly. By continuing to use Bellania after any changes, you acknowledge and accept the updated Policy.',
		],
	},
];
