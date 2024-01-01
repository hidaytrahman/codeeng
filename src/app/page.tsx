import Header from '@/src/components/Header';
import Editor from '@/src/components/features/editor/Editor';
import { browsers } from '@/src/data';
import EntityBrowserItem from '../components/common/EntityBrowserItem/EntityBrowserItem';
import Browsers from '../components/features/browsers/browsers';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Header />
			<br />
			<Browsers />
			<Editor />
		</main>
	);
}
