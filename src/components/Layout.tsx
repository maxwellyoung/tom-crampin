import { type PropsWithChildren } from "react";
import Nav from "./Nav";
import Link from "next/link";
import { motion } from "framer-motion";

interface LayoutProps {
  children: PropsWithChildren<any>;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
