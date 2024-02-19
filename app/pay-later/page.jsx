import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// COMPONENTS
import CategoryCarousel from "../components/CategoryCarousel";

// ASSET IMPORTS
import ctaImage from "@/public/images/how_it_works/cta.webp";

// METADATA
export const metadata = {
  title: "Buy now pay later – How it works | Tabby",
  description:
    "Tabby lets you split your purchases into 4 interest-free payments. No hidden fees. Download the app today to get started.",
  openGraph: {
    title: "Buy now pay later – How it works | Tabby",
    description:
      "Tabby lets you split your purchases into 4 interest-free payments. No hidden fees. Download the app today to get started.",
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

export default function PayLater() {
  const workGridItems = {
    online: [
      {
        image: "find.webp",
        title: "Find your favourite brands",
        description:
          "Shop your favourites or discover new brands that let you get the most out of shopping. You'll find Adidas, IKEA, Centrepoint, Golden Scent and hundreds more.",
      },
      {
        image: "choose.webp",
        title: "Choose Tabby at checkout",
        description:
          "Add what you want to your cart and choose Tabby at checkout. Sign up, link any card and get approved instantly.",
      },
      {
        image: "split.webp",
        title: "Split in 4 monthly payments",
        description:
          "Pay only 25% upfront and we'll remind you about the rest. Completely free, no interest.",
      },
    ],
    instore: [
      {
        image: "scan.webp",
        title: "Scan QR code",
        description:
          "To get started, scan the Tabby QR code when you're at the store.",
      },
      {
        image: "signup.webp",
        title: "Sign up to Tabby",
        description:
          "Create an account and link any debit or credit card to get approved instantly",
      },
      {
        image: "checkout.webp",
        title: "Checkout at the cashier",
        description:
          "Pay only 25% upfront and we'll remind you about the rest. Completely free, no interest.",
      },
    ],
  };
  const laterGridItems = [
    {
      iconUrl: "payments.svg",
      iconAlt: "Shopping bag icon",
      title: "Get it now, pay later",
      description: "Shop for what you love now and spread out your payments.",
    },
    {
      iconUrl: "interest.svg",
      iconAlt: "Percentage icon",
      title: "No interest or fees",
      description: "You'll never pay extra when you pay on time.",
    },
    {
      iconUrl: "card.svg",
      iconAlt: "Card icon",
      title: "Pick a card, any card",
      description: "Link any debit or credit card and get instant approval.",
    },
  ];
  const faqAccordion = [
    {
      question: "How does Split in 4 work?",
      answer:
        "When you Split in 4, we split your purchase into 4 equal payments. We collect the first payment when your order ships. The remaining 3 payments are collected every month. There's no interest, ever.",
    },
    {
      question: "What happens if I miss a payment?",
      answer:
        "Tabby is committed to responsible spending which is why every purchase is carefully considered before they are approved. You will receive regular reminders before any due payments to avoid missing them. If Tabby is unable to collect payments on the scheduled day, you will no longer be able to make purchases with Tabby until the dues are paid. Learn more about collection charges on our help center.",
    },
    {
      question: "How does Tabby make money?",
      answer:
        "Tabby doesn't charge interest or fees to shoppers. Retailers pay Tabby so they can bring their customers an unparalleled shopping experience.",
    },
  ];
  const shopBrands = [
    {
      brand: "noon",
      imageMain: "/images/how_it_works/shop/noon.webp",
      imageBrand: "/images/how_it_works/shop/noon_logo.webp",
      inStore: false,
      split: true,
      deals: false,
    },
    {
      brand: "SHEIN",
      imageMain: "/images/how_it_works/shop/shein.webp",
      imageBrand: "/images/how_it_works/shop/shein_logo.webp",
      inStore: false,
      split: true,
      deals: true,
    },
    {
      brand: "6thStreet.com",
      imageMain: "/images/how_it_works/shop/6s.webp",
      imageBrand: "/images/how_it_works/shop/6s_logo.webp",
      inStore: true,
      split: true,
      deals: false,
    },
    {
      brand: "Sun & Sands Sports",
      imageMain: "/images/how_it_works/shop/sass.webp",
      imageBrand: "/images/how_it_works/shop/sass_logo.webp",
      inStore: true,
      split: true,
      deals: true,
    },
    {
      brand: "SIVVI",
      imageMain: "/images/how_it_works/shop/sivvi.webp",
      imageBrand: "/images/how_it_works/shop/sivvi_logo.webp",
      inStore: false,
      split: true,
      deals: true,
    },
    {
      brand: "Ounass",
      imageMain: "/images/how_it_works/shop/ounass.webp",
      imageBrand: "/images/how_it_works/shop/ounass_logo.webp",
      inStore: false,
      split: true,
      deals: true,
    },
    {
      brand: "Level Shoes",
      imageMain: "/images/how_it_works/shop/levelshoes.webp",
      imageBrand: "/images/how_it_works/shop/levelshoes_logo.webp",
      inStore: true,
      split: true,
      deals: true,
    },
    {
      brand: "FACES",
      imageMain: "/images/how_it_works/shop/faces.webp",
      imageBrand: "/images/how_it_works/shop/faces_logo.webp",
      inStore: true,
      split: true,
      deals: false,
    },
    {
      brand: "H&M",
      imageMain: "/images/how_it_works/shop/ham.webp",
      imageBrand: "/images/how_it_works/shop/ham_logo.webp",
      inStore: false,
      split: true,
      deals: false,
    },
    {
      brand: "Vogacloset",
      imageMain: "/images/how_it_works/shop/vogacloset.webp",
      imageBrand: "/images/how_it_works/shop/vogacloset_logo.webp",
      inStore: false,
      split: true,
      deals: true,
    },
    {
      brand: "Home Box",
      imageMain: "/images/how_it_works/shop/homebox.webp",
      imageBrand: "/images/how_it_works/shop/homebox_logo.webp",
      inStore: true,
      split: true,
      deals: false,
    },
    {
      brand: "Max",
      imageMain: "/images/how_it_works/shop/max.webp",
      imageBrand: "/images/how_it_works/shop/max_logo.webp",
      inStore: true,
      split: true,
      deals: true,
    },
    {
      brand: "IKEA",
      imageMain: "/images/how_it_works/shop/ikea.webp",
      imageBrand: "/images/how_it_works/shop/ikea_logo.webp",
      inStore: true,
      split: true,
      deals: false,
    },
  ];
  return (
    <main className='mt-20'>
      {/* SECTION: SHOWCASE */}
      <section
        id='showcase'
        className='min-w-full min-h-64'
        style={{
          background: `url("/images/how_it_works/showcase.webp") no-repeat right 0%/cover`,
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
          <div className='py-20 hidden lg:block max-w-[465px]'>
            <h1 className='mb-6 w-full font-radialb text-5xl lg:text-6xl whitespace-pre-wrap'>
              The best things come in small payments
            </h1>
            <p className='mb-4 leading-relaxed text-base font-radialr'>
              Tabby lets you split your purchases into 4 interest-free payments,
              online and in-store.
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
      <div className='py-[32px] md:py-16 px-5 md:px-12 lg:hidden'>
        <h1 className='w-full font-radialb text-[44px] leading-[48px] lg:text-6xl whitespace-pre-wrap lg:max-w-md'>
          The best things come in small payments
        </h1>
        <p className='my-6 leading-relaxed text-base font-radialr max-w-[465px]'>
          Tabby lets you split your purchases into 4 interest-free payments,
          online and in-store.
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

      {/* SECTION: PAY LATER */}
      <section id='later'>
        <div className='later_container max-w-screen-xl mx-auto py-16 lg:py-20 px-5 md:px-12'>
          <h2 className='block lg:w-96 text-[44px] leading-[48px] font-radialb'>
            Pay later with Tabby
          </h2>
          <div className='later_grid grid grid-cols-1 lg:grid-cols-3 gap-20 pt-20'>
            {laterGridItems.map((each, index) => (
              <div key={index} className='space-y-3'>
                <Image
                  src={`/images/how_it_works/${each.iconUrl}`}
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
          <h2 className='font-radialb text-[44px] leading-[1.1] block w-full'>
            How it works.
          </h2>
          <Tabs defaultValue='online' className='w-full pt-5'>
            <TabsList className='bg-white shadow-none gap-7'>
              <TabsTrigger
                value='online'
                className='font-radialb text-base p-0 border-b-4 border-solid border-[#e5e5e5] data-[state=active]:border-[#3eedbf] data-[state=active]:shadow-none hover:border-[#3eedbf] rounded-none pb-2'
              >
                Shop online
              </TabsTrigger>
              <TabsTrigger
                value='instore'
                className='font-radialb text-base p-0 border-b-4 border-solid border-[#e5e5e5] data-[state=active]:border-[#3eedbf] data-[state=active]:shadow-none hover:border-[#3eedbf] rounded-none pb-2'
              >
                Shop in-store
              </TabsTrigger>
            </TabsList>
            <TabsContent value='online'>
              <div className='working_grid mt-9 md:mt-16  grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {workGridItems.online.map((each, index) => (
                  <div className='work_card' key={index}>
                    <Image
                      src={`/images/how_it_works/works/online/${each.image}`}
                      width={379}
                      height={408}
                      alt={each.title}
                    />
                    <h4 className='text-2xl font-radialb mt-5'>{each.title}</h4>
                    <p className='mt-[12px] text-[#54545c]'>
                      {each.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value='instore'>
              <div className='working_grid mt-9 md:mt-16  grid grid-cols-1 lg:grid-cols-3 gap-10'>
                {workGridItems.instore.map((each, index) => (
                  <div className='work_card' key={index}>
                    <Image
                      src={`/images/how_it_works/works/instore/${each.image}`}
                      width={379}
                      height={408}
                      alt={each.title}
                    />
                    <h4 className='text-2xl font-radialb mt-5'>{each.title}</h4>
                    <p className='mt-[12px] text-[#54545c]'>
                      {each.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* SECTION: SHOP */}
      <section id='shop' className='py-16 lg:py-20 px-5 md:px-12'>
        <div className='mx-auto max-w-[1215px]'>
          <h4 className='text-[28px] font-radialb mb-7'>Shop in 4</h4>
          <CategoryCarousel data={shopBrands} />
        </div>
      </section>

      {/* SECTION: FAQ */}
      <section id='faq'>
        <div className='faq_container px-5 md:px-12 py-16 lg:py-20'>
          <h2 className='text-[28px] font-radialb lg:text-[44px] lg:text-center'>
            Frequently asked questions
          </h2>
          <p className='text-[20px] text-[#54545c] lg:text-center lg:mt-2'>
            You have questions? We've got some answers.
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
      <section id='cta'>
        <div className='card_container max-w-screen-xl mx-auto py-16 lg:py-20 px-5 md:px-12 flex flex-col lg:flex-row gap-10 justify-between lg:items-start'>
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
              Take shopping to the next level
            </h2>
            <p
              className='text-lg mt-3 mb-10 leading-[1.35]'
              style={{ color: "#54545c" }}
            >
              With the Tabby app, you can shop now, pay later and earn cash –
              with no interest, fees or hidden costs of any kind.
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
