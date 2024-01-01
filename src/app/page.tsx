import Header from '@/src/components/Header';
import Editor from '@/src/components/features/editor/Editor';
import { browsers } from '@/src/data';
import EntityBrowserItem from '../components/common/EntityBrowserItem/EntityBrowserItem';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Header />
			<br />
			<section>
				<h3 className='text-2xl mb-3 font-bold leading-7 text-gray-900'>Browsers</h3>
				<div className='flex gap-3'>
					{browsers?.map((browser, index) => (
						<EntityBrowserItem
							key={index}
							title={browser.title}
							link={browser.link}
							info={browser.info}
							avatar={browser.avatar}
						/>
					))}
				</div>
			</section>

			<Editor />
		</main>
	);
}
