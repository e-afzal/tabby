//? LOCATION: Homepage
//! BIG NOTE: Implemented solution from video titled "Resolving Hydration error in Next.js" by Rahul in Web3
import Image from "next/image";
// import dynamic from "next/dynamic";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function DealsCarousel() {
  // CAROUSEL DATA
  const demoData = [
    {
      brand: "AliExpress",
      imageMain: "/images/home/top_deals/aliexpress.webp",
      imageBrand: "/images/home/top_deals/aliexpress_logo.webp",
      titleP1: "Up to",
      titleP2: "6.9% Cashback",
      url: "#",
    },
    {
      brand: "Amazon",
      imageMain: "/images/home/top_deals/amazon.webp",
      imageBrand: "/images/home/top_deals/amazon_logo.webp",
      titleP1: "Up to",
      titleP2: "4.5% Cashback",
      url: "#",
    },
    {
      brand: "Dropkick",
      imageMain: "/images/home/top_deals/dropkick.webp",
      imageBrand: "/images/home/top_deals/dropkick_logo.webp",
      titleP1: "",
      titleP2: "25% OFF",
      url: "#",
    },
    {
      brand: "Vogacloset",
      imageMain: "/images/home/top_deals/vogacloset.webp",
      imageBrand: "/images/home/top_deals/vogacloset_logo.webp",
      titleP1: "",
      titleP2: "+22% OFF",
      url: "#",
    },
    {
      brand: "Styli",
      imageMain: "/images/home/top_deals/styli.webp",
      imageBrand: "/images/home/top_deals/styli_logo.webp",
      titleP1: "",
      titleP2: "10% OFF",
      url: "#",
    },
    {
      brand: "Max",
      imageMain: "/images/home/top_deals/max.webp",
      imageBrand: "/images/home/top_deals/max_logo.webp",
      titleP1: "",
      titleP2: "10% OFF",
      url: "#",
    },
    {
      brand: "Swarovski",
      imageMain: "/images/home/top_deals/swarovski.webp",
      imageBrand: "/images/home/top_deals/swarovski_logo.webp",
      titleP1: "",
      titleP2: "5% OFF",
      url: "#",
    },
    {
      brand: "First Cry",
      imageMain: "/images/home/top_deals/firstcry_deals.webp",
      imageBrand: "/images/home/top_deals/firstcry_logo.webp",
      titleP1: "",
      titleP2: "+10% OFF",
      url: "#",
    },
    {
      brand: "GAP",
      imageMain: "/images/home/top_deals/gap.webp",
      imageBrand: "/images/home/top_deals/gap_logo.webp",
      titleP1: "",
      titleP2: "20% OFF",
      url: "#",
    },
  ];

  return (
    <>
      <Carousel>
        <CarouselContent>
          {demoData.map((each, index) => (
            <CarouselItem
              key={index}
              className='basis-1/4.5 min-w-[320px] min-h-[320px]'
            >
              <a href='#'>
                {/* CAROUSEL CARD */}
                <div
                  className='card_image w-full min-w-[320px] min-h-[245px] relative rounded-md'
                  style={{
                    background: `url(${each.imageMain}) no-repeat center center/cover`,
                  }}
                >
                  <div className='image_content absolute left-0 bottom-0 z-10 px-4 pb-4'>
                    <p className='text-[19px] text-white font-radialb mb-1'>
                      {each.titleP1}
                    </p>
                    <p className='text-white font-radialb text-5xl'>
                      {each.titleP2.split(" ").map((each, index) => (
                        <span
                          key={index}
                          className={
                            index === 1
                              ? " ml-2 text-[19px] text-white font-radialb mb-1"
                              : undefined
                          }
                        >
                          {each}
                        </span>
                      ))}
                    </p>
                  </div>
                  {/* IMAGE OVERLAY */}
                  <div
                    className='overlay absolute top-0 right-0 left-0 bottom-0 rounded-md'
                    style={{
                      background: `linear-gradient( 42.03deg, rgba(0, 0, 0, 0.71) 11.38%, rgba(255, 255, 255, 0) 88.46%, rgba(255, 255, 255, 0) 88.46% )`,
                    }}
                  ></div>
                </div>

                <div className='brand_subsection py-4 flex justify-between items-center'>
                  <div className='brand_details flex gap-2 items-center'>
                    <Image
                      src={each.imageBrand}
                      width={38}
                      height={38}
                      alt={`${each.brand} logo`}
                      className='border-[#e6e5e9] border-solid border-[1px] rounded-full'
                    />
                    <span className='text-sm text text-[#777781]'>
                      {each.brand}
                    </span>
                  </div>
                  <a
                    href='#'
                    className='text-sm text-center py-2 font-radialb text-titleDarkGrey min-w-[117px] border-solid border-[1px] border-titleDarkGrey rounded'
                  >
                    Shop now
                  </a>
                </div>
              </a>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className='hidden min-[1350px]:block'>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </>
  );
}

export default DealsCarousel;
// export default dynamic(() => Promise.resolve(DealsCarousel), { ssr: false });
