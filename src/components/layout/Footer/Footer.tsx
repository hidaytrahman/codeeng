import React from 'react';

function Footer() {
	return (
		<footer className='bg-white'>
			<div className='mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
				<div className='text-center'>
					<h2 className='text-3xl font-extrabold text-gray-900 sm:text-5xl'>Collaborate and Simplified</h2>

					<p className='mx-auto mt-4 max-w-lg text-gray-500'>
						Codeeng is not just an app; it&apos;s a community-driven platform created by developers for
						developers. Whether you&apos;re looking to set up your coding environment, collaborate on
						projects, or stay updated on industry trends, DevHub is your go-to destination. Join our growing
						community today and unlock the full potential of your development journey!
					</p>

					{/* <div className='mt-8 flex flex-wrap justify-center gap-4'>
						<a
							className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							href='/get-started'
						>
							Get Started
						</a>
					</div> */}
				</div>

				<div className='mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24'>
					<ul className='flex flex-wrap justify-center gap-4 text-xs lg:justify-end'>
						{/* <li>
							<a href='#' className='text-gray-500 transition hover:opacity-75'>
								{' '}
								Terms & Conditions{' '}
							</a>
						</li>

						<li>
							<a href='#' className='text-gray-500 transition hover:opacity-75'>
								{' '}
								Privacy Policy{' '}
							</a>
						</li>

						<li>
							<a href='#' className='text-gray-500 transition hover:opacity-75'>
								{' '}
								Cookies{' '}
							</a>
						</li> */}
					</ul>

					<ul className='mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end'>
						<li>
							<a
								href='https://hidaytrahman.github.io/'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:opacity-75'
							>
								<span className='sr-only'>Facebook</span>
								<small>Developed By {'</>'}</small>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
