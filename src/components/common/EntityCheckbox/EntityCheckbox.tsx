import React from 'react';

type EntityCheckboxProps = {
	label: string;
	avatar: string;
	checked: boolean;
};

export default function EntityCheckbox({ label, checked, avatar }: EntityCheckboxProps) {
	return (
		<section className='w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600'>
			<div className='flex items-center ps-3'>
				<input
					id='react-checkbox'
					type='checkbox'
					value=''
					// checked={checked}
					defaultChecked={checked}
					className='w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500'
				/>
				<label
					htmlFor='react-checkbox'
					className='ml-7 w-full flex items-center gap-3 capitalize py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
				>
					<img className='h-10' src={avatar} alt='label' />
					{label}
				</label>
			</div>
		</section>
	);
}
