'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import cn from 'classnames';
import { FiRepeat } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { MdNearbyError } from 'react-icons/md';
import { AnswerProps } from '@/types';

export const Answer = ({ answers, questionId }: AnswerProps) => {
	const [selected, setSelected] = useState(null);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState(null);

	useEffect(() => {
		let subscribed = true;
		if (selected) {
			setLoading(true);
			fetch(`/api/quiz/answers/${questionId}`)
				.then((res) => res.json())
				.then((data) => {
					setLoading(false);
					if (subscribed) {
						setData(data);
					}
				});
		}
		return () => {
			console.log('canselled!');
			subscribed = false;
		};
	}, [questionId, selected]);

	return (
		<>
			<ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
				{answers.map((item) => {
					const isLoading = selected === item && loading;
					const isWrong =
						selected === item && data && data?.correct !== selected;
					const isCorrect = data?.correct === item;
					return (
						<li key={item}>
							<button
								disabled={data || loading}
								onClick={() => setSelected(item)}
								className={cn(
									'p-2 rounded-md items-center justify-between w-full flex text-sm font-semibold disabled:cursor-not-allowed transition-all',
									isLoading && 'animate-pulse',
									isWrong ? 'bg-red-700' : 'bg-slate-800',
									isCorrect && 'outline text-green-500'
								)}>
								{item}
								{isCorrect && <FaCheck />}
								{isWrong && <MdNearbyError />}
							</button>
						</li>
					);
				})}
			</ul>
			{data?.random && (
				<Link
					href={`/quiz/${data.random}`}
					className="flex items-center gap-1 text-blue-400">
					<FiRepeat className="mt-1" />
					Do it Again!
				</Link>
			)}
		</>
	);
};
