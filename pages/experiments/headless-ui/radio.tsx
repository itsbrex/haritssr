import { ExternalLink, SubTitle } from '@/components/DesignSystem';
import LayoutToExperiments from '@/components/LayoutToExperiments';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
];

export default function ImportedRadio() {
  return (
    <LayoutToExperiments title='Disclosure' domain='Headless UI'>
      <SubTitle>
        A fully-managed, renderless dialog component jam-packed with accessibility and keyboard
        features, perfect for building completely custom modal and dialog windows for your next
        application. <ExternalLink name='Source' href='https://headlessui.dev/react/dialog' />
      </SubTitle>
      <Example1 />
    </LayoutToExperiments>
  );
}
function Example1() {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <div className='w-full px-4 py-16'>
      <div className='mx-auto w-full max-w-md'>
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
          <div className='space-y-2'>
            {plans.map(plan => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300'
                      : ''
                  }
                  ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ active, checked }) => (
                  <>
                    <div className='flex w-full items-center justify-between'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                          >
                            {plan.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as='span'
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'}`}
                          >
                            <span>
                              {plan.ram}/{plan.cpus}
                            </span>{' '}
                            <span aria-hidden='true'>&middot;</span> <span>{plan.disk}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className='flex-shrink-0 text-white'>
                          <CheckIcon className='h-6 w-6' />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}