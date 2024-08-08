"use client";
import React from "react";
import Logo from "./Logo";
import LogoImg from "@public/images/Logo.webp";
import Link from "next/link";

function Navbar({ linksNav, buttonNav }: any) {
  return (
    <div className="navbar bg-base-100 flex justify-between w-full ">
      <Logo
        height={40}
        width={40}
        image={LogoImg}
        name={"A generic compani"}
        homePage={"/"}
      />
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {getItemsNav(linksNav)}{" "}
        </ul>
        {buttonNav ? buttonNav() : null}
      </div>
    </div>
  );
}

function getItemsNav(linksNav: any) {
  return linksNav.map((link: any) => {
    if (link.sub.length == 0) {
      return (
        <li key={link.link}>
          <Link href={link.link}>{link.name}</Link>
        </li>
      );
    } else {
      return (
        <li key={`link.link`}>
          <details>
            <summary>{link.name}</summary>
            <ul className="bg-primary mt-2 p-2 border-white border ">
              {link.sub.map((subLink: any) => {
                return (
                  <li key={`sublink${subLink.name}`}>
                    <Link href={subLink.link}>{subLink.name}</Link>
                  </li>
                );
              })}
            </ul>
          </details>
        </li>
      );
    }
  });
}

export default Navbar;
