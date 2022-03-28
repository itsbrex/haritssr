//for ImportedCombobox
import LayoutToExperiments from '@/components/LayoutToExperiments';
import { ExternalLink, SubTitle } from '@/components/DesignSystem';
import { ExperimentsData } from '../../../data/ExperimentsData.js';

//for ComboboxExample1
import { Dialog, Combobox, Transition } from '@headlessui/react';
import { Fragment, SetStateAction, useState, useEffect } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

interface useStateStringType {
  target: { value: SetStateAction<string> };
}

interface filteredExperimentsDataType {
  id: number;
  title: string;
  links: Array<{ name: string }>;
}

interface ExperimentDataType {
  title: string;
  links: Array<{ name: string }>;
}

const ImportedCombobox = () => {
  return (
    <LayoutToExperiments title='Combobox 2' domain='Headless UI'>
      <SubTitle>
        Comboboxes are the foundation of accessible autocompletes and command palettes for your app,
        complete with robust support for keyboard navigation.{' '}
        <ExternalLink href='https://headlessui.dev/react/combobox' name='Source' />. Press ctrl+b to
        open search dialog.
      </SubTitle>
      <ComboboxExample1 ExperimentsData={ExperimentsData} />
    </LayoutToExperiments>
  );
};

//projects data come from API or database
const ComboboxExample1 = ({ ExperimentsData }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  //kenapa harus di useEffect ?
  useEffect(() => {
    function onKeydown(event: { key: string; metaKey: any; ctrlKey: any }) {
      if (event.key === 'b' && (event.metaKey || event.ctrlKey)) {
        setIsOpen(!isOpen);
      }
    }
    window.addEventListener('keydown', onKeydown);
    return () => {
      window.removeEventListener('keydown', onKeydown);
    };
  }, [isOpen]);

  //data ini hanya muncul (filtered) di <Combobox.Options/> ketika user mengetik, belum menuju page tertentu
  const filteredExperimentsData = query
    ? ExperimentsData.filter(
        (ExperimentData: ExperimentDataType) =>
          ExperimentData.title.toLowerCase().includes(query.toLowerCase()) ||
          ExperimentData.links.map(link => link.name.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <Transition.Root show={isOpen} as={Fragment} afterLeave={() => setQuery('')}>
      <Dialog
        // open={isOpen} had been move to <Transition.Root/>
        onClose={setIsOpen} //onClose={() => {setIsOpen(false);}}
        className='fixed inset-0 overflow-y-auto p-8 pt-[25vh]'
      >
        <Transition.Child
          enter='duration-300 ease-out'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-500/75' />
        </Transition.Child>
        <Transition.Child
          enter='duration-300 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-200 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Combobox
            onChange={ExperimentsData => {
              setIsOpen(false);
              router.push(
                `/experiments/${ExperimentsData.title.toLocaleLowerCase().replace(' ', '-')}`
              );
            }}
            value={ExperimentsData.id}
            as='div'
            className='relative mx-auto max-w-xl divide-y divide-gray-200 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/5'
          >
            <div className='flex items-center px-4'>
              <SearchIcon className='h-6 w-6 text-gray-500' />
              <Combobox.Input
                onChange={(event: useStateStringType) => {
                  setQuery(event.target.value);
                }}
                className='h-12 w-full border-0 bg-transparent text-gray-800 placeholder-gray-400 focus:ring-0'
                placeholder='Search Experiments'
              />
            </div>
            {filteredExperimentsData.length > 0 && (
              <Combobox.Options static className='max-h-60 overflow-y-auto py-4 text-sm'>
                {filteredExperimentsData.map((ExperimentData: filteredExperimentsDataType) => (
                  <Combobox.Option key={ExperimentData.id} value={ExperimentData}>
                    {({ active }) => (
                      <div
                        className={`space-x-1 px-4 py-2 ${
                          active ? 'bg-blue-500' : 'bg-white'
                        } cursor-pointer`}
                      >
                        <span className={`font-medium  ${active ? 'text-white' : 'text-gray-900'}`}>
                          {ExperimentData.title}
                        </span>
                        {ExperimentData.links.map(link => (
                          <>
                            <span
                              key={link.name}
                              className={` ${active ? 'text-blue-200' : 'text-gray-400'}`}
                            >
                              in {link.name}
                            </span>
                          </>
                        ))}
                      </div>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            )}
            {query && filteredExperimentsData.length === 0 && (
              <p className='p-4 text-sm text-gray-500'>No results found</p>
            )}
          </Combobox>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default ImportedCombobox;
