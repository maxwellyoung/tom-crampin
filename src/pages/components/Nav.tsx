import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [modal, openModal] = useState(false);

  const genericHamburgerLineClosed = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const genericHamburgerLineOpen = `h-1 w-6 my-1 rounded-full bg-white transition ease transform duration-300`;

  return (
    <nav>
      <div className="fixed flex w-full items-center justify-between px-6 py-6 sm:py-12 sm:px-20">
        <Link href={"/"}>
          <Image
            className="z-10"
            src="/logo.svg"
            width={200}
            height={200}
            alt="tom crampin logo"
          />
        </Link>
        <button
          className="group ml-auto flex h-12 w-12 flex-col items-end justify-center"
          onClick={() => openModal(!modal)}
        >
          <div
            className={`${genericHamburgerLineClosed} ${
              modal
                ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                : "opacity-50 group-hover:opacity-100"
            }`}
          />
          <div
            className={`${genericHamburgerLineClosed} ${
              modal ? "opacity-0" : "opacity-50 group-hover:opacity-100"
            }`}
          />
        </button>
      </div>

      {modal && (
        <div className="modal fixed  z-50 h-screen w-screen items-start justify-end gap-4 bg-black  text-left">
          <div className="-inset-10 mr-8 ml-auto -mt-8 flex justify-end sm:-mt-2 sm:mr-20">
            <button
              className=" group flex h-40 w-40 flex-col items-end justify-center"
              onClick={() => openModal(!modal)}
            >
              <div
                className={`${genericHamburgerLineOpen} ${
                  modal
                    ? "translate-y-3 rotate-45 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLineOpen} ${
                  modal ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                }`}
              />
              <div
                className={`${genericHamburgerLineOpen} ${
                  modal
                    ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
                }`}
              />
            </button>
          </div>
          <div className="flex h-screen flex-col justify-center p-4 sm:p-24">
            <Link
              href="/work"
              className="text-8xl font-bold text-[#3A3A3A] hover:text-white sm:text-9xl "
              onClick={() => openModal(!modal)}
            >
              work
            </Link>
            <Link
              href="/about"
              className="text-8xl font-bold text-[#3A3A3A] hover:text-white sm:text-9xl"
              onClick={() => openModal(!modal)}
            >
              about
            </Link>
            <Link
              href="mailto:tom@tomcrampin.com"
              className="text-8xl font-bold text-[#3A3A3A] hover:text-white sm:text-9xl"
              onClick={() => openModal(!modal)}
            >
              contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
