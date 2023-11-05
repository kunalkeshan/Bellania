import References from '@/components/home/References';
import { referencesQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanityFetch';

async function ReferencesPage() {
	const references = await sanityFetch<Reference[]>({
		query: referencesQuery,
	});
	return (
		<div className='pt-12 md:pt-16'>
			<References references={references} />
		</div>
	);
}

export default ReferencesPage;
