import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/icons/logo.png';
import { Container } from './container';

export const Navigation = () => {
	return (
		<div className="sticky top-0 backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
			<Container className="flex justify-between py-5">
				<Link href={'/'}>
					<Image src={logo} alt="logo" width={70} height={50} />
				</Link>
				<Link
					href={'/quiz'}
					className="flex items-center justify-center gap-1 px-5 font-semibold text-black transition-colors bg-green-400 rounded-md duration-700 hover:bg-green-600">
					Take a Quiz
				</Link>
			</Container>
		</div>
	);
};
