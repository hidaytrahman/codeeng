'use client';
import EntityExtendMore from '../../common/EntityExtendMore/EntityExtendMore';
import { useCallback, useEffect, useState } from 'react';
import Skeleton from '../../common/Skeleton/Skeleton';
import Anchor from '../../core/Anchor';
import { EditorTypes } from './types';
import { API_ENDPOINTS } from '@/config/API.config';

// SERVICES
import { HttpService } from '@/services';

function Editors() {
	const http = new HttpService();

	const [editors, setEditors] = useState<EditorTypes[]>([]);
	const [loading, setLoading] = useState(false);

	const fetchEditorsData = useCallback(async () => {
		try {
			setLoading(true);
			const data = await http.service().get<any[]>(API_ENDPOINTS.editors);

			// console.log(data);
			setEditors(data);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchEditorsData();
	}, [fetchEditorsData]);

	return (
		<section className='mt-10 p-10'>
			<h3 className='text-2xl mb-3 font-bold leading-7 text-gray-900'>Editors</h3>
			{loading ? <Skeleton type='image' /> : null}
			{editors?.map(({ title, link, extensions, avatar }: EditorTypes, index) => (
				<div className='capitlise p-2  bg-slate-200 my-4' key={index}>
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
							]}
						/>
					) : null}
				</div>
			))}
		</section>
	);
}

export default Editors;
