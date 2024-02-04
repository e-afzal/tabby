import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// ASSET IMPORT
import flag from "@/public/images/navbar/flags/uae.png";

export default function CountrySelector() {
  // DATA
  const countryData = [
    {
      name: "United Arab Emirates",
      shortName: "U.A.E.",
      flag: "/images/navbar/flags/uae.png",
      url: "#",
    },
    { name: "Qatar", flag: "/images/navbar/flags/qatar.png", url: "#" },
    { name: "Bahrain", flag: "/images/navbar/flags/bahrain.png", url: "#" },
    { name: "Kuwait", flag: "/images/navbar/flags/kuwait.png", url: "#" },
    {
      name: "Saudi Arabia",
      shortName: "KSA",
      flag: "/images/navbar/flags/saudi.png",
      url: "#",
    },
    { name: "Egypt", flag: "/images/navbar/flags/egypt.png", url: "#" },
  ];

  return (
    <div
      className='locale_container flex items-center'
      style={{
        border: "1px solid #e6e5e9",
        borderRadius: "100px",
        padding: "8px 12px 8px 8px",
      }}
    >
      {/* COUNTRY SELECTOR */}
      <DropdownMenu>
        <DropdownMenuTrigger className='country_selector flex items-center space-x-4 pr-4 outline-none'>
          <Image src={flag} alt='Country flag' className='max-h-9 w-auto' />
          <span>UAE</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          {/* <DropdownMenuSeparator /> */}
          {countryData.map((each, index) => (
            <DropdownMenuItem key={index}>
              <a
                href={each.url}
                className='flex items-center space-x-3 px-5 py-3 w-full'
                // style={{ border: "1px solid red" }}
              >
                <Image
                  src={each.flag}
                  width={38}
                  height={38}
                  alt={`${each.name} flag`}
                />
                <span className='text-base text-[#000000de]'>{each.name}</span>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* LANGUAGE */}
      <div className='language_container'>
        <a
          href='#'
          className='font-pinga text-ctaPurple pl-4'
          style={{ fontSize: "14px", borderLeft: "1px solid #e6e5e9" }}
        >
          العربية
        </a>
      </div>
    </div>
  );
}
