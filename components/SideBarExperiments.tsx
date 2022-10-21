import { ChevronDownIcon } from '@heroicons/react/24/outline';
import * as Accordion from '@radix-ui/react-accordion';
import { ExperimentsData } from 'data/ExperimentsData';
import Image from 'next/future/image';
import { InternalLinkWithoutArrow } from './DesignSystem';

export default function SideBarExperiments() {
  return (
    <aside className='-ml-2 space-y-1'>
      {ExperimentsData.map(({ id, title, logoSrc, links }) => (
        <Accordion.Root type='multiple' key={id}>
          <Accordion.Item value='id'>
            <Accordion.Header>
              <Accordion.Trigger className='group flex w-full items-center justify-between rounded-md py-1 px-2 hover:bg-apple-gray6 rdx-state-open:bg-apple-gray6'>
                {/* grayscale group-hover:grayscale-0 */}
                <div className='flex items-center space-x-2'>
                  <div className=' rdx-state-open:grayscale-0'>
                    <Image src={logoSrc} height={16} width={16} alt={title} />
                  </div>
                  <span>{title}</span>
                </div>
                <div className='flex items-center space-x-1'>
                  <div className='text-sm text-zinc-400'>{links.length}</div>
                  <ChevronDownIcon
                    strokeWidth={2}
                    className='h-4 w-4 text-zinc-400 group-rdx-state-open:rotate-180'
                  />
                </div>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className='mb-4 space-y-1.5 pl-8 pt-1'>
              {links.map(link => (
                <InternalLinkWithoutArrow
                  block={true}
                  key={link}
                  href={`/experiments/${title.toLowerCase().replace(' ', '-')}/${link
                    .toLowerCase()
                    // /\s/g regex -> search all (g = global) whitespace, and replace them with '-'
                    .replace(/\s/g, '-')}`}
                  name={link}
                />
              ))}
            </Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      ))}
    </aside>
  );
}
