import { ReactNode } from 'react';

type ContainerProps = {
	children: ReactNode;
	className: string;
};
export const Container = ({ children, className }: ContainerProps) => {
	return (
		<div className={`px-5 w-full max-w-screen-md m-auto ${className}`}>
			{children}
		</div>
	);
};
