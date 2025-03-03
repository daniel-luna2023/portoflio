import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto">
      <div className="md:flex md:justify-between">
        <div>
          <h4 className="text-3xl font-bold my-6 md:my-0">O.gomez</h4>
        </div>
        <div className="px-2 flex justify-between md:gap-8 items-center">
          <Link href="#about-me">about me</Link>
          <Link href="#skills">skills</Link>
          <Link href="#services">services</Link>
          <Link href="#portfolio">portfolio</Link>
          <Link href="#contact">contacto</Link>
        </div>
      </div>
      <Separator className="my-4"/>
      <div className="text-center">
        &copy; 2025 lading page by O.gomez
      </div>
    </footer>
  );
};

export default Footer;
