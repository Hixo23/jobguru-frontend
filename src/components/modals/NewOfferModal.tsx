import { ElementRef, useRef } from "react";

export const NewOfferModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) => {
  const modalRef = useRef<ElementRef<"dialog"> | null>(null);
  const closeMenu = (e: MouseEvent) => {
    const eventTarget = e.target as Node;

    console.log(modalRef.current?.contains(eventTarget));

    if (modalRef.current && isOpen && !modalRef.current.contains(eventTarget))
      return setIsOpen(false);
  };

  document.addEventListener("mousedown", closeMenu);

  return (
    <>
      {isOpen && (
        <div
          className={
            "absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-black/70"
          }
        >
          <dialog
            ref={modalRef}
            open
            className={
              "text-text px-4 bg-neutral-800 flex flex-col items-center py-4 gap-4 rounded-xl"
            }
          >
            <p className={"text-xl font-bold"}>Add new job offer!</p>
            <form className={"flex flex-col gap-4 pb-4"}>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="email">Title</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="Type your email address"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="email">Description</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="Type your email address"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="email">Company</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="Type your email address"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="email">Salary</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="Type your email address"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 text-gray-400">
                <label htmlFor="email">Skills</label>
                <input
                  id="email"
                  className="form-input"
                  placeholder="Type your email address"
                  type="email"
                />
              </div>
              <button className={"bg-primary w-full rounded-xl py-2 mt-2"}>
                Add
              </button>
            </form>
          </dialog>
        </div>
      )}
    </>
  );
};
