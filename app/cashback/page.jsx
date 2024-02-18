import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// ASSET IMPORT
import ctaImage from "@/public/images/cashback/level.webp";

// METADATA
export const metadata = {
  title: "Shop, get cashback | Tabby",
  description:
    "Shop at brands you love and earn cash you can withdraw. Whether you pay with Tabby or not. That's real money, not another loyalty program you'll never use. Download the app today to get started.",
  openGraph: {
    title: "Shop, get cashback | Tabby",
    description:
      "Shop at brands you love and earn cash you can withdraw. Whether you pay with Tabby or not. That's real money, not another loyalty program you'll never use. Download the app today to get started.",
    url: "https://tabby-ead.vercel.app/cashback",
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

export default function Cashback() {
  const workGridItems = [
    {
      image: "signup.webp",
      title: "Find your favourite brands",
      description: "Create a Tabby account, it's completely free and secure.",
    },
    {
      image: "shop.webp",
      title: "Shop at brands on Tabby",
      description:
        "Visit a store you love on Tabby's website or app and shop like you normally would. Earn cash whether you pay with Tabby or not.",
    },
    {
      image: "cash.webp",
      title: "Get cash or pay your next bill",
      description:
        "Withdraw real money you've earned or choose to settle an upcoming bill on Tabby.",
    },
  ];
  const faqAccordion = [
    {
      question: "How does Tabby cashback work?",
      answer:
        "Start by clicking a store you love on Tabby's website or app and shop like you normally would. When you shop from Tabby at partnering cashback stores, we'll automatically add cashback into your account. You can earn cash whether you pay with Tabby or not.",
    },
    {
      question: "How can Tabby afford to give away cash?",
      answer:
        "Stores pay us a commission for sending our friends to their websites, and we share it with you. It’s that easy.",
    },
    {
      question: "Where do I see how much cashback I earned?",
      answer:
        "Get the app and visit your account to verify that you earned cashback on a purchase. You might not see cashback immediately at the time of purchase because it can take time for the store to notify us about an order you placed. Depending on the store, this can take from a few hours to several days.",
    },
    {
      question: "Can I earn cashback without paying with Tabby?",
      answer:
        "Yes! If you shop at cashback participating stores from the Tabby website or app, you'll earn cash whether you pay with Tabby or not.",
    },
    {
      question: "How do you know if I’ve made a purchase?",
      answer:
        "We can track your purchases when you start your shopping journey from Tabby's website or app at participating stores. So it's important to shop via Tabby to make sure you earn cashback.",
    },
    {
      question: "Can I earn cashback and use a coupon code?",
      answer:
        "Currently you can only earn cashback or use a coupon code, not both.",
    },
  ];

  return (
    <main className='mt-20'>
      {/* SECTION: SHOWCASE */}
      <section
        id='showcase'
        className='min-w-full min-h-64'
        style={{
          background: `url("/images/cashback/showcase.webp") no-repeat right 0%/cover`,
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
              Shop and earn real cash.
            </h1>
            <p
              className='my-4 leading-relaxed text-base font-radialr'
              style={{ maxWidth: "464px" }}
            >
              Shop at brands you love and earn cash you can withdraw. Whether
              you pay with Tabby or not. That's real money, not another loyalty
              program you'll never use.
            </p>
            {/* CTA BTNS container */}
            <div className='cta_flex_container mt-10 flex items-center gap-7'>
              <a
                href='#'
                className='text-center font-radialb text-white hover:text-ctaBlue bg-ctaBlue hover:bg-ctaGreen px-8 py-[10px] rounded-full md:w-max flex justify-center items-center gap-2 border-transparent border-solid border-2'
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
              <a
                href='#'
                className='text-center font-radialb text-black border-black border-solid border-2 px-8 py-[10px] rounded-full md:w-max flex justify-center items-center gap-2'
              >
                Shop now
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
          </div>
        </div>
      </section>
      {/* SECTION: SHOWCASE CONTENT - MOBILE */}
      <div className='py-12 md:py-16 px-5 md:px-12 lg:hidden'>
        <h1 className='w-full font-radialb text-5xl lg:text-6xl whitespace-pre-wrap lg:max-w-md'>
          Shop and earn real cash.
        </h1>
        <p
          className='my-6 leading-relaxed text-base font-radialr'
          style={{ maxWidth: "464px" }}
        >
          Shop at brands you love and earn cash you can withdraw. Whether you
          pay with Tabby or not. That's real money, not another loyalty program
          you'll never use.
        </p>

        {/* CTA BUTTON - Appears for <1024px devices */}
        <a
          href='#'
          className='text-center font-radialb text-white hover:text-ctaBlue bg-ctaBlue hover:bg-ctaGreen px-8 py-3 rounded-full mt-8 min-w-[320px] md:w-max flex justify-center items-center gap-2'
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
        <a
          href='#'
          className='text-center font-radialb text-titleDarkGrey border-black border-solid border-2  px-8 py-3 rounded-full mt-5 min-w-[320px] md:w-max flex justify-center items-center gap-2'
        >
          Shop now
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

      {/* SECTION: WORKING */}
      <section id='working' className='py-16 lg:py-20'>
        <div className='working_container max-w-screen-xl mx-auto px-5 md:px-12'>
          <h2 className='font-radialb text-[44px] leading-[1.1] block w-full'>
            How Tabby<span className='block'> cashback works.</span>
          </h2>

          <div className='working_grid mt-10 lg:mt-[84px] grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {workGridItems.map((each, index) => (
              <div className='work_card' key={index}>
                <Image
                  src={`/images/cashback/works/${each.image}`}
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

      {/* SECTION: FAQ */}
      <section id='faq'>
        <div className='faq_container px-5'>
          <h2 className='text-[28px] font-radialb lg:text-[44px] lg:text-center'>
            Frequently asked questions
          </h2>
          <p className='text-[20px] text-[#54545c] lg:text-center lg:mt-2'>
            Learn more about Tabby cashback.
          </p>

          {/* ACCORDION */}
          <Accordion
            type='single'
            collapsible
            className='mt-8 lg:max-w-[585px] lg:mx-auto'
          >
            {faqAccordion.map((each, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className='text-2xl lg:text-[28px] font-radialb text-left'>
                  {each.question}
                </AccordionTrigger>
                <AccordionContent className='text-base text-[#54545c]'>
                  {each.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SECTION: CTA */}
      <section id='cta' className='mt-16'>
        <div className='card_container max-w-screen-xl mx-auto py-16 lg:py-20 px-5 md:px-9 flex flex-col lg:flex-row gap-10 justify-between lg:items-center'>
          <div className='card_image'>
            <Image
              src={ctaImage}
              width={693}
              height={504}
              alt='Tabby Mobile App Mockup'
              className='min-w-80 max-w-full lg:max-w-[693px] w-full xl:min-w-[693px] rounded-sm'
            />
          </div>
          <div className='card_content max-w-xl'>
            <h2 className='font-radialb text-[28px] md:text-5xl leading-tight md:leading-[1.1]'>
              Take your shopping to the next level.
            </h2>
            <p
              className='text-lg mt-3 mb-10 leading-[1.35]'
              style={{ color: "#54545c" }}
            >
              Track your purchases, upcoming bills and cash earned in one place.
            </p>
            <a
              href='/get-app'
              className='block md:max-w-[322px] px-8 py-2.5 text-base text-center font-radialb rounded-full border-2 border-black hover:border-[#3eedbf]'
            >
              Get the app
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
