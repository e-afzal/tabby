// import qr from "@/public/images/home/showcase/qr_code.png";
import qr from "@/public/images/home/showcase/qr.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className='mt-20'>
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
          className='text-center bg-titleDarkGrey text-white font-radialb px-8 py-3 rounded-full mt-8 block w-max'
        >
          Get the app
        </a>
      </div>
    </main>
  );
}
