import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const ModalTags = ({
  isImageOpen,
  closeImageModal,
  isLoadingTag,
  tags,
  errorTag,
}) => {
  return (
    <>
      <Transition appear show={isImageOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeImageModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-ternaryColor bg-opacity-5" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-sm transform  rounded-2xl  backdrop-blur-xl/5 bg-primaryDarkColor border border-stone-700 p-[40px] text-left align-middle shadow-sm transition-all">
                  <span className="text-secondaryColor text-xl font-bold ">
                    List Tag
                  </span>
                  <div className="flex flex-wrap pt-[20px] gap-[20px] text-secondaryColor">
                    {!isLoadingTag ? (
                      tags.map((tag) => <span key={tag.id}>#{tag.name}</span>)
                    ) : (
                      <span>Loading ...</span>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalTags;
