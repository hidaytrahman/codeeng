import Setup from '@/components/features/Setup/Setup';

export default function SetupPage() {
	return (
		<main className='p-4'>
			<h1 className='text-4xl font-bold mt-2'>Setup Guide</h1>
			<hr />

			<div className='my-2'>
				<Setup />
			</div>
		</main>
	);
}
