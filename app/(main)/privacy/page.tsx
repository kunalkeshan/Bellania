import { PRIVACY_POLICY } from '@/constants/legal';

function PrivacyPolicyPage() {
	return (
		<div className='pt-12 md:pt-16'>
			<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl'>
				<h1 className='text-2xl md:text-3xl lg:text-4xl font-medium w-fit'>
					Privacy Policy
					<hr className='border-t-4 mt-1 border-t-app-primary rounded w-full' />
				</h1>
				<h2 className='text-lg md:text-2xl font-medium mx-auto mt-4'>
					This Privacy Policy (Policy) explains how Bellania collects,
					uses, and protects the personal information of users (Users)
					of the Bellania application (App). By using the App, you
					consent to the data practices described in this Policy.
				</h2>
			</section>
			<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl pb-12 md:pb-16 lg:pb-32'>
				<ol className='mt-4 list-decimal ml-4'>
					{PRIVACY_POLICY.map((pp) => (
						<li key={pp.title}>
							<h3 className='font-heading text-lg md:text-xl font-bold'>
								{pp.title}
							</h3>
							<ul className='list-disc ml-4'>
								{pp.information.map((info) => (
									<li key={info}>{info}</li>
								))}
							</ul>
						</li>
					))}
					<li>
						<h3 className='font-heading text-lg md:text-xl font-bold'>
							Contact Us
						</h3>
						<ul className='list-disc ml-4'>
							<li>
								If you have any questions or concerns about
								these Terms or the App, please contact us at{' '}
								<a
									href='https://twitter.com/_kunalkeshan_'
									target='_blank'
									className='underline text-textSecondary'
								>
									https://twitter.com/_kunalkeshan_
								</a>
								.
							</li>
						</ul>
					</li>
				</ol>
			</section>
		</div>
	);
}

export default PrivacyPolicyPage;
