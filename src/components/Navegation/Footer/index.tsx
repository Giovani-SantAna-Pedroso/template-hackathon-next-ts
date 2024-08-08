import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";
import Logo from "@public/images/Logo.webp";
import Link from "next/link";
import { KoHo } from "next/font/google";
import Image from "next/image";
const koho = KoHo({ subsets: ["latin"], weight: "600" });

export default function Footer({ company, pages, contactInfo, creator }: any) {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="footer  p-10 bg-base-300 text-base-content">
        <aside>
          <Image width={120} alt="logo da empresa" src={Logo} />
          <p>
            {company.name}
            <br />
            {company.philosoph}
          </p>
        </aside>
        <nav>
          <header className="footer-title">Paginas</header>
          {pages.map((page: any) => {
            return (
              <Link
                key={"footer-link-" + page.name}
                href={page.link}
                className="link link-hover"
              >
                {page.name}
              </Link>
            );
          })}
        </nav>
        <nav>
          <header className="footer-title">Contato</header>
          <p className="flex items-center  mb-1">
            <AiOutlineMail className="mr-4" />
            {contactInfo.email}
          </p>
          <p className="flex items-center mb-1">
            <AiOutlineWhatsApp className="mr-4" />
            {contactInfo.tel}
          </p>
        </nav>
      </footer>
      <footer className="footer  px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <nav className="md:place-self-center md:justify-self-end">
          <p>
            Site made by{" "}
            <a href={creator.link} className="link link-hover underline">
              {creator.name}
            </a>
          </p>
          <p className="hidden">.</p>
        </nav>
      </footer>
    </>
  );
}
