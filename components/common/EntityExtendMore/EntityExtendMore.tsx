'use client';
import { useState } from 'react';

type EntityExtendMorePropsTypes = {
	sections: any[];
};
function EntityExtendMore({ sections }: EntityExtendMorePropsTypes) {
	const [expanded, setExpanded] = useState<boolean>(true);

	return (
		<div>
			<main className='relative  bg-slate-50'>
				<button
					type='button'
					className='grow flex items-center justify-end pl-4'
					onClick={() => {
						setExpanded(!expanded);
					}}
					aria-controls='menu'
				>
					<div className='flex justify-between items-center'>
						<div>Extensions {expanded ? '[-]' : '[+]'}</div>
					</div>
				</button>

				<hr />
				<div className='w-full max-w-5xl mx-auto md:px-6 '>
					{/* <!-- Expandable header --> */}
					{expanded ? (
						<header
							className='relative before:absolute before:inset-0 before:rounded-lg before:shadow-xl before:shadow-slate-900/5 before:bg-white before:transition-all before:duration-500 before:ease-[cubic-bezier(.5,.85,.25,1.8)]'
							// className="expanded ? 'before:-inset-2 before:top-0' : 'before:inset-0'"
						>
							<div className='relative'>
								<nav
									id='menu'
									role='navigation'
									aria-labelledby='menubutton'
									className='grid text-sm text-slate-600 overflow-hidden transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] [&[x-cloak]]:hidden'
								>
									<div className='overflow-hidden before:block before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-slate-200 before:to-transparent'>
										<div className='px-4 md:px-6 py-8'>
											<div className='space-y-8 lg:flex lg:space-x-12 lg:space-y-0'>
												<div className='space-y-8 lg:w-3/4 md:flex md:space-x-6 md:space-y-0'>
													{sections.map(({ title, list }, index) => (
														<div className='md:w-1/2' key={index}>
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
																			<a
																				className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																				href='#0'
																			>
																				<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																					{/* <svg
																			xmlns='http://www.w3.org/2000/svg'
																			width='16'
																			height='14'
																		>
																			<rect
																				width='3'
																				height='2'
																				fill='#6366F1'
																				rx='.5'
																			/>
																			<rect
																				width='3'
																				height='2'
																				x='13'
																				y='12'
																				fill='#A5B4FC'
																				rx='.5'
																			/>
																			<rect
																				width='7'
																				height='2'
																				x='2'
																				y='4'
																				fill='#A5B4FC'
																				rx='.5'
																			/>
																			<rect
																				width='9'
																				height='2'
																				x='5'
																				y='8'
																				fill='#6366F1'
																				rx='.5'
																			/>
																		</svg> */}
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
																						<a
																							href={link}
																							className='inline-flex items-center text-blue-600 hover:underline'
																							target='_blank'
																						>
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
																									stroke-linecap='round'
																									stroke-linejoin='round'
																									stroke-width='2'
																									d='M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778'
																								/>
																							</svg>
																						</a>
																					</div>
																				</div>
																			</a>
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
