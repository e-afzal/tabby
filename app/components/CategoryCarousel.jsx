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

function CategoryCarousel({ data }) {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((each, index) => (
          <CarouselItem
            key={index}
            className='basis-1/4.5 min-w-[217px] md:min-w-[320px] md:min-h-[320px]'
          >
            <a href='#' key={index}>
              {/* CAROUSEL CARD */}
              <div
                className='card_image w-full min-w-[217px] min-h-[180px] md:min-w-[320px] md:min-h-[245px] relative rounded-md'
                style={{
                  background: `url(${each.imageMain}) no-repeat center center/cover`,
                }}
              >
                <div className='image_content absolute right-0 bottom-0 z-10 px-4 pb-4'>
                  <Image
                    src={each.imageBrand}
                    alt={`${each.brand} logo`}
                    width={64}
                    height={64}
                    className='rounded-full'
                  />
                </div>
                {/* IMAGE OVERLAY */}
                <div
                  className='overlay absolute top-0 right-0 left-0 bottom-0 rounded-md'
                  // style={{
                  //   background: `linear-gradient( 42.03deg, rgba(0, 0, 0, 0.71) 11.38%, rgba(255, 255, 255, 0) 88.46%, rgba(255, 255, 255, 0) 88.46% )`,
                  // }}
                ></div>
              </div>

              <div className='brand_subsection py-4 flex flex-col'>
                <div className='brand_details flex items-center justify-between'>
                  <p className='text-lg font-radialb'>{each.brand}</p>
                  {each.inStore && (
                    <span
                      className='mt-[1px]'
                      style={{ color: "#a3a3a3", fontSize: "12px" }}
                    >
                      • Also in-store
                    </span>
                  )}
                </div>
                <div className='flex items-center gap-2 mt-[2px]'>
                  {each.split ? (
                    <p className='text-[#54545c] text-[12px]'>Split in 4</p>
                  ) : undefined}
                  {each.deals ? (
                    <span className='text-[#605ee8] text-[12px] font-radialb'>
                      • Deals & Offers
                    </span>
                  ) : undefined}
                </div>
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
  );
}

export default CategoryCarousel;
// export default dynamic(() => Promise.resolve(CategoryCarousel), { ssr: false });
