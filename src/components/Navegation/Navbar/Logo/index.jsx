import Image from "next/image";
import Link from "next/link";
import React from "react";
import { KoHo } from 'next/font/google';
const koho = KoHo({ subsets: ['latin'], weight: '600' });

function Logo({ name, height, width, homePage, image }) {
  console.log("home paga",homePage)
  return (
    <Link href={"/"}>
    <div className="flex btn btn-ghost  items-center">
      <Image className="mr-4" height={height} width={width} src={image} alt="Logo da empresa" />
    <span className={koho.className + " text-xl"}>
      {name}
    </span>
</div>
    </Link>
  );
}

export default Logo;
