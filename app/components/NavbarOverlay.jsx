import Image from "next/image";

// ASSET IMPORTS
import cancelIcon from "@/public/images/navbar/cancel.svg";

// COMPONENTS
import CountrySelectorMobile from "@/app/components/CountrySelectorMobile";

export default function Overlay({ menuOpen, setMenuOpen }) {
  const menuItems = [
    { name: "Shop", url: "#" },
    { name: "Ways to pay", url: "#" },
    { name: "For business", url: "#" },
    { name: "Log in or sign up", url: "#" },
    { name: "Get the app", url: "/get-app" },
  ];

  return (
    <div
      style={{ display: menuOpen ? "block" : "none" }}
      className='nav_overlay fixed z-50 bg-white top-0 left-0 right-0 bottom-0 px-5'
    >
      {/* LANGUAGE CONTAINER */}
      <div className='locale_container flex h-20 items-center'>
        <span
          className='font-pinga text-ctaPurple ml-auto'
          style={{ fontSize: "16px" }}
        >
          العربية
        </span>
        <div className='cancel_container ml-5 px-1 hover:cursor-pointer'>
          <Image
            src={cancelIcon}
            alt='Cancel Menu icon'
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
      {/* MENU LINKS */}
      <ul className='border-gray-300 divide-y'>
        {menuItems.map((each, index) => (
          <li key={index}>
            <a
              href={each.url}
              className='inline-block py-5 text-2xl font-radialb'
            >
              {each.name}
            </a>
          </li>
        ))}
      </ul>

      {/* COUNTRY SELECTOR */}
      <CountrySelectorMobile />
    </div>
  );
}
