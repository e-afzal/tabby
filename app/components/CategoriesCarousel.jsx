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

function CategoriesCarousel({ data }) {
  return (
    <Carousel>
      <CarouselContent>
        {data.map((each, index) => (
          <CarouselItem
            key={index}
            className='basis-1/5.5 min-w-[250px] max-w-[320px] min-h-[188px]'
          >
            <a href={`${each.url}`} key={index}>
              {/* CAROUSEL CARD */}
              <div
                className='card_image min-w-[250px] min-h-[188px] rounded-md'
                style={{
                  background: `url(${each.imageMain}) no-repeat center center/cover`,
                }}
              ></div>

              <div className='title_container flex items-center justify-between pt-4'>
                <p className='text-lg font-radialb'>{each.title}</p>
              </div>
            </a>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CategoriesCarousel;
// export default dynamic(() => Promise.resolve(CategoryCarousel), { ssr: false });
