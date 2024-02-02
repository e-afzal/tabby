"use client";
import { useState } from "react";

import Image from "next/image";

// ASSET IMPORTS
import logo from "@/public/images/navbar/logo.svg";
import hamburger from "@/public/images/navbar/hamburger.svg";
import Overlay from "@/app/components/NavbarOverlay";

export default function NavbarMobile() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <header className='h-20 flex xl:hidden justify-between items-center z-50 fixed bg-white w-full top-0'>
        <nav className='flex justify-between px-5 md:px-12 w-full'>
          {/* LOGO CONTAINER */}
          <div className='logo_container' onClick={() => setMenuOpen(true)}>
            <Image src={logo} alt='Tabby logo' />
          </div>
          {/* HAMBURGER CONTAINER */}
          <div className='hamburger_container flex items-center'>
            <span
              className='font-pinga text-ctaPurple pl-4 mr-4 text-base'
              style={{ fontSize: "16px" }}
            >
              العربية
            </span>
            <div className='menu_icon_container px-2 hover:cursor-pointer'>
              <Image
                src={hamburger}
                alt='Hamburger Menu Icon'
                onClick={() => setMenuOpen(true)}
              />
            </div>
          </div>
        </nav>
      </header>
      {/* OVERLAY COMPONENT */}
      <Overlay menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
