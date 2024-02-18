import Image from "next/image";

// COMPONENTS
import RolesFilter from "../components/careers/RolesFilter";

// ASSETS IMPORT
import believe from "@/public/images/careers/believe.webp";

export default function Careers() {
  return (
    <main className='mt-20'>
      {/* SECTION: SHOWCASE */}
      <section
        id='showcase'
        className='min-w-full min-h-64'
        style={{
          background: `url("/images/careers/showcase.webp") no-repeat 50% 0%/cover`,
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
            <h1 className='w-full font-radialb text-5xl lg:text-6xl whitespace-pre-wrap max-w-md'>
              Quit your day job.
            </h1>
            <p
              className='mt-8 mb-10 leading-relaxed text-base font-radialr'
              style={{ maxWidth: "464px" }}
            >
              We are on a mission to create financial freedom in the way people
              shop, earn and save by reshaping their relationship with money.
              And we’d like your help.
            </p>
            <a
              href='/careers#careers'
              className='py-[14px] px-8 bg-[#3eedbf] hover:bg-black text-base text-titleDarkGrey hover:text-white font-radialb rounded-full'
            >
              Explore roles
            </a>
          </div>
        </div>
      </section>
      {/* SECTION: SHOWCASE CONTENT - MOBILE */}
      <div className='py-8 md:py-16 px-5 md:px-12 lg:hidden'>
        <h1 className='w-full font-radialb text-[44px] leading-[48px] lg:text-6xl whitespace-pre-wrap lg:max-w-md'>
          Quit your day job.
        </h1>
        <p
          className='my-8 leading-relaxed text-base font-radialr'
          style={{ maxWidth: "464px" }}
        >
          We are on a mission to create financial freedom in the way people
          shop, earn and save by reshaping their relationship with money. And
          we’d like your help.
        </p>

        {/* CTA BUTTON - Appears for <1024px devices */}
        <a
          href='#'
          className='text-center font-radialb text-titleDarkGrey hover:text-white bg-[#3eedbf] hover:bg-black px-8 py-3 rounded-full mt-8 md:w-max flex justify-center items-center gap-2'
        >
          Explore roles
        </a>
      </div>

      {/* SECTION: BELIEVE */}
      <section id='believe'>
        <div className='believe_container px-5 md:px-12 py-16 max-w-7xl mx-auto'>
          <h2 className='text-titleDarkGrey font-radialb text-[44px] leading-[44px]'>
            What we believe in.
          </h2>
          <div className='believe_grid grid grid-cols-1 lg:grid-cols-3 gap-20 pt-20'>
            <div className='grid_card'>
              <h4 className='font-radialb text-titleDarkGrey text-[28px] '>
                Meaningful impact
              </h4>
              <p className='text-[#54545c] mt-3'>
                We do things for impact not for output. Our work has the most
                meaning when people use the tools we build to improve their
                daily lives.
              </p>
            </div>
            <div className='grid_card'>
              <h4 className='font-radialb text-titleDarkGrey text-[28px] '>
                The golden rule
              </h4>
              <p className='text-[#54545c] mt-3'>
                Do unto others as you would have them do unto you. We treat each
                other with respect and act with integrity with everything that
                we do. This shines through into the products we craft, and the
                teams that we build.
              </p>
            </div>
            <div className='grid_card'>
              <h4 className='font-radialb text-titleDarkGrey text-[28px] '>
                Unapologetic curiosity
              </h4>
              <p className='text-[#54545c] mt-3'>
                Work just can’t just be about solving problems. We want to
                create joy and inspire – show the world what could be. Even if
                it means taking risks and not always choosing the safest path
                forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: IMAGE */}
      <div className='image_container'>
        <Image
          src={believe}
          alt='Employees at Tabby'
          className='min-w-full min-h-[265px] md:min-h-[480px] object-cover'
        />
      </div>

      {/* SECTION: WHY */}
      <section id='why'>
        <div className='why_container px-5 md:px-12 py-16 max-w-7xl mx-auto'>
          <h2 className='text-titleDarkGrey font-radialb text-[44px] leading-[44px]'>
            Why Tabby
          </h2>
          <div className='why_grid grid grid-cols-1 lg:grid-cols-3 gap-20 pt-20'>
            <div className='grid_card'>
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='2'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='block text-5xl'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z'></path>
                <line x1='4' y1='22' x2='4' y2='15'></line>
              </svg>
              <h4 className='mt-3 font-radialb text-titleDarkGrey text-[28px] '>
                Ownership
              </h4>
              <p className='text-[#54545c] mt-3'>
                We encourage everyone to think and make decisions like Tabby was
                their own business, well because it is. Our employee stock
                options programme is available for everyone.
              </p>
            </div>
            <div className='grid_card'>
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='2'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='block text-5xl'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <polyline points='16 3 21 3 21 8'></polyline>
                <line x1='4' y1='20' x2='21' y2='3'></line>
                <polyline points='21 16 21 21 16 21'></polyline>
                <line x1='15' y1='15' x2='21' y2='21'></line>
                <line x1='4' y1='4' x2='9' y2='9'></line>
              </svg>
              <h4 className='mt-3 font-radialb text-titleDarkGrey text-[28px] '>
                Flexibility
              </h4>
              <p className='text-[#54545c] mt-3'>
                We trust our team to do what they say they are going to do and
                acknowledge that different people work in different ways. So we
                don’t have fixed hours or spaces, just clear expectations of
                what success looks like, and the freedom for our team to decide
                how to achieve it.
              </p>
            </div>
            <div className='grid_card'>
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='2'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='block text-5xl'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'></path>
                <circle cx='8.5' cy='7' r='4'></circle>
                <line x1='20' y1='8' x2='20' y2='14'></line>
                <line x1='23' y1='11' x2='17' y2='11'></line>
              </svg>
              <h4 className='mt-3 font-radialb text-titleDarkGrey text-[28px] '>
                Benefits
              </h4>
              <p className='text-[#54545c] mt-3'>
                We offer competitive medical, dental, vision insurance for
                Dubai, Egypt and Saudi Arabia based employees. This includes
                medical, dental, and vision premiums.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ROLES */}
      <section id='roles'>
        <div className='roles_title_container px-5 md:px-12 py-16 max-w-7xl mx-auto'>
          <h2 className='text-titleDarkGrey font-radialb text-[44px] leading-[44px]'>
            Expand financial inclusivity in MENA
          </h2>
          <p className='mt-6'>
            Showing open roles. Use filters to help you narrow down a role
            that’s right for you.
          </p>
        </div>
        {/* CLIENT INPUT BASED: ROLES FILTER AND RESULTS */}
        <div className='roles_filter_container px-5 md:px-12 pb-16 max-w-7xl mx-auto'>
          <RolesFilter />
        </div>
      </section>
    </main>
  );
}
