import { Fragment, useContext } from 'react';
import Link from 'next/link';
import AppContext from '../context/AppContext';
import { Dialog, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

export default function MenuMobile() {
  const { state, toggleMenu } = useContext(AppContext);

  return (
    <Transition.Root show={state.menuIsOpen} as={Fragment} className="sm:hidden">
      <Dialog as="div" className="relative z-10" onClose={toggleMenu}>
        <Transition.Child as={Fragment} enter="ease-in-out duration-500" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in-out duration-500" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Menu</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button type="button" className="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => toggleMenu(false)}>
                            <span className="sr-only">Close panel</span>
                            <FontAwesomeIcon className="h-6 w-6" icon={faX} />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8 text-gray-500">
                        <div className="flow-root">
                          <Link href="/" passHref>
                            <button onClick={toggleMenu} className="p-1 cursor-pointer">
                              Inicio
                            </button>
                          </Link>
                          <br />
                          <Link href="/about-me" passHref>
                            <button onClick={toggleMenu} className="p-1 cursor-pointer">
                              Sobre Mi
                            </button>
                          </Link>
                          <br />
                          <Link href="/services" passHref>
                            <button onClick={toggleMenu} className="p-1 cursor-pointer">
                              Servicios
                            </button>
                          </Link>
                          <br />
                          <div className="mt-8">
                            <div className="text-white text-center rounded-md bg-indigo-500 px-5 py-1 b cursor-pointer hover:bg-indigo-600">
                              <Link href="/contact">Ponte en contacto</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
