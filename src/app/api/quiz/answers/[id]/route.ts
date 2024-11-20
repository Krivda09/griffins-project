import { Params } from '@/types';
import { NextRequest, NextResponse } from 'next/server';
import questions from '@/data/quiz.json';

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
	try {
		const question = questions.data.find((item) => item.id === params.id);

		if (!question) {
			return new NextResponse('not found', { status: 404 });
		}

		const { correct_answer } = question;

		const filteredQuestions = questions.data.filter(
			(item) => item.id !== params.id
		);

		const random = Math.floor(Math.random() * filteredQuestions.length);

		return NextResponse.json({
			correct: correct_answer,
			random: filteredQuestions[random].id,
		});
	} catch (error) {
		console.log(error);
		return new NextResponse('Internal server error', { status: 500 });
	}
};
