"use client";

import ExternalLink from "@/components/ExternalLink";
import React, { Suspense } from "react";
import { PageTitle } from "@/components/SubTitle";
import * as Toggle from "@radix-ui/react-toggle";
import { useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import * as Tabs from "@radix-ui/react-tabs";
import * as Toast from "@radix-ui/react-toast";
import Section from "@/components/Section";
import InternalLink from "@/components/InternalLink";
import * as Tooltip from "@radix-ui/react-tooltip";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import ExplanationList from "@/components/ExplanationList";
import BackButton from "@/components/BackButton";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function DesignSystem() {
	const [pressed, setPressed] = useState(false);

	// Toast
	// -----------------------------------------------------
	const [open, setOpen] = React.useState(false);
	const eventDateRef = React.useRef(new Date());
	const timerRef = React.useRef(0);
	React.useEffect(() => {
		return () => clearTimeout(timerRef.current);
	}, []);

	function oneWeekAway() {
		const now = new Date();
		const inOneWeek = now.setDate(now.getDate() + 7);
		return new Date(inOneWeek);
	}
	// -----------------------------------------------------

	const [loading, setLoading] = useState<boolean>(false);
	function handleClick() {
		// setTimeout(() => {
		// 	setLoading(false);
		// }, 2000);
		setLoading(!loading);
	}
	return (
		<PageTitle
			title="Pure Design System"
			description={
				<>
					This design system used in{" "}
					<ExternalLink name="haritssr.com" href="haritssr.com" />,
					<ExternalLink name="Haris Studio" href="harisstudio.com" /> and{" "}
					<ExternalLink name="Haris Lab" href="harislab.com" />
				</>
			}
		>
			<Section name="Design Principles" />
			<ExplanationList>
				<li>
					Design System is a set of specific rules of design principles or
					opiniated design that transcendence to the user interface that affect
					user experience as a whole.
				</li>
				<li>
					Pure Design System mimicing the traditional (most cases) environment
					when student solving math and physis problem, like in paper, pencil,
					white board, pencil cases, etc, especially in Analysis (MAKI) process.
				</li>
				<li>Why called &quot;Pure&quot;?</li>
				<ul className="block list-outside list-disc space-y-1 pl-4">
					<li>Well, honestly, I have no idea on naming.</li>
					<li>
						Blue, black, gray, and white seems pure and minimalist color to me,
						and it actually my four favourite colors.
					</li>
					<li>
						The word &quot;Pure&quot; also not a long word so it can fit on the
						TabBars (bottom navigation on mobile-like apps) and top navigation
						bar at desktop).
					</li>
				</ul>
				<li>
					Strive to only using basic color and UI components provided in design
					system to accelerate development, maintaining consistency, and
					familiarity.
				</li>
				<li>This design system is accessible at mobile and desktop web.</li>
				<li>
					You can see the component code{" "}
					<ExternalLink
						href="https://github.com/haritssr/haritssr/tree/main/components"
						name="here"
					/>
				</li>
			</ExplanationList>
			<div className="mb-10" />
			<Section name="UI Components" />
			<section className="grid grid-cols-1 gap-5 sm:grid-cols-2">
				<Box title="Toggle">
					<Toggle.Root
						onPressedChange={() => {
							setPressed(!pressed);
						}}
						pressed={pressed}
						className=" rounded-md border border-zinc-400 bg-white px-3 py-1 text-zinc-800 data-[state=on]:bg-blue-50 hover:bg-zinc-50 data-[state=on]:border-blue-600 data-[state=on]:text-action"
					>
						{pressed ? "Toggle : ON" : "Toggle : OFF"}
					</Toggle.Root>
				</Box>
				<Box title="Switch">
					<Switch.Root
						defaultChecked
						id="s1"
						className="block w-[43px] p-1 rounded-full rdx-state-unchecked:bg-zinc-600 rdx-state-checked:bg-blue-600"
					>
						<Switch.Thumb className="block h-4 w-4 rounded-full will-change-transform rdx-state-checked:translate-x-[18px] shadow bg-white duration-100" />
					</Switch.Root>
				</Box>
				<Box title="Accordion">
					<Accordion.Root type="multiple" className="w-[200px]">
						<Accordion.Item value="item-1">
							<Accordion.Header className="group">
								<Accordion.Trigger className="flex w-full items-center justify-between rounded-t-md rounded-b-md border border-zinc-400 bg-zinc-200 px-2.5  py-2 text-left text-tiny font-medium text-zinc-800 hover:bg-zinc-100 group-rdx-state-open:rounded-b-none group-rdx-state-open:bg-zinc-100">
									<div>Title</div>
									<ChevronDownIcon className="h-5 w-5 text-zinc-800 group-rdx-state-open:rotate-180 duration-200" />
								</Accordion.Trigger>
							</Accordion.Header>

							<Accordion.Content className="duration-300 rounded-b-md border-b border-l border-r border-zinc-400 bg-white p-2.5 text-tiny text-zinc-800 w-[200px]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
								reiciendis animi, error in rerum modi.
							</Accordion.Content>
						</Accordion.Item>
					</Accordion.Root>
				</Box>
				<Box title="Checkbox">
					<div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:items-center">
						<CheckboxPrimitive.Root
							className="flex h-6 w-6 items-center justify-center rounded-md border border-zinc-400 bg-white hover:bg-zinc-100 rdx-state-checked:bg-action rdx-state-checked:border-action rdx-state-checked:shadow-blue-300 shadow hover:border-zinc-500"
							// defaultChecked
							id="c1"
						>
							<CheckboxPrimitive.Indicator className={`text-white`}>
								<CheckIcon className={`h-5 w-5 `} />
							</CheckboxPrimitive.Indicator>
						</CheckboxPrimitive.Root>
						<label className="select-none text-zinc-800" htmlFor="c1">
							Accept terms and conditions.
						</label>
					</div>
				</Box>
				<Box title="Popover">
					<Popover.Root>
						<Popover.Trigger>
							<div className="w-auto rounded px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white active:ring-offset-1 active:ring-1 active:ring-blue-400">
								Show Popover
							</div>
						</Popover.Trigger>

						{/* <Popover.Anchor /> */}
						<Popover.Content
							className="rounded-md border border-zinc-300 bg-white w-[80vw] shadow-xl max-w-sm text-zinc-800 p-4"
							sideOffset={10}
							side="bottom"
						>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
							vel fugit ipsum est, perferendis animi accusantium molestiae
							impedit minima ea debitis.
							<Popover.Close />
							<Popover.Arrow className="fill-zinc-300" />
						</Popover.Content>
					</Popover.Root>
				</Box>
				<Box title="Table">
					<table className="w-[200px] sm:w-[300px] border border-zinc-300 divide-y divide-zinc-300 text-zinc-800">
						<thead>
							<tr className="bg-zinc-50 border border-zinc-300 divide-x divide-zinc-300">
								<th className="font-medium">Title</th>
								<th className="font-medium">Title</th>
								<th className="font-medium">Title</th>
							</tr>
						</thead>
						<tbody>
							<tr className="divide-x divide-zinc-300 border-b border">
								<td className="text-center">Data</td>
								<td className="text-center">Data</td>
								<td className="text-center">Data</td>
							</tr>
							<tr className="divide-x divide-zinc-300 border-b border">
								<td className="text-center">Data</td>
								<td className="text-center">Data</td>
								<td className="text-center">Data</td>
							</tr>
						</tbody>
					</table>
				</Box>
				<Box title="Tabs">
					<Tabs.Root
						className="flex flex-col w-full max-w-[300px]"
						defaultValue="tab1"
					>
						<Tabs.List
							className="shrink-0 flex bg-zinc-100 rounded-lg p-1 space-x-1"
							aria-label="Manage your account"
						>
							<Tabs.Trigger
								className="bg-white py-1 flex-1 flex items-center justify-center select-none data-[state=active]:text-zinc-800 data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:shadow outline-none cursor-pointer rounded-md hover:bg-zinc-200/80 font-medium text-zinc-500  border data-[state=active]:border-zinc-300 hover:border-zinc-300 border-transparent"
								value="tab1"
							>
								Account
							</Tabs.Trigger>
							<Tabs.Trigger
								className="bg-white py-1 flex-1 flex items-center justify-center select-none  data-[state=active]:bg-white data-[state=active]:focus:relative data-[state=active]:shadow outline-none cursor-pointer rounded-md hover:bg-zinc-200/80 font-medium text-zinc-500 data-[state=active]:text-zinc-800 border data-[state=active]:border-zinc-300 hover:border-zinc-300 border-transparent"
								value="tab2"
							>
								Password
							</Tabs.Trigger>
						</Tabs.List>
						<Tabs.Content
							className="grow p-5 mt-2 bg-white rounded-md outline-none border border-zinc-200"
							value="tab1"
						>
							<div className="">
								Account description. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ut molestias veritatis ullam quae rem quis
								aliquam, accusantium debitis sint praesentium.
							</div>
						</Tabs.Content>
						<Tabs.Content
							className="grow p-5 mt-2 bg-white rounded-md outline-none border border-zinc-200"
							value="tab2"
						>
							<div className="">
								Password description. Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Ut molestias veritatis ullam quae rem quis
								aliquam, accusantium debitis sint praesentium.
							</div>
						</Tabs.Content>
					</Tabs.Root>
				</Box>
				<Box title="Toast">
					<Toast.Provider swipeDirection="right">
						<button
							className="text-white bg-action rounded px-3 py-1.5 hover:bg-blue-700 active:ring-offset-1 active:ring-1 active:ring-blue-400"
							onClick={() => {
								setOpen(false);
								window.clearTimeout(timerRef.current);
								timerRef.current = window.setTimeout(() => {
									eventDateRef.current = oneWeekAway();
									setOpen(true);
								}, 100);
							}}
						>
							Show Toast
						</button>

						<Toast.Root
							className="border border-zinc-300 bg-white/70 saturate-150 backdrop-blur-md rounded-lg py-3 pl-4 pr-6 grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut shadow-xl"
							open={open}
							onOpenChange={setOpen}
						>
							<div className="">
								<Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px]">
									Hai, I am Toast!
								</Toast.Title>
								<Toast.Description asChild>
									<div className="[grid-area:_description] m-0 text-zinc-500 text-[13px] leading-[1.3]">
										Thanks for clicking me!
									</div>
								</Toast.Description>
							</div>
							<Toast.Close className="text-action hover:text-blue-400">
								OK
							</Toast.Close>
						</Toast.Root>
						<Toast.Viewport className="p-3 sm:p-6 fixed bottom-0 right-0 flex flex-col gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
					</Toast.Provider>
				</Box>
				<Box title="Internal Link">
					<InternalLink href="/" name="Internal Link" />
				</Box>
				<Box title="External Link">
					<ExternalLink href="https://www.harislab.com" name="External Link" />
				</Box>
				<Box title="Tooltip">
					<Tooltip.Provider>
						<Tooltip.Root>
							<div className="flex space-x-1">
								<div className="text-zinc-700">Tooltip</div>
								<Tooltip.Trigger className="flex items-center rounded px-1 py-0.5 hover:bg-zinc-100 active:ring-1 active:ring-zinc-700">
									<ExclamationCircleIcon
										className="h-4 w-4 text-zinc-600 hover:text-zinc-700"
										strokeWidth={2}
									/>
								</Tooltip.Trigger>
								<Tooltip.Content
									side="top"
									align="center"
									className="rounded-md bg-zinc-700 px-2.5 py-1.5 text-white shadow-xl"
								>
									<div>Hey, I am Tooltip!</div>
									<Tooltip.Arrow
										offset={5}
										width={10}
										height={5}
										className="fill-[#3F3F46]"
									/>
								</Tooltip.Content>
							</div>
						</Tooltip.Root>
					</Tooltip.Provider>
				</Box>
				<Box title="Button: Primary">
					<button className="px-3 py-1 bg-action text-white hover:bg-blue-700 rounded active:ring-1 active:ring-offset-1 active:ring-blue-400 select-none">
						Button
					</button>
				</Box>
				<Box title="Button: Loading">
					<button
						className="px-3 py-1 bg-action text-white hover:bg-blue-700 rounded active:ring-1 active:ring-offset-1 active:ring-blue-400 select-none"
						onClick={handleClick}
					>
						{loading === true ? "Loading..." : "Button"}
					</button>
				</Box>
				<Box title="Button: Secondary">
					<button className="px-3 py-1 bg-zinc-100 border border-zinc-300 text-zinc-800 font-medium hover:bg-zinc-200/70 rounded active:ring-1 active:ring-offset-1 active:ring-zinc-500 select-none">
						Button
					</button>
				</Box>
				<Box title="Button: Disabled">
					<button
						className="px-3 py-1 bg-zinc-100 text-zinc-400 font-medium cursor-not-allowed rounded select-none"
						disabled
					>
						Button
					</button>
				</Box>
				<Box title="Main Colors">
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
						<div className="|">
							<div className="h-20 w-20 rounded bg-action" />
							<div className="text-zinc-500">#2563eb</div>
						</div>
						<div className="">
							<div className="h-20 w-20 rounded bg-zinc-800" />
							<div className="text-zinc-500">#27272a</div>
						</div>
						<div className="">
							<div className="h-20 w-20 rounded bg-white border" />
							<div className="text-zinc-500">#fff</div>
						</div>
					</div>
				</Box>
				<Box title="Hierachical Colors">
					<div className="grid grid-cols-4 gap-5">
						<div className="h-10 w-10 rounded bg-white border" />
						<div className="h-10 w-10 rounded bg-zinc-50 border" />
						<div className="h-10 w-10 rounded bg-zinc-100" />
						<div className="h-10 w-10 rounded bg-zinc-200" />
						<div className="h-10 w-10 rounded bg-zinc-300" />
						<div className="h-10 w-10 rounded bg-zinc-400" />
						<div className="h-10 w-10 rounded bg-zinc-500" />
						<div className="h-10 w-10 rounded bg-zinc-600" />
						<div className="h-10 w-10 rounded bg-zinc-700" />
						<div className="h-10 w-10 rounded bg-zinc-800" />
						<div className="h-10 w-10 rounded bg-zinc-900" />
						<div className="h-10 w-10 rounded bg-black" />
					</div>
				</Box>
				<Box title="Input: Text">
					<input
						type="text"
						className="shadow border border-zinc-300"
						placeholder="Type something..."
					/>
				</Box>
				<Box title="Input: Search">
					<input
						type="search"
						className="shadow border border-zinc-300"
						placeholder="Search"
					/>
				</Box>
				<Box title="Input: Number">
					<input
						type="number"
						className="shadow border border-zinc-300"
						placeholder="0"
					/>
				</Box>
				<Box title="Box">
					<div className="border border-zinc-400/50 rounded overflow-hidden w-[200px] sm:w-[300px]">
						<div className="bg-zinc-50 px-3 py-2 border-b border-zinc-400/50 text-zinc-800 select-none font-medium">
							Title
						</div>
						<div className="h-32 p-5 flex items-center justify-center">
							Content
						</div>
					</div>
				</Box>
				<Box title="Text Area">
					<textarea
						placeholder="Write something"
						className="border border-zinc-300 p-2 focus:outline-1 focus:outline-action rounded-md w-[200px] sm:w-[300px]"
					/>
				</Box>
				<Box title="Breadcrumbs">
					<span className="text-zinc-500">/main/trunk/leaf</span>
				</Box>
				<Box title="Back Button">
					<BackButton href="/" name="Previous Page" />
				</Box>
				<Box title="Modal">
					<Dialog.Root>
						<Dialog.Trigger asChild>
							<button className="px-3 py-1 bg-zinc-100 hover:bg-zinc-200/70 border border-zinc-300 text-zinc-800 font-medium rounded active:ring-1 active:ring-offset-1 active:ring-zinc-500 select-none">
								Open Modal
							</button>
						</Dialog.Trigger>
						<Dialog.Portal>
							<Dialog.Overlay className="bg-blackA9 fixed inset-0" />
							<Dialog.Content className="fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md bg-white p-[25px] shadow-lg border border-zinc-300 focus:outline-none">
								<Dialog.Title className="text-zinc-800 text-base font-medium">
									Title
								</Dialog.Title>
								<Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
									Description
								</Dialog.Description>
								<div className="h-24 flex items-center justify-center">
									Some content
								</div>
								<div className="mt-[25px] flex justify-end space-x-2	">
									<Dialog.Close asChild>
										<button className="px-3 py-1 bg-zinc-100 border border-zinc-300 text-zinc-800 font-medium hover:bg-zinc-200/70 rounded active:ring-1 active:ring-offset-1 active:ring-zinc-500 select-none">
											Action
										</button>
									</Dialog.Close>
									<Dialog.Close asChild>
										<button className="px-3 py-1 bg-action text-white hover:bg-blue-700 rounded active:ring-1 active:ring-offset-1 active:ring-blue-400 select-none">
											Action
										</button>
									</Dialog.Close>
								</div>
								<Dialog.Close asChild>
									<button
										className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
										aria-label="Close"
									>
										<Cross2Icon />
									</button>
								</Dialog.Close>
							</Dialog.Content>
						</Dialog.Portal>
					</Dialog.Root>
				</Box>
			</section>
			<div className="mt-10" />
			<Section name="Figma Design" />
			<Suspense fallback={`"Loading...`}>
				<div className="mt-5 space-y-20">
					<iframe
						className="border w-full min-h-screen"
						width="800"
						height="450"
						src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FmhfH2JaaCDzRSL71XcSnUw%2FHaris-Lab%3Ftype%3Ddesign%26node-id%3D1416%253A236%26mode%3Ddesign%26t%3DwxLQxcZHLYNHFvrj-1"
						allowFullScreen
					/>
				</div>
			</Suspense>
		</PageTitle>
	);
}

function Box({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<div className="border border-zinc-400/50 rounded overflow-hidden">
			<div className="bg-zinc-50 px-3 py-2 border-b border-zinc-400/50 text-zinc-800 select-none font-medium">
				{title}
			</div>
			<div className="h-72 p-5 flex items-center justify-center">
				<div>{children}</div>
			</div>
		</div>
	);
}
