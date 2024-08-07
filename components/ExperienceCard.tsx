import Image from "next/image";
import Link from "next/link";

interface ExperienceCardTypes {
	href: string;
	title: string;
	description: string;
	period: string | null;
	status: string[];
	imgSrc: string;
	industry: string;
}

export default function ExperienceCard({
	href,
	title,
	description,
	period,
	status,
	imgSrc,
	industry,
}: ExperienceCardTypes) {
	return (
		<div className="flex w-full flex-col justify-between overflow-hidden rounded-lg border border-zinc-300 selection:mx-auto group">
			{/* Header + Title + Explanation */}
			<section className=" flex flex-col justify-between p-3 space-y-2">
				<div className="flex justify-between items-start">
					<Image
						src={imgSrc}
						alt={title}
						width={30}
						height={30}
						blurDataURL={imgSrc}
						className="mb-1.5 h-7 w-7"
					/>

					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center space-x-1.5 px-2.5 py-[3px] rounded-md  text-zinc-600 hover:text-zinc-700 hover:bg-zinc-50 cursor-pointer border border-zinc-300 justify-center"
					>
						<p className="text-sm">Visit</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 ml-1 "
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={1.7}
						>
							<title>External Link Icon</title>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
							/>
						</svg>
					</a>
				</div>
				<div className="truncate font-semibold text-zinc-800 text-lg">
					{title}
				</div>

				<div className="text-zinc-800">{description}</div>

				{/* Site Link (Text Only) */}
				<cite className="group not-italic">
					<span className="text-base text-zinc-500/60">
						{href.startsWith("https://www.") ? href.slice(12) : href.slice(8)}
					</span>
				</cite>
			</section>

			<section className="px-3 pb-3">
				<Link
					passHref
					href={`/experiences/${title.toLowerCase().split(" ").join("-")}`}
					className="py-1.5 text-zinc-800 bg-zinc-100 hover:bg-zinc-200/70 border border-zinc-300 rounded-md select-none w-full text-tiny text-center flex items-center space-x-2 justify-center font-medium"
				>
					<p>Read Case Study</p>
				</Link>
			</section>
		</div>
	);
}
