import Image from "next/image";

// ASSET IMPORTS
import cancelIcon from "@/public/images/navbar/cancel.svg";
import flag from "@/public/images/navbar/flags/uae.png";

export default function Overlay({ menuOpen, setMenuOpen }) {
  const menuItems = [
    { name: "Shop", url: "#" },
    { name: "Ways to pay", url: "#" },
    { name: "For business", url: "#" },
    { name: "Log in or sign up", url: "#" },
    { name: "Get the app", url: "#" },
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

      {/* LOCALE SELECTOR */}
      <div
        className='flex items-center mt-4 py-4 px-3'
        style={{
          border: "1px solid #e6e5e9",
          borderRadius: "100px",
        }}
      >
        <div className='country_selector flex items-center space-x-4 pr-4'>
          <Image src={flag} alt='Country flag' className='max-h-9 w-auto' />
          <span className='font-radialb text-titleDarkGrey text-lg'>
            United Arab Emirates
          </span>
        </div>
        {/* <div className='language_container '>
              <span
                className='font-pinga text-ctaPurple pl-4'
                style={{ fontSize: "14px", borderLeft: "1px solid #e6e5e9" }}
              >
                العربية
              </span>
            </div> */}
      </div>
    </div>
  );
}
