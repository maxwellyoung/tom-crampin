import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "../components/Layout";
import "~/styles/globals.css";
import localFont from "next/font/local";
import { AnimatePresence } from "framer-motion";
const ppMori = localFont({ src: "../../src/assets/PPMori-Regular.otf" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={ppMori.className}>
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </main>
  );
};

export default MyApp;
