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
        <div className={`hamburger ml-auto ${modal ? "hidden" : "block"}`}>
          <button
            className="group flex h-12 w-12 flex-col items-center justify-center"
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
            <div
              className={`${genericHamburgerLineClosed} ${
                modal
                  ? "-translate-y-3 -rotate-45 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </div>

      {modal && (
        <div className="modal fixed top-0 left-0 z-50 flex h-screen w-screen flex-col items-start justify-end gap-4 bg-black p-24 text-left">
          <button
            className="group flex h-12 w-12 flex-col items-center justify-center"
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
      )}
    </nav>
  );
}
