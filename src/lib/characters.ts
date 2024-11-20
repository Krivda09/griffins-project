import { endpoint } from './endpoint';

export const getAllCharacters = async () => {
	const data = await fetch(`${endpoint}/characters`);
	if (!data.ok) {
		throw new Error('Failed to fetch data!');
	}
	return data.json();
};
