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
  hrefCaseStudy: string;
}

export default function ExperienceCard({
  href,
  title,
  description,
  period,
  status,
  imgSrc,
  industry,
  hrefCaseStudy,
}: ExperienceCardTypes) {
  return (
    <div className="flex w-full flex-col justify-between overflow-hidden rounded-lg border border-zinc-400/70 selection:mx-auto hover:ring-2 hover:ring-blue-600/70">
      <section className=" flex flex-col justify-between  bg-white p-3 space-y-3">
        <div className="mb-3 flex items-center justify-between space-x-2">
          <div className="flex items-center space-x-2">
            <Image
              src={imgSrc}
              alt={title}
              width="24"
              height="24"
              blurDataURL={imgSrc}
              className="aspect-auto h-6 w-6"
              // placeholder='blur'
            />
            <p className="truncate font-semibold text-zinc-700 text-xl">
              {title}
            </p>
          </div>
        </div>

        <div className="text-zinc-700">{description}</div>

        <div className="text-zinc-500">
          {href.substring(0, 12) === `https://www.`
            ? href.slice(12, href.length)
            : href}
        </div>

        <section className="flex items-center space-x-3">
          <a
            href={`https://${href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-zinc-700 pt-1 pb-[3px] rounded space-x-1 bg-zinc-700 hover:bg-zinc-800 text-white w-1/2 group"
          >
            <div className="text-tiny">Visit</div>
            {/* External Link Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <Link
            passHref
            href={`/case-studies/${hrefCaseStudy}`}
            className="bg-white border border-zinc-400/70 pt-1 pb-[3px] hover:bg-apple-gray6 hover:text-zinc-800 rounded text-zinc-600 w-1/2 flex items-center justify-center group"
          >
            <div className="text-tiny">Details</div>
            {/* Chevron Right Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Link>
        </section>
      </section>
      <section className="flex flex-col space-y-1.5 border-t border-zinc-400/70 bg-gradient-to-b from-zinc-50 to-zinc-100/80 px-3 pt-3 pb-2.5 text-zinc-600 sm:text-sm">
        <article className="flex items-center justify-between">
          <div className="flex w-1/3 items-center justify-between">
            <div className="font-medium">Period</div>
            <div>:</div>
          </div>
          <div>{period}</div>
        </article>
        <article className="flex items-center justify-between">
          <div className="flex w-1/3 items-center justify-between">
            <div className="font-medium">Status</div>
            <div>:</div>
          </div>
          <div>{status[0]}</div>
        </article>
        <article className="flex items-center justify-between">
          <div className="flex w-1/3 items-center justify-between">
            <div className="font-medium">Industry</div>
            <div>:</div>
          </div>
          <div>{industry}</div>
        </article>
      </section>
    </div>
  );
}