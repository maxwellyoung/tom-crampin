import React, { type PropsWithChildren } from "react";
import Nav from "./Nav";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Nav />
      <div>{children}</div>
    </>
  );
};

export default Layout;
