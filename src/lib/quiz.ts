import { endpoint } from './endpoint';

export const getRandomQuizQuestion = async () => {
	const data = await fetch(`${endpoint}/quiz/random`, { cache: 'no-store' });

	if (!data.ok) {
		throw new Error('Failed to fetch data');
	}

	return data.json();
};

export const getQuizQuestion = async (id: string) => {
	const data = await fetch(`${endpoint}/quiz/${id}`);

	if (!data.ok) {
		throw new Error('Failed to fetch data');
	}

	return data.json();
};
