function Expandable() {
	return (
		<div>
			<main className='relative min-h-screen flex flex-col bg-slate-50 before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-200/60 before:to-transparent overflow-hidden'>
				<div className='w-full max-w-5xl mx-auto px-4 md:px-6 py-6'>
					{/* <!-- Expandable header --> */}
					<header
						x-data='{ expanded: false }'
						className='relative before:absolute before:inset-0 before:rounded-lg before:shadow-xl before:shadow-slate-900/5 before:bg-white before:transition-all before:duration-500 before:ease-[cubic-bezier(.5,.85,.25,1.8)]'
						// :className="expanded ? 'before:-inset-2 before:top-0' : 'before:inset-0'"
					>
						<div className='relative'>
							<div className='flex items-center px-4'>
								<a
									className='focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300'
									href='#0'
								>
									<svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' aria-label='Logo'>
										<g fill='none' fill-rule='nonzero'>
											<path
												fill='#C7D2FE'
												d='M24.317 7.426a8.537 8.537 0 0 1-2.616 15.262 3.15 3.15 0 0 1-3.042-5.268l2.425-2.426a10.079 10.079 0 0 0 2.951-7.764c.088.064.186.128.282.196Z'
											/>
											<path
												fill='#6366F1'
												d='M7.425 3.68a8.54 8.54 0 0 1 15.262 2.618 3.149 3.149 0 0 1-5.268 3.046L14.995 6.92a10.122 10.122 0 0 0-7.764-2.95c.062-.097.128-.195.194-.29Z'
											/>
											<path
												fill='#C7D2FE'
												d='M3.68 20.572A8.54 8.54 0 0 1 6.296 5.31a3.148 3.148 0 0 1 3.05 5.268l-2.424 2.424a10.117 10.117 0 0 0-2.95 7.766c-.098-.064-.196-.128-.294-.196Z'
											/>
											<path
												fill='#6366F1'
												d='M20.574 24.319A8.54 8.54 0 0 1 5.309 21.7a3.15 3.15 0 0 1 5.27-3.05l2.424 2.424a10.098 10.098 0 0 0 7.764 2.95 9.316 9.316 0 0 1-.193.295Z'
											/>
										</g>
									</svg>
								</a>
								<button
									id='menubutton'
									type='button'
									className='grow flex items-center justify-end h-14 pl-4 focus-visible:outline-none group'
									// @click="expanded = !expanded"
									// aria-expanded='expanded'
									aria-controls='menu'
								>
									<div className='p-1.5 group-focus-visible:ring group-focus-visible:ring-indigo-300'>
										<svg
											className='fill-slate-400 shrink-0 transition duration-300 ease-in-out'
											// className="{'rotate-[135deg]': expanded}"
											width='18'
											height='18'
											xmlns='http://www.w3.org/2000/svg'
										>
											<rect y='8' width='18' height='2' />
											<rect
												y='8'
												width='18'
												height='2'
												className='transform origin-center rotate-90'
											/>
										</svg>
									</div>
								</button>
							</div>
							<nav
								id='menu'
								role='navigation'
								aria-labelledby='menubutton'
								className='grid text-sm text-slate-600 overflow-hidden transition-all duration-500 ease-[cubic-bezier(.5,.85,.25,1.8)] [&[x-cloak]]:hidden'
								// :className="expanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 invisible'"
								x-cloak
							>
								<div className='overflow-hidden before:block before:w-full before:h-px before:bg-gradient-to-r before:from-transparent before:via-slate-200 before:to-transparent'>
									<div className='px-4 md:px-6 py-8'>
										<div className='space-y-8 lg:flex lg:space-x-12 lg:space-y-0'>
											<div className='space-y-8 lg:w-3/4 md:flex md:space-x-6 md:space-y-0'>
												<div className='md:w-1/2'>
													<div className='text-xs uppercase font-semibold text-slate-400 mb-3'>
														Products
													</div>
													<ul className='space-y-1'>
														<li>
															<a
																className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																href='#0'
															>
																<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																	<svg
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
																	</svg>
																</div>
																<div>
																	<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																		Analytics
																	</div>
																	<div className='text-slate-500'>
																		Everything counts. And everything that counts —
																		shapes us.
																	</div>
																</div>
															</a>
														</li>
														<li>
															<a
																className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																href='#0'
															>
																<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='16'
																		height='16'
																	>
																		<path
																			fill='#6366F1'
																			d='M4 2h3v7a1 1 0 1 0 2 0V2h3a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2Z'
																		/>
																		<path
																			fill='#A5B4FC'
																			d='M12.82 10.116a.5.5 0 0 0-.82.385v1.5H4v-1.5a.5.5 0 0 0-.82-.385l-3 2.5a.5.5 0 0 0 0 .768l3 2.5a.502.502 0 0 0 .532.069A.5.5 0 0 0 4 15.5V14h8v1.5a.5.5 0 0 0 .82.384l3-2.5a.5.5 0 0 0 0-.768l-3-2.5Z'
																		/>
																	</svg>
																</div>
																<div>
																	<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																		Transform
																	</div>
																	<div className='text-slate-500'>
																		Everything counts. And everything that counts —
																		shapes us.
																	</div>
																</div>
															</a>
														</li>
														<li>
															<a
																className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																href='#0'
															>
																<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='16'
																		height='16'
																	>
																		<path
																			fill='#A5B4FC'
																			d='M10.742 5.26a4.475 4.475 0 0 0-.825-.64L8.435 6.102a2.531 2.531 0 0 1 .893 4.158l-3 3a2.536 2.536 0 0 1-3.586-3.586l.058-.062a6 6 0 0 1-.37-2.075c0-.134.01-.266.02-.4L1.327 8.26a4.535 4.535 0 0 0 6.414 6.414l3-3a4.536 4.536 0 0 0 0-6.414Z'
																		/>
																		<path
																			fill='#6366F1'
																			d='M5.26 10.742c.25.245.527.46.825.64l1.482-1.48a2.531 2.531 0 0 1-.893-4.16l3-3a2.536 2.536 0 0 1 3.586 3.586l-.062.062c.247.664.374 1.367.375 2.075 0 .134-.01.266-.02.4l1.121-1.123A4.535 4.535 0 0 0 8.26 1.328l-3 3a4.536 4.536 0 0 0 0 6.414Z'
																		/>
																	</svg>
																</div>
																<div>
																	<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																		Security
																	</div>
																	<div className='text-slate-500'>
																		Everything counts. And everything that counts —
																		shapes us.
																	</div>
																</div>
															</a>
														</li>
														<li>
															<a
																className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																href='#0'
															>
																<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='16'
																		height='12'
																	>
																		<circle
																			cx='8'
																			cy='10.5'
																			r='1.5'
																			fill='#6366F1'
																		/>
																		<path
																			fill='#A5B4FC'
																			d='M11.5 8C10.6 7 9.3 6.5 8 6.5 6.7 6.5 5.4 7 4.5 8L3.1 6.6c1.3-1.4 3-2.1 4.9-2.1 1.9 0 3.6.7 4.9 2.1L11.5 8Z'
																		/>
																		<path
																			fill='#6366F1'
																			d='M8 0C5 0 2.2 1.1 0 3.2l1.4 1.4C3.2 2.9 5.5 2 8 2s4.8.9 6.6 2.7L16 3.2C13.8 1.1 11 0 8 0Z'
																		/>
																	</svg>
																</div>
																<div>
																	<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																		Connect
																	</div>
																	<div className='text-slate-500'>
																		Everything counts. And everything that counts —
																		shapes us.
																	</div>
																</div>
															</a>
														</li>
													</ul>
												</div>
												<div className='md:w-1/2'>
													<div className='text-xs uppercase font-semibold text-slate-400 mb-3'>
														Flows
													</div>
													<ul className='space-y-1'>
														<li>
															<a
																className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																href='#0'
															>
																<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='16'
																		height='14'
																	>
																		<path
																			fill='#A5B4FC'
																			d='M15.5 10H13a5.022 5.022 0 0 1-3.453-1.4l-1.2 1.607A7.065 7.065 0 0 0 12 11.92v1.586a.5.5 0 0 0 .853.349l3-3A.5.5 0 0 0 15.5 10ZM1 4a5.022 5.022 0 0 1 3.453 1.4l1.205-1.61A7.028 7.028 0 0 0 1 2a1 1 0 1 0 0 2Z'
																		/>
																		<path
																			fill='#6366F1'
																			d='M13 4h2.5a.5.5 0 0 0 .354-.853l-3-3A.5.5 0 0 0 12 .5v1.58a7.032 7.032 0 0 0-4.6 2.72L5 8a5.025 5.025 0 0 1-4 2 1 1 0 0 0 0 2 7.034 7.034 0 0 0 5.6-2.8L9 6a5.025 5.025 0 0 1 4-2Z'
																		/>
																	</svg>
																</div>
																<div>
																	<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																		Flows
																	</div>
																	<div className='text-slate-500'>
																		Everything counts. And everything that counts —
																		shapes us.
																	</div>
																</div>
															</a>
														</li>
														<li>
															<a
																className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																href='#0'
															>
																<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='16'
																		height='16'
																	>
																		<path
																			fill='#A5B4FC'
																			d='M4.086 5.5 5.5 4.087l6.414 6.414-1.414 1.415z'
																		/>
																		<circle cx='2' cy='2' r='2' fill='#6366F1' />
																		<path fill='#6366F1' d='M12 12h4v4h-4z' />
																	</svg>
																</div>
																<div>
																	<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																		Tracking
																	</div>
																	<div className='text-slate-500'>
																		Everything counts. And everything that counts —
																		shapes us.
																	</div>
																</div>
															</a>
														</li>
														<li>
															<a
																className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																href='#0'
															>
																<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		width='14'
																		height='12'
																	>
																		<path
																			fill='#6366F1'
																			d='m6.7 5.3-5-5C1.3-.1.7-.1.3.3c-.4.4-.4 1 0 1.4L4.6 6 .3 10.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4Z'
																		/>
																		<path fill='#A5B4FC' d='M7 10h7v2H7z' />
																	</svg>
																</div>
																<div>
																	<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																		Management
																	</div>
																	<div className='text-slate-500'>
																		Everything counts. And everything that counts —
																		shapes us.
																	</div>
																</div>
															</a>
														</li>
														<li>
															<a
																className='flex space-x-4 px-3 py-2.5 rounded hover:bg-slate-50 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition'
																href='#0'
															>
																<div className='shrink-0 flex items-center justify-center h-9 w-9 rounded bg-white border border-slate-200'>
																	<svg
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
																	</svg>
																</div>
																<div>
																	<div className='text-sm font-semibold text-slate-800 mb-0.5'>
																		Billing
																	</div>
																	<div className='text-slate-500'>
																		Everything counts. And everything that counts —
																		shapes us.
																	</div>
																</div>
															</a>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							</nav>
						</div>
					</header>
					{/* // <!-- End: Expandable header --> */}
				</div>
			</main>
		</div>
	);
}

export default Expandable;
