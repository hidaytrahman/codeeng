'use client';

import EntityExtendMore from '../../common/EntityExtendMore/EntityExtendMore';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Skeleton from '../../common/Skeleton/Skeleton';
import Anchor from '../../core/Anchor';
import { Editor } from './types';

function Editors() {
	const [editors, setEditors] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchEditorsData() {
			try {
				setLoading(true);
				const { data } = await axios.get('/api/editors');
				console.log({ data });
				setEditors(data);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		}

		fetchEditorsData();
	}, []);

	return (
		<section className='mt-10 p-10'>
			<h3 className='text-2xl mb-3 font-bold leading-7 text-gray-900'>Editors</h3>
			{loading ? <Skeleton type='image' /> : null}
			{editors?.map(({ title, link, extensions, avatar }: Editor, index) => (
				<div className='capitlise p-2' key={index}>
					<div className='flex items-center justify-between gap-2 mb-5'>
						<div className='flex items-center gap-4'>
							<div className='shrink-0 flex items-center justify-center h-20 w-20 rounded bg-white border border-slate-200'>
								<img src={avatar} alt={title} />
							</div>
							<span className='text-l mb-3 font-bold leading-7'>{title}</span>
						</div>
						<Anchor link={link} />
					</div>

					{extensions?.length > 0 ? (
						<EntityExtendMore
							sections={[
								{
									icon: 'anything',
									title: 'Extensions',
									text: '',
									list: extensions,
								},
								// {
								// 	icon: 'anything',
								// 	title: 'Flows',
								// 	text: '',
								// 	list: [
								// 		{
								// 			icon: 'anything',
								// 			title: 'Analytics',
								// 			text: 'Everything counts. And everything that counts shapes us.',
								// 		},
								// 		{
								// 			icon: 'anything',
								// 			title: 'Transform',
								// 			text: 'Everything counts. And everything that counts shapes us.',
								// 		},
								// 	],
								// },
							]}
						/>
					) : null}
				</div>
			))}
		</section>
	);
}

export default Editors;
