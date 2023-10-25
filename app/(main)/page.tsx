import Contact from '@/components/home/Contact';
import Hero from '@/components/home/Hero';
import References from '@/components/home/References';
import Showcase from '@/components/home/Showcase';

function Home() {
	return (
		<div className=''>
			<Hero />
			<Showcase />
			<References />
			<Contact />
		</div>
	);
}

export default Home;
