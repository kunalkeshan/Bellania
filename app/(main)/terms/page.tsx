import Link from 'next/link';
import { TERMS_AND_CONDITIONS } from '@/constants/legal';

function TermsAndConditionsPage() {
	return (
		<div className='pt-12 md:pt-16'>
			<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl'>
				<h1 className='text-2xl md:text-3xl lg:text-4xl font-medium w-fit'>
					Terms and Conditions
					<hr className='border-t-4 mt-1 border-t-app-primary rounded w-full' />
				</h1>
				<h2 className='text-lg md:text-2xl font-medium mx-auto mt-4'>
					These Terms and Conditions (Terms) govern your use of the
					Bellania application (App), developed by{' '}
					<Link
						href={'#'}
						target='_blank'
						className='underline underline-offset-2 hover:underline-offset-1 transition-all'
					>
						Kunal Keshan
					</Link>{' '}
					&{' '}
					<Link
						href={'#'}
						target='_blank'
						className='underline underline-offset-2 hover:underline-offset-1 transition-all'
					>
						Surendar PD
					</Link>
					. By using the App, you agree to comply with these Terms. If
					you do not agree with any part of these Terms, please
					refrain from using the App.
				</h2>
			</section>
			<section className='p-4 md:px-16 lg:max-w-7xl lg:mx-auto xl:max-w-8xl pb-12 md:pb-16 lg:pb-32'>
				<ol className='mt-4 list-decimal ml-4'>
					{TERMS_AND_CONDITIONS.map((toc) => (
						<li key={toc.title}>
							<h3 className='font-heading text-lg md:text-xl font-bold'>
								{toc.title}
							</h3>
							<ul className='list-disc ml-4'>
								{toc.information.map((info) => (
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

export default TermsAndConditionsPage;
