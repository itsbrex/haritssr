import type React from "react";

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useInView } from "react-intersection-observer";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

import Footer from "./Footer";
import GlobalNavigation from "./GlobalNavigation";
import { GitHubIcon } from "./Icons";
import GlobalNavigationMobile from "@/components/GlobalNavigationMobile";

// used in sidebar
import { usePathname } from "next/navigation";
import { ExperimentsData } from "data/ExperimentsData";
import Breadcrumbs from "@/components/Breadcrumbs";

interface LayoutToExperimentsType {
	children: React.ReactNode;
	title: string;
	domain: string;
}

export default function LayoutToExperiments({
	children,
	title,
	domain,
}: LayoutToExperimentsType) {
	const lastThreeSegmentRoute = useRouter().asPath;
	const githubRoute = `https://github.com/haritssr/haritssr/blob/main/pages${lastThreeSegmentRoute}.tsx`;
	const image = "/images/hero.jpg";
	const yes = `${title} - Harits Syah`;
	const { ref, inView } = useInView({ rootMargin: "-90px" });

	return (
		<>
			<Head>
				<title>{yes}</title>
				<link rel="icon" href="/Icons/haritssr.svg" />
				<meta name="theme-color" content="#27272a" />
				<meta name="robots" content="follow, index" />
				<meta name="description" content={title} />
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="HarisLab" />
				<meta property="og:description" content={title} />
				<meta property="og:title" content={title} />
				<meta property="og:image" content={image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@haritssr" />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={title} />
				<meta name="twitter:image" content={image} />
				<link rel="manifest" href="/static/favicons/site.webmanifest" />
			</Head>

			<GlobalNavigation />

			<main className="mx-auto flex max-w-5xl sm:-mt-[1px] sm:gap-10 sm:px-5 xl:px-0">
				<div className="grid grid-cols-1 sm:grid-cols-4 min-h-screen max-w-5xl w-full">
					<SideBar domain={domain} />

					{/* Content */}
					<div className="sm:col-span-3 sm:border-t border-r border-b">
						<article className="sm:px-0">
							{/* SubNavigation */}
							<section
								className={`sticky top-0 sm:top-[44.5px] border-b ${
									inView
										? "border-zinc-200"
										: "border-b bg-white/70 saturate-150 backdrop-blur-lg"
								} z-40 bg-white py-2`}
							>
								<div className="mx-auto flex max-w-5xl items-center justify-between px-3 sm:px-3.5">
									<BackToExperiments inView={inView} domain={domain} />
									<PageTitleCenter inView={inView} title={title} />
									<PageSource inView={inView} href={githubRoute} />
								</div>
							</section>

							{/* Header */}
							<div className="px-5">
								<Breadcrumbs />
								<h1
									ref={ref}
									className="z-40 mx-auto mb-2 block h-auto w-full break-words text-left font-bold text-zinc-800 text-3xl mt-10"
								>
									{title}
								</h1>
								{children}
							</div>
						</article>
					</div>
				</div>
			</main>

			<Footer />
			<GlobalNavigationMobile />
		</>
	);
}

const SideBar = ({ domain }: { domain: string }) => {
	//getting a links of experiments under domain as an array
	function getArrayDomain(domain: string) {
		const experiment = ExperimentsData.find((exp) => exp.title === domain);
		return experiment ? experiment.links : [];
	}
	const links = getArrayDomain(domain);

	// getting a "last segment of the url" to match with the "experiment page under domain" for hover coloring logic at sidebar
	const pathname = usePathname();
	const segments = pathname?.split("/") as string[];
	const lastSegment = segments[segments.length - 1];

	return (
		<div className="hidden sm:block sm:col-span-1 border  ">
			<Link
				className="block font-medium px-5 py-2 sticky top-[45px] bg-white border-b"
				href={`/experiments/${domain.toLowerCase().replace(" ", "-")}`}
			>
				{domain}
			</Link>
			<div className="flex flex-col space-y-1 py-5 px-3 sm:max-h-screen sm:overflow-auto">
				{links.map((experimentPage) => {
					// experimentPage = string; e.g. Apple Navbar, Floating Labels
					// experimentPageEdited = a lowercased with "-"; e.g. apple-navbar, floating-labels
					const experimentPageEdited = experimentPage
						.toLowerCase()
						.split(" ")
						.join("-");
					return (
						<Link
							href={`/experiments/${domain
								.toLowerCase()
								.split(" ")
								.join("-")}/${experimentPageEdited}`}
							key={experimentPage}
							className={`${
								lastSegment === experimentPageEdited
									? "text-white bg-action"
									: "text-zinc-800 hover:bg-zinc-200/70 hover:text-zinc-950"
							}  px-2 py-1 rounded-md`}
						>
							{experimentPage}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

const BackToExperiments = ({
	inView,
	domain,
}: { inView: unknown; domain: string }) => {
	return (
		<Link
			passHref
			href={`/experiments/${domain.toLowerCase().replace(" ", "-")}`}
			className={`-ml-1 flex cursor-pointer items-center sm:w-1/4 ${
				inView ? "w-1/2" : "w-1/4"
			}`}
		>
			<span className=" inline-block w-full">
				<span className="group flex items-center">
					<ChevronLeftIcon
						className=" text-blue-500 sm:group-hover:text-[#2563eb]/90 h-5 w-5"
						strokeWidth={2}
					/>
					<span className="-ml-0.5 truncate text-blue-500 sm:group-hover:underline sm:group-hover:text-[#2563eb]/90 text-base">
						{inView ? domain : "Back"}
					</span>
				</span>
			</span>
		</Link>
	);
};

const PageTitleCenter = ({
	title,
	inView,
}: { title: string; inView: unknown }) => {
	return (
		<div className={`sm:1/2 -mr-2 inline ${inView ? "w-0" : "w-1/2"}`}>
			<div className="flex justify-center py-0.5 sm:py-0">
				<div
					className={`truncate text-center font-semibold ${
						inView ? "text-transparent hidden" : "text-zinc-800 block"
					}`}
				>
					{title}
				</div>
			</div>
		</div>
	);
};

const PageSource = ({ href, inView }: { href: string; inView: unknown }) => {
	return (
		<div className={`flex justify-end sm:w-1/4 ${inView ? "w-1/2" : "w-1/4"}`}>
			<cite className="not-italic group">
				<a
					title="This page source code"
					href={href}
					target="_blank"
					rel="noopener noreferrer"
					className="flex w-fit cursor-pointer items-center text-blue-500 hover:text-[#2563eb]/90"
				>
					<span className="mr-2 hidden sm:inline-block text-blue-500 group-hover:text-[#2563eb]/90">
						Source
					</span>{" "}
					<GitHubIcon className="h-5 w-5 cursor-pointer text-blue-500 group-hover:text-[#2563eb]/90" />
				</a>
			</cite>
		</div>
	);
};
