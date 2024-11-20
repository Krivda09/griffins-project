import { Container } from '@/components/container';
import { getQuizQuestion } from '@/lib/quiz';
import { Params } from '@/types';

const Page = async ({ params }: { params: Params }) => {
	const { question } = await getQuizQuestion(params.id);

	return (
		<Container className="flex flex-col gap-5 py-5">
			<h1 className="text-lg font-semibold text-gray-300">{question.title}</h1>
			<div className="text-gray-300">{question.answers}</div>
		</Container>
	);
};

export default Page;
