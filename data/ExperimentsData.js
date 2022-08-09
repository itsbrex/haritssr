// The way this data works is under topic is always one level deep of content, no second level and so on.
// You can't using '-' in {name: 'Can't using '-' here'}, or the url will be like this '---'
// The system will automatically adding '-' to space inside name
// It is used in all experiments routes, for displaying and routing
// Every pages should be .tsx extentions, if not, <source/> in <LayoutToExperiments/> won't work

export const ExperimentsData = [
  {
    id: 1,
    title: 'Tailwind CSS',
    logoSrc: '/techIcons/tailwindcss.png',
    description: 'For styling web pages',
    links: [
      { name: 'Position' },
      { name: 'Apple NavBar' },
      { name: 'Blurry' },
      { name: 'Dark Mode' },
      { name: 'Floating Labels' },
      { name: 'Glowing Background' },
      { name: 'Grid' },
      { name: 'PlanetScale NavBar' },
      { name: 'Sidebar' },
      { name: 'YouTube Thumbnail' },
      { name: 'Newspaper' },
      { name: 'Centering Div' },
      { name: 'Snap Scrolling' },
    ],
  },
  {
    id: 2,
    title: 'React',
    logoSrc: '/techIcons/reactjs.ico',
    description: 'For manipulating user interface',
    links: [
      { name: 'useState Form' },
      { name: 'useEffect Title' },
      { name: 'Object State Form' },
      { name: 'Submit Form' },
      { name: 'Generic TypeScript' },
      { name: 'Searchable Product Data' },
      { name: 'Search Table' },
      { name: 'Search Books' },
      { name: 'Search Interpol' },
      { name: 'Functional Props' },
      { name: 'TodoList useState' },
      { name: 'TodoList useReducer' },
      { name: 'useState Draggable Box' },
      { name: 'useContext Dark Mode' },
      { name: 'Reacting To Input' },
      { name: 'Edit Profile' },
    ],
  },
  {
    id: 3,
    title: 'Nextjs',
    logoSrc: '/techIcons/nextjs.ico',
    description: 'For building web pages',
    links: [
      { name: 'Image Components' },
      { name: 'Router' },
      { name: 'Dynamic Pages' },
      { name: 'SWR' },
      { name: 'Articles' },
      { name: 'Students' },
      { name: 'Posts' },
    ],
  },
  {
    id: 4,
    title: 'Browser',
    logoSrc: '/techIcons/chrome.svg',
    description: 'Browser built-in utilities',
    links: [
      { name: 'Clock' },
      { name: 'Number game' },
      { name: 'Inputs' },
      { name: 'Details' },
      { name: 'Select' },
      { name: 'Description List' },
      { name: 'Figure' },
      { name: 'Text Editing' },
      { name: 'YouTube Embed' },
    ],
  },
  {
    id: 5,
    title: 'VisX',
    logoSrc: '/techIcons/visx.png',
    description: 'Data visualization',
    links: [{ name: 'Bar Chart' }, { name: 'Pie Chart' }, { name: 'Areas' }],
  },

  {
    id: 6,
    title: 'Framer Motion',
    logoSrc: '/techIcons/framermotion.png',
    description: 'Animation for user interface',
    links: [{ name: 'Modal Presentation' }],
  },
  {
    id: 7,
    title: 'Mantine',
    logoSrc: '/techIcons/mantine-logo.svg',
    description: 'UI Library',
    links: [{ name: 'Carousel' }],
  },
  {
    id: 8,
    title: 'Headless UI',
    logoSrc: '/techIcons/headlessui.png',
    description: 'Unstyled react components',
    links: [
      { name: 'Menu' },
      { name: 'Listbox' },
      { name: 'Combobox HeadlessUIData' },
      { name: 'Combobox ExperimentsData' },
      { name: 'Switch' },
      { name: 'Disclosure' },
      { name: 'Dialog' },
      { name: 'Popover' },
      { name: 'Radio' },
      { name: 'Tabs' },
    ],
  },
  {
    id: 9,
    title: 'Radix UI',
    logoSrc: '/techIcons/radixui.png',
    description: 'Unstyled react components',
    links: [
      { name: 'Accordion' },
      { name: 'Alert Dialog' },
      { name: 'Checkbox' },
      { name: 'Collapsible' },
      { name: 'Context Menu' },
      { name: 'Dialog' },
      { name: 'Dropdown Menu' },
      { name: 'Hover Card' },
      { name: 'Popover' },
      { name: 'Progress' },
      { name: 'Radio Group' },
      { name: 'Scroll Area' },
      { name: 'Slider' },
      { name: 'Switch' },
      { name: 'Toggle' },
      { name: 'Toggle Group' },
      { name: 'Toolbar' },
      { name: 'Tooltip' },
      { name: 'Select' },
      { name: 'Navigation Menu' },
      { name: 'Toast' },
    ],
  },
  {
    id: 10,
    title: 'Sandpack',
    logoSrc: '/techIcons/sandpack.ico',
    description: 'Live code editor',
    links: [{ name: 'Example 1' }],
  },

  {
    id: 11,
    title: 'Notion API',
    logoSrc: '/techIcons/notion.png',
    description: 'Free CMS',
    links: [{ name: 'Table' }],
  },
];
