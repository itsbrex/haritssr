import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function InternalLink({
	name,
	href,
}: { name: string; href: string }) {
	return (
		<Link
			passHref
			href={href}
			className="group inline-flex w-fit cursor-pointer items-center justify-start py-0.5 text-action hover:text-[#2563eb]/80 dark:hover:text-blue-400 hover:underline dark:text-blue-500"
		>
			<p className="flex items-center">
				{name}
				<ChevronRightIcon
					className="h-4 w-4 text-action dark:text-blue-500 -mb-[1.5px] group-hover:text-[#2563eb]/80  group-hover:text-blue-400"
					strokeWidth={2.25}
				/>
			</p>
		</Link>
	);
}
