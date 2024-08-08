import React, { ReactNode } from "react";

function Container(props: { children: ReactNode }) {
  return <section className=" px-4 md:px-14 my-8">{props.children}</section>;
}

export default Container;
