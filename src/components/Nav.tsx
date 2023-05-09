import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {
  color: string;
}

export function Logo({ color }: Props) {
  return (
    <Link href={"/"}>
      <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>
        <svg
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1057.4 155.5"
          style={{ fill: color }}
        >
          <path d="m42.92,52.29v72.09H14.2V52.29H0v-21.22h14.2V0h28.72v31.07h13.87v21.17h-13.87v.05Z" />
          <path d="m107,127.21c-29.43,0-51.76-20.99-51.76-49.6s22.33-49.6,51.76-49.6,51.76,20.99,51.76,49.6-22.33,49.6-51.76,49.6Zm0-73.1c-13.35,0-23.04,10.9-23.04,23.54s9.68,23.54,23.04,23.54,23.04-10.91,23.04-23.54-9.68-23.54-23.04-23.54Z" />
          <path d="m286.92,124.38v-49.6c0-10.27-1.36-20.67-14.72-20.67s-15.94,8.76-15.94,19.35v50.92h-28.72v-50.78c0-9.58-2.26-19.48-14.39-19.48-13.35,0-16.27,9.76-16.27,20.67v49.6h-28.72V31.07h26.84v9.9h.33c5.55-9.58,15.61-13.1,26.51-13.1,12.46,0,21.81,6.07,27.69,16.65,6.91-10.59,17.49-16.65,30.46-16.65,9.54,0,18.52,2.69,25.29,9.4,10.91,10.77,10.39,21.86,10.39,36.14v50.92h-28.77v.05Z" />
          <path d="m422.36,127.39c-28.72,0-51.43-22.04-51.43-49.92s22.19-49.6,50.73-49.6c24.59,0,45.88,15.47,50.92,39.15h-29.1c-4.14-8.76-11.61-13.1-21.48-13.1-13.87,0-22.19,11.09-22.19,23.68s8.84,23.68,22.85,23.68c9.54,0,16.45-4.38,20.78-12.46h29.29c-5.5,22.95-26.09,38.56-50.35,38.56Z" />
          <path d="m510.18,73.1v51.29h-28.72V31.07h27.03v9.9h.33c5.03-9.58,12.98-13.1,24.07-13.1v28.06c-12.69.36-22.71,2.74-22.71,17.16Z" />
          <path d="m608.34,124.38v-10.08h-.33c-5.22,9.58-17.67,13.28-28.07,13.28-29.62,0-48.33-22.18-48.33-49.92s19.42-49.73,48.33-49.73c10.58,0,22.33,3.88,28.07,13.1h.33v-9.95h28.73v93.26h-28.73v.05Zm-24.26-70.45c-14.01,0-23.74,10.77-23.74,24.05s10.39,23.54,23.88,23.54,24.07-10.4,24.07-23.86c.04-13.64-10.16-23.73-24.21-23.73Z" />
          <path d="m769.92,124.38v-49.6c0-10.27-1.36-20.67-14.71-20.67s-15.94,8.76-15.94,19.35v50.92h-28.73v-50.78c0-9.58-2.25-19.48-14.39-19.48-13.35,0-16.27,9.76-16.27,20.67v49.6h-28.72V31.07h26.84v9.9h.33c5.55-9.58,15.61-13.1,26.51-13.1,12.46,0,21.81,6.07,27.69,16.65,6.91-10.59,17.49-16.65,30.46-16.65,9.54,0,18.53,2.69,25.29,9.4,10.91,10.77,10.39,21.86,10.39,36.14v50.92h-28.77v.05Z" />
          <path d="m869.68,127.58c-11.42,0-21.11-3.38-28.91-11.59v39.51h-28.73V31.07h27.03v10.27h.52c7.43-9.08,18.19-13.46,29.95-13.46,29.8,0,46.92,23.68,46.92,50.74-.05,26.1-18.71,48.96-46.78,48.96Zm-6.06-73.64c-13.87,0-24.07,10.59-24.07,23.86s10.39,23.68,24.07,23.68,24.07-10.59,24.07-23.68-10.2-23.86-24.07-23.86Z" />
          <path d="m925.77,21.17V0h28.72v21.17h-28.72Zm0,103.21V31.07h28.72v93.26h-28.72v.05Z" />
          <path d="m1028.63,124.38v-50.92c0-10.4-2.07-19.35-15.04-19.35s-16.45,8.4-16.45,19.48v50.74h-28.73V31.07h26.84v9.9h.33c6.06-9.58,14.53-13.1,26.14-13.1,8.13,0,18.34,3.01,24.59,8.08,9.17,7.39,11.09,19.16,11.09,30.07v58.31h-28.77v.05Z" />
        </svg>
      </motion.div>
    </Link>
  );
}

export default function Nav() {
  const [color, setColor] = useState("#000000");
  const [modal, openModal] = useState(false);

  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      setColor("#FFFFFF");
    } else {
      setColor("#000000");
    }
  }, [router.pathname]);

  const handleModalColor = () => {
    if (router.pathname === "/")
      setColor((prevColor) =>
        prevColor === "#000000" ? "#FFFFFF" : "#000000"
      ); // Toggle between white and black
  };
  console.log(color);

  const genericHamburgerLineClosed = `h-1 w-6 my-1 opacity bg-${color} transition ease transform duration-300`;
  const genericHamburgerLineOpen = `h-1 w-6 my-1 opacity bg-${color} transition ease transform duration-300`;

  return (
    <>
      <Link href={"/"}>
        <motion.div
          className="fixed top-8 left-6 z-50 w-64 sm:top-12 sm:left-32"
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.03 }}
        >
          <Logo color={color} />
        </motion.div>
      </Link>
      <motion.nav className="fixed top-0 w-full" transition={{ duration: 0.3 }}>
        <div className="flex items-center justify-between px-6 py-6 sm:py-10 sm:px-24 ">
          <button
            className="group ml-auto flex h-12 w-12 flex-col items-end justify-center"
            onClick={() => {
              handleModalColor();
              openModal(!modal);
            }}
          >
            <div
              style={{ backgroundColor: color }}
              className={`${genericHamburgerLineClosed} ${
                modal
                  ? "translate-y-3 rotate-45 group-hover:opacity-100"
                  : " group-hover:opacity-100"
              }`}
            />

            <div
              style={{ backgroundColor: color }}
              className={`${genericHamburgerLineClosed} ${
                modal ? "opacity-0" : " group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence mode="wait">
        {modal && (
          <div className="modal fixed h-screen w-screen overflow-y-auto overflow-x-hidden bg-white">
            <motion.div
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 flex h-full w-full flex-col items-start justify-end gap-4 text-left"
            >
              <div className="-inset-10 mr-6 ml-auto -mt-12 flex justify-end  py-4 sm:py-10 sm:px-20">
                <button
                  className=" group flex h-40 w-40 flex-col items-end justify-center"
                  onClick={() => {
                    handleModalColor();
                    openModal(!modal);
                  }}
                >
                  <div
                    style={{ backgroundColor: color }}
                    className={`${genericHamburgerLineOpen} ${
                      modal
                        ? "translate-y-3 rotate-45 group-hover:opacity-100"
                        : " group-hover:opacity-100"
                    }`}
                  />
                  <div
                    style={{ backgroundColor: color }}
                    className={`${genericHamburgerLineOpen} ${
                      modal ? "opacity-0" : "group-hover:opacity-100"
                    }`}
                  />
                  <div
                    style={{ backgroundColor: color }}
                    className={`${genericHamburgerLineOpen} ${
                      modal
                        ? "-translate-y-3 -rotate-45 group-hover:opacity-100"
                        : " group-hover:opacity-100"
                    }`}
                  />
                </button>
              </div>
              <div className="mb-6 ml-4 flex h-screen flex-col justify-end sm:ml-36 sm:mb-4">
                <motion.div>
                  <Link
                    href="/work"
                    className="text-8xl font-bold text-black duration-700 hover:opacity-50 sm:text-[150px]"
                    onClick={() => openModal(!modal)}
                  >
                    work
                  </Link>
                </motion.div>
                <Link
                  href="/about"
                  className="text-8xl font-bold text-black duration-700 hover:opacity-50 sm:text-[150px]"
                  onClick={() => openModal(!modal)}
                >
                  about
                </Link>
                <Link
                  href="mailto:tom@tomcrampin.com"
                  className="text-8xl font-bold text-black duration-700 hover:opacity-50 sm:text-[150px]"
                  onClick={() => openModal(!modal)}
                >
                  contact
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
