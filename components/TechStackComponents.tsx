import Image from 'next/image';
import { ClassAttributes, HTMLAttributes } from 'react';

export const TechStackComponent = (
	{
		domain,
		links,
	}: { domain?: string; links?: Array<{ href: string; imgSrc: string; name: string }> },
	props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>
) => {
	return (
		<div {...props} className='h-fit overflow-hidden rounded-md bg-apple-gray6/40 border border-zinc-200'>
			<div className='truncate px-3 py-2 text-tiny font-semibold text-zinc-700 sm:text-base'>
				{domain}	
			</div>
			<div className='space-y-1 px-2 pb-2 pt-0'>
				{links?.map(({ href, imgSrc, name }) => {
					return (
						<a
							key={name}
							title={href}
							href={href}
							target='_blank'
							rel='noreferrer noopener'
							className='group flex w-auto items-center justify-between space-x-2 rounded-md py-1 px-1 hover:border-apple-gray3 border border-zinc-50 sm:px-2'
						>
							<section className='flex items-center space-x-2 overflow-hidden'>
								<Image
									src={imgSrc}
									height={18}
									width={18}
									alt={name}
									className='aspect-auto h-[18px] w-[18px]'
									blurDataURL={imgSrc}
									// placeholder='blur'
								/>
								<div className='truncate text-zinc-500 group-hover:text-zinc-700'>{name}</div>
							</section>
							{/* External Link Icon */}
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='hidden h-4 w-4 text-apple-gray6/40 group-hover:text-zinc-800 sm:block'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={1.5}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
								/>
							</svg>
						</a>
					);
				})}
			</div>
		</div>
	);
};
