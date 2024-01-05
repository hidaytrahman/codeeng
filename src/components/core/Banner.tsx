import React from 'react';

type BannerPropsTypes = {
	titles: string[];
	text: string;
};

function Banner({ titles, text }: BannerPropsTypes) {
	return (
		<section className='bg-gray-50'>
			<div className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
				<div className='mx-auto max-w-3xl text-center'>
					<h1 className='text-3xl font-extrabold sm:text-5xl'>
						{titles[0]}
						<strong className='font-extrabold text-red-700 sm:block'> {titles[1]}</strong>
					</h1>

					<p className='mt-4 sm:text-l/relaxed'>{text}</p>

					<div className='mt-8 flex flex-wrap justify-center gap-4'>
						<a
							className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
							href='/get-started'
						>
							Get Started
						</a>

						<a
							className='block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
							href='/about'
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Banner;
