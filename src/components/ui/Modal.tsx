"use client";

import { Fragment, FunctionComponent, ReactNode, SVGProps } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Heading } from "../typography/Heading";
import { Separator } from "../ui/Separator";
import { Button } from "./Button";

type ModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onModalClose?: Function;
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
  onModalClose,
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
              <header className="py-4 px-6 flex items-center justify-between">
                <section>
                  <Dialog.Title as={Heading}>{title}</Dialog.Title>

                  {description && (
                    <Dialog.Description as="p" className="text-primary/60">
                      {description}
                    </Dialog.Description>
                  )}
                </section>

                <Button
                  tabIndex={-1}
                  variant="secondary"
                  className="h-9 w-9 flex items-center justify-center rounded-full p-2"
                  onClick={() => {
                    onModalClose?.();
                    onOpenChange(false);
                  }}
                >
                  <HeroiconsXMark20Solid className="h-full w-full" />
                </Button>
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

function HeroiconsXMark20Solid(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.25em"
      height="1.25em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94z"
      ></path>
    </svg>
  );
}
