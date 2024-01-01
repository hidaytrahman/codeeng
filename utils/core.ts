// Generates a random alphanumeric ID of a given length
export function generateRandomId(length: number) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let id = '';

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		id += characters.charAt(randomIndex);
	}

	return id;
}
