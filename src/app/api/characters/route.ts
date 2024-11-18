import { NextResponse } from 'next/server';
import characters from '@/data/characters.json';

export const GET = async () => {
	return NextResponse.json(characters.data);
};
