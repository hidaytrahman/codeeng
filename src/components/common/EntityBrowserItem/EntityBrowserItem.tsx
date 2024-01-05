import Anchor from '../../core/Anchor';

type CardPropsTypes = {
	title: string;
	link: string;
	info?: string;
	avatar?: string;
};
export default function EntityBrowserItem({ title, link, info, avatar }: CardPropsTypes) {
	return (
		<div>
			<div className='max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
				<div className='shrink-0 p-2 flex items-center justify-center h-20 w-20 rounded bg-white border border-slate-200'>
					<img src={avatar} alt={title} />
				</div>

				<h5 className='my-2 text-xl capitalize font-semibold tracking-tight text-gray-900 dark:text-white'>
					{title}
				</h5>

				<p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>{info}</p>

				<div className='shrink-0 p-2 flex items-center justify-center'>
					<Anchor link={link} />
				</div>
			</div>
		</div>
	);
}
