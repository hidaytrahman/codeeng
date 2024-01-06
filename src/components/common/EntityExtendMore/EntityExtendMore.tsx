'use client';
import { useState } from 'react';
import Anchor from '../../core/Anchor';

type EntityExtendMorePropsTypes = {
	sections: any[];
};
function EntityExtendMore({ sections }: EntityExtendMorePropsTypes) {
	const [expanded, setExpanded] = useState<boolean>(false);

	return (
		<div>
			<main className='relative p-4 bg-slate-50'>
				<button
					type='button'
					className='grow flex items-center justify-end'
					onClick={() => {
						setExpanded(!expanded);
					}}
					aria-controls='menu'
				>
					<div className='flex justify-between items-center py-4'>
						<div>Extensions {expanded ? '[-]' : '[+]'}</div>
					</div>
				</button>

				<hr />
				<div className='w-full max-w-5xl mx-auto '>
					{/* <!-- Expandable header --> */}
					{expanded ? (
						<header className='relative before:absolute  before:inset-0 before:rounded-lg before:shadow-xl before:shadow-slate-900/5 before:bg-white before:transition-all before:duration-500 before:ease-[cubic-bezier(.5,.85,.25,1.8)]'>
							<div className='relative'>
								<nav
									id='menu'
									role='navigation'
									aria-labelledby='menubutton'
									className='grid text-sm text-slate-600 overflow-hidden transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] [&[x-cloak]]:hidden'
								>
									<div className='overflow-hidden before:block before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-slate-200 before:to-transparent'>
										<div className='px-2 md:px-0 py-6'>
											<div className='space-y-8 lg:flex lg:space-x-12 lg:space-y-0'>
												<div className='space-y-8 lg:w-3/4 md:flex md:space-x-6 md:space-y-0'>
													{sections.map(({ title, list }, index) => (
														<div className='' key={index}>
															<div className='text-xs uppercase font-semibold text-slate-400 mb-3'>
																{title}
															</div>
															<ul className='space-y-1'>
																{list.map(
																	(
																		{ title, text, link, avatar }: any,
																		index: number
																	) => (
																		<li key={index}>
																			<div className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'>
																				<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																					<img src={avatar} alt='' />
																				</div>
																				<div>
																					<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																						{title}
																					</div>
																					<div className='text-slate-500'>
																						{text}
																					</div>
																					<div>
																						<Anchor link={link} />
																					</div>
																				</div>
																			</div>
																		</li>
																	)
																)}
															</ul>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								</nav>
							</div>
						</header>
					) : null}

					{/* // <!-- End: Expandable header --> */}
				</div>
			</main>
		</div>
	);
}

export default EntityExtendMore;
