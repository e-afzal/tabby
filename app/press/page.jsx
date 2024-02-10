import Image from "next/image";

// CONTENTFUL
import { createClient } from "contentful";

// ASSET IMPORT
import showcaseImg from "@/public/images/press/press_banner.webp";
import businessImage from "@/public/images/home/business/showcase.webp";

// METADATA
export const metadata = {
  title: "Tabby | Latest News & Announcements",
  description:
    "Tabby secures up to $700M in receivables securitization from JP Morgan – the largest asset-backed facility secured by a fintech in MENA. Hassana Investment Company, Soros Capital Management and Saudi Venture Capital join as equity investors, extending Tabby’s Series D round to $250M",
  openGraph: {
    title: "Tabby | Latest News & Announcements",
    description:
      "Tabby secures up to $700M in receivables securitization from JP Morgan – the largest asset-backed facility secured by a fintech in MENA. Hassana Investment Company, Soros Capital Management and Saudi Venture Capital join as equity investors, extending Tabby’s Series D round to $250M",
    url: "https://tabby-ead.vercel.app/press",
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

// REQUIRED to set this as 0 to avoid caching and force rendering fresh articles
// FOR MORE DETAILS, refer: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#revalidate
// RELATED to API folder=>revalidate file
// export const revalidate = 0;

// FETCHING ALL POSTS/INSIGHTS
const getData = async () => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });
  try {
    const res = await client.getEntries({
      //? In Contentful Dashboard, go to Content Model => Click on the schema you want ID of,
      //? Click on 'copy ID' and paste below in 'content_type' field.
      content_type: "pressArticle",
      select: [
        "fields.articleSlug",
        "fields.articleImage",
        "fields.articleTitle",
        "fields.articleDate",
        "fields.articleShortDescription",
      ],
      order: "sys.createdAt",
    });
    return res.items;
  } catch (error) {
    console.log(`Error fetching posts: ${error.message}`);
    // return error.message;
  }
};

export default async function Press() {
  const items = await getData();

  return (
    <main className='mt-20'>
      {/* SECTION: SHOWCASE */}
      <section id='showcase'>
        <Image
          src={showcaseImg}
          alt='Press release showcase image'
          className='min-h-[300px] md:max-h-[480px] min-w-full object-cover'
          style={{ objectPosition: "50% 40%" }}
        />
        <div className='showcase_container max-w-screen-xl mx-auto px-5 lg:px-8'>
          <h1 className='text-titleDarkGrey font-radialb text-[28px] lg:text-[44px] mt-9'>
            Latest Press
          </h1>
          {/* SHOWCASE GRID */}
          <div
            className='grid_container mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14'
            // style={{ border: "1px solid red" }}
          >
            {items.map((item, index) => (
              <div key={index} className='grid_card'>
                <a
                  href={`/press/${item.fields.articleSlug}?id=${item.sys.id}`}
                  className='card_image_container block overflow-hidden max-w-full h-[192px] rounded'
                >
                  <Image
                    src={`https:${item.fields.articleImage.fields.file.url}`}
                    width={379}
                    height={192}
                    alt='News article thumbnail'
                    className='h-full w-full object-cover'
                  />
                </a>
                <h2 className='font-radialb text-titleDarkGrey text-2xl lg:text-[28px] mt-6 truncate'>
                  {item.fields.articleTitle}
                </h2>
                <h5 className='mt-3 text-[#737373] text-[12px]'>
                  {item.fields.articleDate}
                </h5>
                <p
                  className='mt-3 text-sm text-[#737373]'
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {item.fields.articleShortDescription}
                </p>
                <a
                  href={`/press/${item.fields.articleSlug}`}
                  className='inline-block mt-3 text-sm font-radialb text-titleDarkGrey'
                  style={{
                    borderBottom: "2px solid #292929",
                    paddingBottom: "2px",
                  }}
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION: MEDIA INQUIRIES */}
      <section id='inquiries'>
        <div className='inquiry_container max-w-screen-xl mx-auto py-16 lg:py-36 px-8 flex flex-col lg:flex-row gap-10 justify-between items-center lg:items-start'>
          <div className='card_image'>
            <Image
              src={businessImage}
              alt='Tabby Mobile App Mockup'
              className='w-full max-w-xl lg:min-w-[525px]'
            />
          </div>
          <div className='card_content max-w-xl'>
            <h2 className='font-radialb text-4xl md:text-5xl leading-tight md:leading-tight'>
              Media inquiries
            </h2>
            <p className='text-base mt-5 mb-10' style={{ color: "#54545c" }}>
              We're happy to help with any questions you might have. Get in
              touch and you'll reach a real human who can arrange interviews and
              provide original materials.
            </p>
            {/* CTA BUTTON - Appears for <1024px devices */}
            <a
              href='mailto:press@tabby.ai'
              className='block max-w-[322px] px-8 py-2.5 text-base text-center font-radialb rounded-full border-2 border-black hover:border-[#3eedbf]'
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
