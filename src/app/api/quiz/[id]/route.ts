import { Params } from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import questions from '@/data/quiz.json';

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
	try {
		const question = questions.data.find((item) => item.id === params.id);

		if (!question) {
			return new NextResponse('not found', { status: 404 });
		}

		const { correct_answer, ...rest } = question;

		if (correct_answer) {
			console.log('OK');
		}

		return NextResponse.json({
			question: rest,
		});
	} catch (error) {
		console.log(error);
		return new NextResponse('Internal server error', { status: 500 });
	}
};
