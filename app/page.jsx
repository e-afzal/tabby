import Image from "next/image";

// ASSET IMPORTS
import chevron from "@/public/images/home/shop/chevron-right.svg";
import qr from "@/public/images/home/showcase/qr.jpg";
import cardImage from "@/public/images/home/pay/showcase.webp";
import levelImage from "@/public/images/home/level/showcase.webp";
import businessImage from "@/public/images/home/business/showcase.webp";

// COMPONENTS
import DealsCarousel from "@/app/components/DealsCarousel";
import CategoryCarousel from "@/app/components/CategoryCarousel";
import CategoriesCarousel from "@/app/components/CategoriesCarousel";

// DATA
import data from "@/app/data/home.js";

export default function Home() {
  const normalGridItems = [
    {
      iconUrl: "payments.svg",
      iconAlt: "Shopping bag icon",
      title: "4 interest-free payments",
      description:
        "Shop now and pay later by choosing Tabby at checkout to split your purchases into 4 interest-free payments.",
    },
    {
      iconUrl: "interest.svg",
      iconAlt: "Percentage icon",
      title: "No interest or fees",
      description:
        "Built on trust. Not interest. You’ll never pay extra when you pay on time. No interest. No fees. No catch.",
    },
    {
      iconUrl: "deals.svg",
      iconAlt: "Gift icon",
      title: "The best deals",
      description:
        "You’ll never miss another deal or coupon with daily updates on your favourite brands, including Tabby exclusives.",
    },
  ];
  return (
    <main className='mt-20'>
      {/* TABBY SHOP STRIP */}
      <section id='shop' className='w-full'>
        <div className='shop_container bg-titleDarkGrey px-5 md:px-0 overflow-hidden'>
          <a
            href='#'
            className='flex gap-4 items-center justify-center min-h-[40px] md:min-h-[56px] max-h-[40px] md:max-h-[56px] max-w-fit mx-auto'
          >
            <p className='text-white font-radialb text-sm md:text-base truncate w-full'>
              Introducing Tabby Shop. Discover and track hundred of thousands of
              items in one place.{" "}
            </p>
            <span>
              <Image
                src={chevron}
                alt='Link to Tabby shop'
                width={24}
                height={24}
              />
            </span>
          </a>
        </div>
      </section>

      {/* SECTION: SHOWCASE */}
      <section
        id='showcase'
        className='min-w-full min-h-64'
        style={{
          background: `url("/images/home/showcase/showcase.jpg") no-repeat 50% 0%/cover`,
          backgroundColor: "#292929",
        }}
      >
        <div className='showcase_container mx-auto px-8 max-w-screen-xl'>
          {/* SHOWCASE CONTENT -DESKTOP*/}
          <div className='py-20 hidden lg:block'>
            <h1 className='w-full font-radialb text-5xl lg:text-6xl whitespace-pre-wrap max-w-md'>
              Get more time to pay.
            </h1>
            <p
              className='my-4 leading-relaxed text-base font-radialr'
              style={{ maxWidth: "464px" }}
            >
              With Tabby, you can split your purchases into 4 interest-free
              payments, online or in-store. Shariah-Compliant.
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
      <div className='py-12 md:py-16 px-5 md:px-12 lg:hidden'>
        <h1 className='w-full font-radialb text-5xl lg:text-6xl whitespace-pre-wrap lg:max-w-md'>
          Get more time to pay.
        </h1>
        <p
          className='my-6 leading-relaxed text-base font-radialr'
          style={{ maxWidth: "464px" }}
        >
          With Tabby, you can split your purchases into 4 interest-free
          payments, online or in-store. Shariah-Compliant.
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
          className='text-center bg-titleDarkGrey text-white font-radialb px-8 py-3 rounded-full mt-8 md:w-max flex justify-center items-center gap-2'
        >
          Get the app{" "}
          <span>
            {" "}
            <Image
              src={chevron}
              alt='Link to Tabby App Download'
              width={20}
              height={20}
              className='mt-[2px]'
            />
          </span>
        </a>
      </div>

      {/* SECTION: NEW NORMAL */}
      <section id='normal'>
        <div className='normal_container max-w-screen-xl mx-auto py-16 lg:py-20 px-8'>
          <h2 className='block lg:w-96 text-5xl font-radialb'>
            Shopping's new normal.
          </h2>
          <div className='normal_grid grid grid-cols-1 lg:grid-cols-3 gap-20 pt-20'>
            {normalGridItems.map((each, index) => (
              <div key={index} className='space-y-3'>
                <Image
                  src={`/images/home/features/${each.iconUrl}`}
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

      {/* SECTION: TABBY CARD */}
      <section id='card'>
        <div className='card_container max-w-screen-xl mx-auto py-16 lg:py-20 px-8 flex flex-col-reverse lg:flex-row gap-10 justify-between items-center'>
          <div className='card_content max-w-xl'>
            <h2 className='font-radialb text-4xl md:text-5xl leading-tight md:leading-tight'>
              Take Pay in 4 anywhere with Tabby Card
            </h2>
            <p className='text-xl mt-6 mb-10'>
              Tabby Card lets you Pay in 4 for everyday shopping, anywhere VISA
              is accepted. No interest or fees.
            </p>
            {/* CTA BUTTON - Appears for <1024px devices */}
            <a
              href='#'
              className='text-center text-white font-radialb tracking-wide px-9 py-3 rounded-full mt-8 md:w-max bg-ctaBlue hover:bg-ctaGreen hover:text-ctaBlue flex items-center justify-center gap-2'
            >
              Learn more{" "}
              <span>
                {" "}
                <Image
                  src={chevron}
                  alt='Link to Tabby App Download'
                  width={20}
                  height={20}
                  className='mt-[1px]'
                />
              </span>
            </a>
          </div>
          <div className='card_image'>
            <Image
              src={cardImage}
              alt='Tabby Mobile App Mockup'
              className='min-w-80 w-full max-w-xl'
            />
          </div>
        </div>
      </section>

      {/* SECTION: TOP DEALS */}
      <section id='deals' className='pt-16 px-5'>
        <div className='mx-auto max-w-[1215px]'>
          <h4 className='text-[28px] font-radialb mb-7'>Top Deals</h4>
          <DealsCarousel />
        </div>
      </section>

      {/* SECTION: FASHION */}
      <section id='fashion' className='mt-24 px-5'>
        <div className='mx-auto max-w-[1215px]'>
          <h4 className='text-[28px] font-radialb mb-7'>Fashion</h4>
          <CategoryCarousel data={data.fashion} />
        </div>
      </section>

      {/* SECTION: BEAUTY */}
      <section id='beauty' className='mt-24 px-5'>
        <div className='mx-auto max-w-[1215px]'>
          <h4 className='text-[28px] font-radialb mb-7'>Beauty</h4>
          <CategoryCarousel data={data.beauty} />
        </div>
      </section>

      {/* SECTION: HOME */}
      <section id='home' className='mt-24 px-5'>
        <div className='mx-auto max-w-[1215px]'>
          <h4 className='text-[28px] font-radialb mb-7'>Home</h4>
          <CategoryCarousel data={data.home} />
        </div>
      </section>

      {/* SECTION: KIDS & TOYS */}
      <section id='kids' className='mt-24 px-5'>
        <div className='mx-auto max-w-[1215px]'>
          <h4 className='text-[28px] font-radialb mb-7'>Kids & Toys</h4>
          <CategoryCarousel data={data.kids} />
        </div>
      </section>

      {/* SECTION: SHOP BY CATEGORY */}
      <section id='categories' className='mt-24 px-5'>
        <div className='mx-auto max-w-[1215px]'>
          <h4 className='text-[28px] font-radialb mb-7'>Shop by Category</h4>
          <CategoriesCarousel data={data.categories} />
          <a
            href='#'
            className='block text-center mx-auto text-titleDarkGrey font-radialb tracking-wide min-w-[167px] py-[10px] my-20 rounded-full md:w-max bg-[#3eedbf] hover:bg-ctaBlue hover:text-white'
          >
            Shop now
          </a>
        </div>
      </section>

      {/* SECTION: LEVEL */}
      <section id='level' className='mt-16'>
        <div className='card_container max-w-screen-xl mx-auto py-16 lg:py-20 px-8 flex flex-col-reverse lg:flex-row gap-10 justify-between items-center'>
          <div className='card_content max-w-xl'>
            <h2 className='font-radialb text-4xl md:text-5xl leading-tight md:leading-tight'>
              Take shopping to the next level.
            </h2>
            <p className='text-lg mt-6 mb-10' style={{ color: "#54545c" }}>
              With the Tabby app, you can shop now, pay later and earn cash -
              with no interest, fees or hidden costs of any kind.
            </p>
            {/* CTA BUTTON - Appears for <1024px devices */}
            <a
              href='#'
              className='text-center text-white font-radialb tracking-wide px-9 py-3 rounded-full mt-8 md:w-max bg-ctaBlue hover:bg-ctaGreen hover:text-ctaBlue flex justify-center items-center gap-2'
            >
              Get the app{" "}
              <span>
                <svg
                  className='w-5 h-5 stroke-white hover:stroke-ctaBlue'
                  stroke='currentColor'
                  fill='none'
                  stroke-width='2'
                  viewBox='0 0 24 24'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <line x1='5' y1='12' x2='19' y2='12'></line>
                  <polyline points='12 5 19 12 12 19'></polyline>
                </svg>
              </span>
            </a>
          </div>
          <div className='card_image'>
            <Image
              src={levelImage}
              alt='Tabby Mobile App Mockup'
              className='min-w-80 w-full max-w-xl lg:min-w-[525px]'
            />
          </div>
        </div>
      </section>

      {/* SECTION: BUSINESS */}
      <section id='business'>
        <div className='card_container max-w-screen-xl mx-auto py-16 lg:py-20 px-8 flex flex-col lg:flex-row gap-10 justify-between items-center'>
          <div className='card_image'>
            <Image
              src={businessImage}
              alt='Tabby Mobile App Mockup'
              className='min-w-80 w-full max-w-xl lg:min-w-[525px]'
            />
          </div>
          <div className='card_content max-w-xl'>
            <h2 className='font-radialb text-4xl md:text-5xl leading-tight md:leading-tight'>
              Looking to sell with Tabby?
            </h2>
            <p className='text-lg mt-6 mb-10' style={{ color: "#54545c" }}>
              Tabby's shopping experience removes price as a barrier. Turning
              browsers into buyers, increasing average order value, and
              expanding your customer base.
            </p>
            {/* CTA BUTTON - Appears for <1024px devices */}
            <a
              href='#'
              className='text-center text-white font-radialb tracking-wide px-9 py-3 rounded-full mt-8 md:w-max bg-ctaBlue hover:bg-ctaGreen hover:text-ctaBlue flex justify-center items-center gap-2'
            >
              Tabby for Business
              <span>
                {" "}
                <Image
                  src={chevron}
                  alt='Link to Tabby App Download'
                  width={20}
                  height={20}
                  className='mt-[1px]'
                />
              </span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
