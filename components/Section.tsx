const Section = ({ name }: { name: string }) => {
	return (
		<h2 className="mb-4 text-xl  font-semibold text-zinc-800 dark:text-zinc-200">
			{name}
		</h2>
	);
};

export default Section;
