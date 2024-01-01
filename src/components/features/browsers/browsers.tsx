'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Skeleton from '../../common/Skeleton/Skeleton';
import EntityBrowserItem from '../../common/EntityBrowserItem/EntityBrowserItem';

function Browsers() {
	const [browsers, setBrowsers] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		async function fetchEditorsData() {
			try {
				setLoading(true);
				const { data } = await axios.get('/api/browsers');
				console.log({ data });
				setBrowsers(data);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		}

		fetchEditorsData();
	}, []);

	return (
		<section>
			<h3 className='text-2xl mb-3 font-bold leading-7 text-gray-900'>Browsers</h3>
			{loading ? (
				<div className='flex gap-3'>
					<Skeleton type='image' />

					<Skeleton type='image' />

					<Skeleton type='image' />
				</div>
			) : null}
			<div className='flex gap-3'>
				{browsers?.map((browser: any, index) => (
					<EntityBrowserItem
						key={browser.id}
						title={browser.title}
						link={browser.link}
						info={browser.info}
						avatar={browser.avatar}
					/>
				))}
			</div>
		</section>
	);
}

export default Browsers;
