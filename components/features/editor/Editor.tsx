import { editors } from '@/utils/data';
import EntityExtendMore from '../../common/EntityExtendMore/EntityExtendMore';

function Editor() {
	return (
		<section className='mt-10'>
			<h3 className='text-2xl mb-3 font-bold leading-7 text-gray-900'>Editors</h3>
			{editors?.map(({ title, link, extensions, avatar }, index) => (
				<div className='capitlise' key={index}>
					<div className='flex items-center gap-2 mb-5'>
						<div className='shrink-0 flex items-center justify-center h-20 w-20 rounded bg-white border border-slate-200'>
							<img src={avatar} alt={title} />
						</div>
						<span>{title}</span>
						<a href={link} target='_blank'>
							Download
						</a>
					</div>

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
				</div>
			))}
		</section>
	);
}

export default Editor;
