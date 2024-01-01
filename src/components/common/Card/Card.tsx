type CardPropsTypes = {
	title: string;
	link: string;
	info?: string;
	avatar?: string;
};
export default function Card({ title, link, info, avatar }: CardPropsTypes) {
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
				<a href={link} className='inline-flex items-center text-blue-600 hover:underline' target='_blank'>
					Download
					<svg
						className='w-3 h-3 ms-2.5 rtl:rotate-[270deg]'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 18 18'
					>
						<path
							stroke='currentColor'
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
						/>
					</svg>
				</a>
			</div>
		</div>
	);
}
