import Image from "next/image";

// COMPONENTS
import LoginCTA from "./LoginCTA";

// ASSET IMPORTS
import logo from "@/public/images/navbar/logo.svg";
import mobile from "@/public/images/navbar/mobile.svg";
import flag from "@/public/images/navbar/flags/uae.png";

export default function Navbar() {
  return (
    <header className='h-20 hidden justify-center items-center z-50 fixed bg-white w-full top-0 xl:flex'>
      <nav
        className='max-w-7xl mx-auto flex justify-between px-8'
        style={{ minWidth: "1280px" }}
      >
        {/* NAVIGATION LEFT */}
        <div className='nav_left flex'>
          <div className='logo_container'>
            <Image src={logo} alt='Tabby logo' />
          </div>
          <ul className='nav_links ml-5 flex items-center space-x-4 gap-2'>
            <li>
              <a href='#'>Shop</a>
            </li>
            <li>
              <a href='#'>Ways to pay</a>
            </li>
            <li>
              <a href='#'>For business</a>
            </li>
          </ul>
        </div>
        {/* NAVIGATION RIGHT */}
        <div className='nav_right flex items-center space-x-12'>
          {/* LINKS */}
          <ul className='links flex items-center space-x-12'>
            <li>
              <a href='#' className='flex items-center gap-3'>
                <Image src={mobile} alt='Mobile icon' />
                <span>Get the app</span>
              </a>
            </li>
            <li>
              <LoginCTA />
            </li>
          </ul>
          {/* LOCALE */}
          <div
            className='locale_container flex items-center'
            style={{
              border: "1px solid #e6e5e9",
              borderRadius: "100px",
              padding: "8px 12px 8px 8px",
            }}
          >
            <div className='country_selector flex items-center space-x-4 pr-4'>
              <Image src={flag} alt='Country flag' className='max-h-9 w-auto' />
              <span>UAE</span>
            </div>
            <div className='language_container '>
              <span
                className='font-pinga text-ctaPurple pl-4'
                style={{ fontSize: "14px", borderLeft: "1px solid #e6e5e9" }}
              >
                العربية
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
