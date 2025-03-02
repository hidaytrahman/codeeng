import Banner from '@/components/core/Banner';

export default function Home() {
	return (
		<main>
			<article className=''>
				<Banner
					titles={['Code environment basic', ' and required setup']}
					text="At Codeeng, we believe in empowering developers by providing a comprehensive resource hub for setting up and optimizing coding environments. Whether you're a seasoned developer or just starting your coding journey, our platform is designed to guide you through essential installations and configurations to create a seamless coding experience"
				/>
			</article>
		</main>
	);
}
