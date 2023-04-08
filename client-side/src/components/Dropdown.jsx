import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export default function Dropdown({ isLoading, categories }) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full items-center justify-center rounded-md font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Belajar Islam
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-white"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 z-30 mt-8 w-56 origin-top-right bg-secondaryColor py-[20px] pl-[20px] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="">
              {!isLoading ? (
                categories.map((category) => (
                  <Menu.Item key={category.id}>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? 'bg-primaryColor text-white ' : 'text-white'
                        } group flex w-full items-center px-[20px] py-[10px] text-sm`}
                      >
                        {category.name}
                      </button>
                    )}
                  </Menu.Item>
                ))
              ) : (
                <span>Loading ...</span>
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
