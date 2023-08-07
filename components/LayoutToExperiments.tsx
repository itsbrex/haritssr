import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";
import GlobalHead from "./GlobalHead";
import { GitHubIcon } from "./Icons";

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
        <link rel="icon" href="/Icons/haritssr.jpg" />
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

      <GlobalHead />

      <main className="mx-auto flex max-w-5xl sm:mt-10 sm:gap-10 sm:px-5 xl:px-0">
        <article className="mx-auto min-h-screen w-full max-w-4xl sm:px-0">
          {/* Navigation */}
          <section
            className={`sticky -top-0 sm:top-[44px] border-b ${
              inView
                ? "border-zinc-300"
                : "border-b sm:bg-apple-gray6/90 sm:saturate-150 sm:backdrop-blur-lg"
            } z-40 mb-5 bg-white py-2.5 sm:border-none`}
          >
            <div className="mx-auto flex max-w-5xl items-center justify-between px-3 sm:px-3.5">
              <BackToExperiments inView={inView} domain={domain} />
              <PageTitleCenter inView={inView} title={title} />
              <PageSource inView={inView} href={githubRoute} />
            </div>
          </section>

          {/* Header */}
          <header className="px-5 sm:px-0">
            <h1
              ref={ref}
              className="z-40 mx-auto mb-2 block h-auto w-full break-words text-left text-3xl font-bold text-zinc-800 sm:text-4xl mt-10"
            >
              {title}
            </h1>
            {children}
          </header>
        </article>
      </main>

      <Footer />
    </>
  );
}
const BackToExperiments = ({
  inView,
  domain,
}: {
  inView: any;
  domain: string;
}) => {
  return (
    <Link
      passHref
      href={`/experiments/${domain.toLowerCase().replace(" ", "-")}`}
      className={`-ml-1 flex w-1/3 cursor-pointer items-center sm:w-1/6 ${
        inView ? "w-1/3 sm:-ml-8" : "w-1/4"
      }`}
    >
      <span className=" inline-block w-full">
        <span className="group flex items-center">
          <ChevronLeftIcon
            className=" text-zinc-800 sm:group-hover:text-zinc-400 h-5 w-5"
            strokeWidth={2}
          />
          <span className="-ml-0.5 block truncate text-zinc-800 sm:group-hover:text-zinc-400">
            {domain}
          </span>
        </span>
      </span>
    </Link>
  );
};

const PageTitleCenter = ({ title, inView }: { title: string; inView: any }) => {
  return (
    <div className={`sm:2/4 -mr-2 inline ${inView ? "w-1/3" : "w-1/2"}`}>
      <div className="flex justify-center py-0.5">
        <div
          className={`truncate text-center font-semibold ${
            inView ? "text-transparent" : "text-zinc-800"
          }`}
        >
          {title}
        </div>
      </div>
    </div>
  );
};

const PageSource = ({ href, inView }: { href: string; inView: any }) => {
  return (
    <div
      className={`flex justify-end sm:w-1/6 ${
        inView ? "w-1/3 sm:-mr-3.5" : "w-1/4"
      }`}
    >
      <cite className="not-italic">
        <a
          title="This page source code"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-fit cursor-pointer items-center text-zinc-800 hover:text-zinc-500`}
        >
          <span className="mr-2 hidden sm:inline-block">Source</span>{" "}
          <GitHubIcon className="h-5 w-5 cursor-pointer" />
        </a>
      </cite>
    </div>
  );
};
