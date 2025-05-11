import { Box, Button, Container, Divider, Typography } from '@mui/material';

export default function SetupGithubPage() {
	return (
		<Container>
		<Box>
			<Typography variant='h3' component="h1">Setup Guide</Typography>
			<Divider sx={{ my: 1 }} />

			<div className='my-2'>
				 <Button variant="contained">Hello world</Button>
			</div>
		</Box>
		</Container>
	);
}
