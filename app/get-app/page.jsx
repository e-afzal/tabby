import Image from "next/image";

// ASSET IMPORTS
import qr from "@/public/images/home/showcase/qr.jpg";

export default function GetApp() {
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
        <h1 className='w-full font-radialb text-[44px] lg:text-6xl whitespace-pre-wrap lg:max-w-md'>
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
    </main>
  );
}
