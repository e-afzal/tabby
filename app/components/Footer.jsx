import Image from "next/image";

// ASSET IMPORTS
import logo from "@/public/images/navbar/logo-white.svg";
import facebook from "@/public/images/footer/facebook.svg";
import instagram from "@/public/images/footer/instagram.svg";
import linkedin from "@/public/images/footer/linkedin.svg";
import x from "@/public/images/footer/x.svg";

export default function Footer() {
  const footerLinks = [
    {
      title: "about",
      links: [
        { title: "Contact", url: "#" },
        { title: "Careers", url: "#" },
        { title: "Press", url: "/press" },
        { title: "Shariah Compliance", url: "/sharia" },
        { title: "Terms & Conditions", url: "/terms" },
        { title: "Privacy Policy", url: "/privacy" },
      ],
    },
    {
      title: "shoppers",
      links: [
        { title: "Shops", url: "#" },
        { title: "Get the app", url: "/get-app" },
        { title: "How it works", url: "#" },
        { title: "Cashback", url: "#" },
        { title: "Login", url: "#" },
        { title: "Shopper FAQs", url: "#" },
      ],
    },
    {
      title: "businesses",
      links: [
        { title: "Sell with Tabby", url: "#" },
        { title: "Business login", url: "#" },
        { title: "Case Studies", url: "#" },
        { title: "Merchant FAQs", url: "#" },
      ],
    },
  ];
  return (
    <footer
      className='min-h-96 flex flex-col justify-center py-20'
      style={{ backgroundColor: "#171717" }}
    >
      {/* TOP GRID */}
      <div
        className='footer_container grid grid-cols-2 justify-between mx-auto px-6 sm:grid-cols-1 sm:gap-10'
        style={{
          maxWidth: "1280px",
          minWidth: "320px",
          width: "100%",
        }}
      >
        <div className='logo_box'>
          <Image src={logo} alt='Tabby logo' height={48} width={120} />
          <span style={{ color: "rgb(229, 231, 235)", fontSize: "10px" }}>
            Tabby FZ-LLC, In5 Tech, Dubai Internet City
          </span>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-3 justify-between gap-10'>
          {footerLinks.map((each, index) => (
            <div className='links_container' key={index}>
              <h4 className='text-lg capitalize text-white font-radialb'>
                {each.title}
              </h4>
              <ul className='space-y-3 mt-3'>
                {each.links.map((each, index) => (
                  <li key={index}>
                    <a
                      className='text-sm'
                      href={each.url}
                      key={index}
                      style={{ color: "#e5e5e5" }}
                    >
                      {each.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* BOTTOM GRID: SOCIAL ICONS */}
      <div
        className='social mt-10 px-6'
        style={{
          maxWidth: "1280px",
          minWidth: "320px",
          width: "100%",
          marginInline: "auto",
        }}
      >
        <h4 className='text-lg capitalize text-white font-radialb'>Share</h4>
        <div className='mt-5 flex flex-row items-center space-x-3'>
          <a href='https://www.facebook.com/paywithtabby' target='_blank'>
            <Image src={facebook} alt='Facebook icon' />
          </a>
          <a href='https://www.instagram.com/tabbypay' target='_blank'>
            <Image src={instagram} alt='Instagram icon' />
          </a>
          <a href='https://www.linkedin.com/company/tabbypay' target='_blank'>
            <Image src={linkedin} alt='Linkedin icon' />
          </a>
          <a href='https://twitter.com/paywithtabby?lang=en' target='_blank'>
            <Image src={x} alt='X icon' />
          </a>
        </div>
      </div>
    </footer>
  );
}
