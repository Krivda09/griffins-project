import { Container } from '@/components/container';
import { getQuizQuestion } from '@/lib/quiz';
import { Params } from '@/types';
import { Answer } from '@/components/answer';
import React from 'react';

const Page = async ({ params }: { params: Params }) => {
	const { id } = await params;
	const { question } = await getQuizQuestion(id);

	return (
		<Container className="flex flex-col gap-5 py-5">
			<h1 className="text-lg font-semibold text-gray-300">{question.title}</h1>
			<Answer answers={question.answers} questionId={id} />
		</Container>
	);
};

export default Page;
