import Link from 'next/link';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';
import { getAllCharacters } from '@/lib/characters';
import { Container } from '@/components/container';

export default async function Home() {
	const data = await getAllCharacters();
	return (
		<main className="flex items-center justify-center h-screen">
			<Container className="grid grid-cols-2 gap-1 py-5 md:grid-cols-3 lg:grid-cols-4">
				{data?.map(
					(item: {
						slug: string;
						name: Key | null | undefined;
						avatar: string | StaticImport;
					}) => {
						return (
							<Link
								href={`/characters/${item.slug}`}
								key={item.name}
								className="overflow-hidden rounded-md">
								<Image
									src={item.avatar}
									alt=""
									width={500}
									height={500}
									className="transition-all duration-500 hover:scale-110 hover:rotate-2"
								/>
							</Link>
						);
					}
				)}
			</Container>
		</main>
	);
}
