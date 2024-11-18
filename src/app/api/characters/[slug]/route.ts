import { NextRequest, NextResponse } from 'next/server';
import characters from '@/data/characters.json';
import qouts from '@/data/qouts.json';

type Params = {
	slug: string;
};

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
	try {
		const character = characters.data.find((item) => item.slug === params.slug);
		if (!character) {
			return new NextResponse('not found', { status: 404 });
		}
		const characterQout = qouts.data.filter(
			(item) => item.character_id === character.id
		);
		return NextResponse.json({
			character,
			characterQout: characterQout.length > 0 ? characterQout : null,
		});
	} catch (error) {
		console.log(error);
		return new NextResponse('Internal server error', { status: 500 });
	}
};
