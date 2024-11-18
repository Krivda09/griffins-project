export const getAllCharacters = async () => {
	const endpoint = 'http://localhost:3000/api/';
	const data = await fetch(`${endpoint}/characters`);
	if (!data.ok) {
		throw new Error('Failed to fetch data!');
	}
	return data.json();
};
