import Image from "next/image";
import React, { ReactNode } from "react";
import Title from "../Title";
import { motion } from "framer-motion";

function Section({ reverse, title, children, headerLevel }) {
  const xInit = !reverse ? -48 : 40;
  return (
    <motion.section
      initial={{ x: xInit, opacity: 0 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1, transition: { duration: 0.6 } }}
      className="flex flex-col padding-section"
    >
      <Title headerLevel={headerLevel} title={title} invert="yes" />
      <div
        className={`flex flex-col items-center md:flex-row ${reverse ? "md:flex-row-reverse" : ""} justify-between`}
      >
        <Title headerLevel={headerLevel} title={title} invert="no" />
        <div className="  text-textM  md:max-w-[40vw]  mb-[20px] ">
          <p>{children}</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Section;
