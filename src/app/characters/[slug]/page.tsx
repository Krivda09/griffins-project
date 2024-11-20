import { getAllCharacters } from '@/lib/characters';
import { Container } from '@/components/container';
import Image from 'next/image';
import { Params } from '@/types/char-params';
import { CharQout } from '@/types/char-qout';
import { endpoint } from '@/lib/endpoint';

export const dynamicParams = false;

export const generateStaticParams = async () => {
	const data = await getAllCharacters();
	return data.map((character: Params) => ({ slug: character.slug }));
};

export const getCharacterBySlug = async (slug: string) => {
	const data = await fetch(`${endpoint}/characters/${slug}`);
	if (!data.ok) {
		throw new Error('Failed to fetch data');
	}
	return data.json();
};

const Page = async ({ params }: { params: Params }) => {
	const { character, characterQout } = await getCharacterBySlug(params.slug);

	return (
		<Container className="flex flex-col gap-5 py-5">
			<div className=" flex flex-col gap-2">
				<h1 className="text-2xl font-semibold capitalize">{character.name}</h1>
				<ul className="flex gap-1 text-sm">
					{character.occupations.map((item: string, id: number) => {
						return (
							<li key={id} className="p-2 text-gray-200 bg-gray-800 rounded-md">
								{item}
							</li>
						);
					})}
				</ul>
			</div>
			<p className="text-sm leading-6">{character.description}</p>
			<ul className="grid gap-2 sm:grid-cols-2">
				{character.images.map((image: string, id: number) => {
					return (
						<li
							key={id}
							className="relative flex overflow-hidden bg-gray-900 rounded-xl">
							<Image
								className=" transition-all duration-500 hover:scale-110 hover:rotate-2"
								src={image}
								width={760}
								height={435}
								alt=""
							/>
						</li>
					);
				})}
			</ul>

			{character.skills && (
				<>
					<h2 className="text-xl font-bold">Power and Scills</h2>
					<ul className="flex flex-wrap gap-1">
						{character.skills.map((item: string) => {
							return (
								<li
									key={item}
									className="flex justify-center flex-grow px-2 py-1 text-orange-400 rounded-full bg-orange-950">
									{item}
								</li>
							);
						})}
					</ul>
				</>
			)}
			{characterQout && (
				<>
					<h2 className="text-xl font-bold">Famous Qouts</h2>
					<ul className="grid gap-5">
						{characterQout.map((item: CharQout, idx: number) => {
							return (
								<li
									key={idx}
									className="p-2 italic text-gray-400 border-l-4 border-green-400 rounded-md">
									{item.qoute}
								</li>
							);
						})}
					</ul>
				</>
			)}
		</Container>
	);
};

export default Page;
