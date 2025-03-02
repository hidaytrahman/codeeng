'use client';
import { useCallback, useEffect, useMemo, useState } from 'react';
import Skeleton from '../../common/Skeleton/Skeleton';
import EntityBrowserItem from '../../common/EntityBrowserItem/EntityBrowserItem';
import { HttpService } from '@/services';
import { API_ENDPOINTS } from '@/config/API.config';
import { BrowserTypes } from './types';

function Browsers() {
	const http = useMemo(() => new HttpService(), []);

	const [browsers, setBrowsers] = useState<BrowserTypes[]>([]);
	const [loading, setLoading] = useState(false);

	const fetchEditorsData = useCallback(
		async function () {
			try {
				setLoading(true);
				const data = await http.get<BrowserTypes[]>(API_ENDPOINTS.BROWSERS);

				setBrowsers(data);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		},
		[http]
	);

	useEffect(() => {
		fetchEditorsData();
	}, [fetchEditorsData]);

	return (
		<section className='mt-10 p-10'>
			<h3 className='text-2xl mb-3 font-bold leading-7 text-gray-900'>Browsers</h3>
			{loading ? (
				<div className='flex gap-3'>
					<Skeleton type='image' />

					<Skeleton type='image' />

					<Skeleton type='image' />
				</div>
			) : null}
			<div className='flex gap-3 flex-wrap'>
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
