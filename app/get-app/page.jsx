import Image from "next/image";

// ASSET IMPORTS
import qr from "@/public/images/home/showcase/qr.jpg";
import levelImage from "@/public/images/home/level/showcase.webp";

// COMPONENTS
import CategoryCarousel from "../components/CategoryCarousel";

// METADATA
export const metadata = {
  title: "The Tabby app – shopping that gives back | Tabby",
  description:
    "With the Tabby app, you can shop now and pay later – with no interest, fees or hidden costs of any kind. Get the app on iOS or Android.",
  openGraph: {
    title: "The Tabby app – shopping that gives back | Tabby",
    description:
      "With the Tabby app, you can shop now and pay later – with no interest, fees or hidden costs of any kind. Get the app on iOS or Android.",
    url: "https://tabby-ead.vercel.app/get-app",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/ddeima5fc/image/upload/v1706812362/tabby_image_ipjjgs.png",
        width: 1200,
        height: 627,
      },
    ],
  },
};

export default function GetApp() {
  const feelGridItems = [
    {
      iconUrl: "dollar.svg",
      iconAlt: "Dollar icon",
      title: "Stay in control of your spending.",
      description:
        "Manage your spend, track your payments and stay on top of your money.",
    },
    {
      iconUrl: "tag.svg",
      iconAlt: "Shopping tag icon",
      title: "Access the best deals and codes.",
      description:
        "You'll never miss another deal with exclusive deals and discount codes from your favourite stores.",
    },
    {
      iconUrl: "grid.svg",
      iconAlt: "Grid icon",
      title: "Discover more stores to pay in 4.",
      description:
        "Find your favourites or discover spotlight brands that let you pay in 4 online or in-store.",
    },
  ];
  const workGridItems = [
    {
      image: "brands.webp",
      title: "Find your favourite brands.",
      description:
        "Shop your favourites or discover new brands that let you get the most out of shopping. You'll find noon, SHEIN, Namshi, IKEA and thousands more.",
    },
    {
      image: "checkout.webp",
      title: "Select Tabby at checkout.",
      description:
        "Add what you want to your cart and choose Tabby at checkout. Sign up, link any card and get approved instantly.",
    },
    {
      image: "split.webp",
      title: "Split in 4 monthly payments.",
      description:
        "Pay only 25% upfront and we'll remind you about the rest. Completely free, no interest.",
    },
  ];
  const featuredBrands = [
    {
      brand: "SHEIN",
      imageMain: "/images/get_app/favorites/shein.webp",
      imageBrand: "/images/get_app/favorites/shein_logo.webp",
      split: true,
      deals: true,
      inStore: false,
    },
    {
      brand: "Golden Scent",
      imageMain: "/images/get_app/favorites/goldenscent.webp",
      imageBrand: "/images/get_app/favorites/goldenscent_logo.webp",
      split: true,
      deals: false,
      inStore: false,
    },
    {
      brand: "Level Shoes",
      imageMain: "/images/get_app/favorites/levelshoes.webp",
      imageBrand: "/images/get_app/favorites/levelshoes_logo.webp",
      split: true,
      deals: true,
      inStore: true,
    },
    {
      brand: "Joi Gifts",
      imageMain: "/images/get_app/favorites/joigifts.webp",
      imageBrand: "/images/get_app/favorites/joigifts_logo.webp",
      split: true,
      deals: true,
      inStore: false,
    },
    {
      brand: "Abdul Samad Al Qureshi",
      imageMain: "/images/get_app/favorites/asaq.webp",
      imageBrand: "/images/get_app/favorites/asaq_logo.webp",
      split: true,
      deals: false,
      inStore: true,
    },
    {
      brand: "IKEA",
      imageMain: "/images/get_app/favorites/ikea.webp",
      imageBrand: "/images/get_app/favorites/ikea_logo.webp",
      split: true,
      deals: false,
      inStore: true,
    },
    {
      brand: "Home Centre",
      imageMain: "/images/get_app/favorites/homecentre.webp",
      imageBrand: "/images/get_app/favorites/homecentre_logo.webp",
      split: true,
      deals: false,
      inStore: true,
    },
    {
      brand: "The Watch House",
      imageMain: "/images/get_app/favorites/thewatchhouse.webp",
      imageBrand: "/images/get_app/favorites/thewatchhouse_logo.webp",
      split: true,
      deals: false,
      inStore: true,
    },
  ];

  return (
    <main className='mt-20'>
      {/* SECTION: SHOWCASE */}
      <section
        id='showcase'
        className='min-w-full min-h-[264px] md:min-h-64'
        style={{
          background: `url("/images/get_app/showcase.webp") no-repeat top right/cover`,
          backgroundColor: "#292929",
        }}
      >
        {/* <Image
          src={showcase}
          alt='Showcase image'
          className='absolute top-0 right-0 left-0 bottom-0 object-cover'
        /> */}
        <div className='showcase_container mx-auto px-8 max-w-screen-xl'>
          {/* SHOWCASE CONTENT -DESKTOP*/}
          <div className='py-20 hidden lg:block'>
            <h1 className='w-full font-radialb text-5xl lg:text-6xl whitespace-pre-wrap max-w-md text-black'>
              The all-in-one shopping app.
            </h1>
            <p
              className='my-4 leading-relaxed text-base font-radialr text-black'
              style={{ maxWidth: "464px" }}
            >
              Track your payments, get exclusive deals and discover thousands of
              stores that let you pay in 4.
            </p>
            {/* QRCODE CONTAINER */}
            <div
              className='flex gap-6 items-center p-2 mt-10 rounded-2xl w-max'
              style={{ border: "1px solid #292929" }}
            >
              <div
                className='rounded-xl bg-white flex items-center justify-center w-max'
                style={{ padding: "4px" }}
              >
                <Image
                  src={qr}
                  alt='QR code'
                  width={74}
                  height={74}
                  className='rounded-xl'
                  priority={true}
                />
              </div>
              <p className='text-sm text-center text-titleDarkGrey line-clamp-3 max-w-20 font-radialb mr-2'>
                Get the Tabby app
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION: SHOWCASE CONTENT - MOBILE */}
      <div className='py-8 md:py-16 px-5 md:px-12 lg:hidden'>
        <h1 className='w-full font-radialb text-[44px] lg:text-6xl whitespace-pre-wrap lg:max-w-md leading-[1.1]'>
          The all-in-one shopping app.
        </h1>
        <p
          className='my-6 leading-relaxed text-base font-radialr'
          style={{ maxWidth: "464px" }}
        >
          Track your payments, get exclusive deals and discover thousands of
          stores that let you pay in 4.
        </p>
        {/* QRCODE CONTAINER */}
        <div
          className='hidden lg:flex gap-6 items-center p-2 mt-10 rounded-2xl w-max'
          style={{ border: "1px solid #292929" }}
        >
          <div
            className='rounded-xl bg-white flex items-center justify-center w-max'
            style={{ padding: "4px" }}
          >
            <Image
              src={qr}
              alt='QR code'
              width={74}
              height={74}
              className='rounded-xl'
            />
          </div>
          <p className='text-sm text-center text-titleDarkGrey line-clamp-3 max-w-20 font-radialb mr-2'>
            Get the Tabby app
          </p>
        </div>
        {/* CTA BUTTON - Appears for <1024px devices */}
        <a
          href='#'
          className='text-center font-radialb text-white hover:text-ctaBlue bg-ctaBlue hover:bg-ctaGreen px-8 py-3 rounded-full mt-8 md:w-max flex justify-center items-center gap-2'
        >
          Get the app{" "}
          <span>
            {" "}
            <svg
              stroke='currentColor'
              fill='none'
              strokeWidth='2'
              viewBox='0 0 24 24'
              strokeLinecap='round'
              strokeLinejoin='round'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <line x1='5' y1='12' x2='19' y2='12'></line>
              <polyline points='12 5 19 12 12 19'></polyline>
            </svg>
          </span>
        </a>
      </div>

      {/* SECTION: FEEL GOOD SHOPPING */}
      <section id='feel'>
        <div className='normal_container max-w-screen-xl mx-auto py-16 lg:py-20 px-8'>
          <h2 className='block lg:w-96 text-5xl font-radialb'>
            Feel good shopping.
          </h2>
          <div className='normal_grid grid grid-cols-1 lg:grid-cols-3 gap-20 pt-20'>
            {feelGridItems.map((each, index) => (
              <div key={index} className='space-y-3'>
                <Image
                  src={`/images/get_app/feel/${each.iconUrl}`}
                  alt={each.iconAlt}
                  className='block mb-5'
                  width={44}
                  height={44}
                />
                <h4 className='text-2xl leading-tight font-radialb'>
                  {each.title}
                </h4>
                <p
                  className='text-base font-radialr'
                  style={{ color: "#54545c" }}
                >
                  {each.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: WORKING */}
      <section id='working' className='py-16 lg:py-20'>
        <div className='working_container max-w-screen-xl mx-auto px-5 md:px-12'>
          <h2 className='font-radialb text-[44px] leading-[1.1] block w-full lg:w-4/12'>
            How the app <span className='block'>works.</span>
          </h2>

          <div className='working_grid mt-10 lg:mt-[84px] grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {workGridItems.map((each, index) => (
              <div className='work_card' key={index}>
                <Image
                  src={`/images/get_app/works/${each.image}`}
                  width={379}
                  height={408}
                  alt={each.title}
                />
                <h4 className='text-2xl font-radialb mt-5'>{each.title}</h4>
                <p className='mt-[12px] text-[#54545c]'>{each.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: FAVORITES */}
      <section id='favorites' className='my-16 lg:my-20'>
        <div className='mx-auto max-w-[1280px] px-5 md:px-12'>
          <h2 className='font-radialb text-5xl lg:text-6xl leading-tight'>
            Shop your favourites.
          </h2>
          <h4 className='mt-14 text-[28px] font-radialb mb-7'>
            Featured stores
          </h4>
          <CategoryCarousel data={featuredBrands} />
        </div>
      </section>

      {/* SECTION: CTA */}
      <section id='cta' className='mt-16'>
        <div className='card_container max-w-screen-xl mx-auto py-16 lg:py-20 px-5 md:px-9 flex flex-col lg:flex-row gap-10 justify-between lg:items-center'>
          <div className='card_image'>
            <Image
              src={levelImage}
              width={693}
              height={504}
              alt='Tabby Mobile App Mockup'
              className='min-w-80 max-w-full lg:max-w-[693px] w-full xl:min-w-[693px] rounded-sm'
            />
          </div>
          <div className='card_content max-w-xl'>
            <h2 className='font-radialb text-4xl md:text-5xl leading-tight md:leading-[1.1]'>
              All your shopping. One app.
            </h2>
            <p
              className='text-lg mt-6 mb-10 leading-[1.35]'
              style={{ color: "#54545c" }}
            >
              Find exclusive deals, track payments and level up your shopping.
            </p>
            <a
              href='#'
              className='block max-w-[322px] px-8 py-2.5 text-base text-center font-radialb rounded-full border-2 border-black hover:border-[#3eedbf]'
            >
              Download iOS
            </a>
            <a
              href='#'
              className='mt-3 block max-w-[322px] px-8 py-2.5 text-base text-center font-radialb rounded-full border-2 border-black hover:border-[#3eedbf]'
            >
              Download Android
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
