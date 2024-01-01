import Header from '@/components/Header';
import Card from '@/components/common/Card/Card';
import Editor from '@/components/features/editor/Editor';
import { browsers } from '@/utils/data';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Header />
			<br />
			<section>
				<h2 className='text-base font-semibold leading-7 text-gray-900'>Browsers</h2>
				<div className='flex gap-3'>
					{browsers?.map((browser, index) => (
						<Card key={index} title={browser.title} link={browser.link} info={browser.info} />
					))}
				</div>
			</section>

			<Editor />
		</main>
	);
}
