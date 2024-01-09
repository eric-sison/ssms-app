"use client";

import { Fragment, FunctionComponent, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Heading } from "../typography/Heading";
import { Separator } from "../ui/Separator";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: ReactNode;
};

export const Modal: FunctionComponent<ModalProps> = ({
  open,
  onOpenChange,
  title,
  description,
  children,
}) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" onClose={() => onOpenChange(false)} className="z-10 overflow-clip">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Backdrop className="fixed inset-0 bg-black/70" aria-hidden="true" />
        </Transition.Child>

        <div className="fixed inset-0 w-screen flex justify-center p-10 z-50">
          <Transition.Child
            as={"div"}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="border w-[42rem] max-h-[95%] overflow-y-auto bg-primary-foreground rounded-xl">
              <header className="py-4 px-6">
                <Dialog.Title as={Heading}>{title}</Dialog.Title>

                {description && (
                  <Dialog.Description as="p" className="text-primary/60">
                    {description}
                  </Dialog.Description>
                )}
              </header>

              <Separator />

              <div className="p-6">{children}</div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};
