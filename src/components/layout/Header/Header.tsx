'use client';

import { useEffect, useMemo, useState } from 'react';
import useScreenClass from '../../../hooks/useScreenClass';
import { mainNavList } from './data';
import Link from 'next/link';
export default function Header() {
	const getResponsiveClass = useScreenClass();

	const [visible, setVisible] = useState(false);

	useEffect(() => {
		if (getResponsiveClass() === 'md' || getResponsiveClass() === 'sm') {
			setVisible(false);
		}
	}, [getResponsiveClass]);

	const isMobile = useMemo(
		() => getResponsiveClass() === 'md' || getResponsiveClass() === 'sm',
		[getResponsiveClass]
	);

	const handleToggle = () => {
		setVisible(!visible);
	};

	return (
		<>
			<header className='bg-white'>
				<div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
					<div className='flex h-16 items-center justify-between'>
						<div className='flex-1 md:flex md:items-center md:gap-12'>
							<a className='block text-teal-600' href='/'>
								<span className='sr-only'>Home</span>
								Codeeng {'</>'}
							</a>
						</div>

						<div className='md:flex md:items-center md:gap-12'>
							<nav aria-label='Global' className={`md:block`}>
								<ul className='flex items-center gap-6 text-sm'>
									{mainNavList.map((nav, index) => (
										<li key={index}>
											<Link
												href={nav.url}
												className='text-gray-500 transition hover:text-gray-500/75'
											>
												{nav.name}
											</Link>
										</li>
									))}
								</ul>
							</nav>

							{/* <div className='flex items-center gap-4'>
								<div className='block md:hidden'>
									<button
										className='rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75'
										onClick={handleToggle}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-5 w-5'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth='2'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M4 6h16M4 12h16M4 18h16'
											/>
										</svg>
									</button>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</header>

			<div className='relative isolate overflow-hidden bg-gray-500 py-24 sm:py-10'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl lg:mx-0'>
						<h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Code Environments</h2>
						<p className='mt-6 text-lg leading-8 text-gray-300'>
							Code environment basic and required setup for your project or new machine.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
