import Image from "next/image";
import { createClient } from "contentful";

// CONTENTFUL: Rich Text Renderer
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// FETCHING ALL POSTS/INSIGHTS
const getData = async (id) => {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });
  try {
    const res = await client.getEntry(id);
    const sanitizedItem = {
      ...res.fields,
      articleImage: `https:${res.fields.articleImage.fields.file.url}`,
    };
    return sanitizedItem;
  } catch (error) {
    console.log(`Error fetching posts: ${error.message}`);
  }
};

// To generate Meta Tag "DYNAMICALLY", this is necessary in Next 13
// Metadata set in the other pages is the "STATIC" method
export async function generateMetadata({ searchParams }) {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    space: process.env.CONTENTFUL_SPACE_ID,
  });
  try {
    const res = await client.getEntry(searchParams.id);
    return {
      title: `${res.fields.articleTitle} | Tabby`,
      // description,
      openGraph: {
        title: `${res.fields.articleTitle} | Tabby`,
        // description,
        url: `https://www.tabby-ead.vercel.app/press/${res.fields.articleSlug}`,
        images: [
          {
            url: "https://res.cloudinary.com/ddeima5fc/image/upload/v1706812362/tabby_image_ipjjgs.png",
            width: 1200,
            height: 627,
          },
        ],
      },
    };
  } catch (error) {
    console.log(`Error fetching posts: ${error.message}`);
  }
}

export default async function Article({ searchParams: { id } }) {
  const { articleImage, articleTitle, articleDate, articleContent } =
    await getData(id);

  return (
    <main className='mt-20'>
      {/* SECTION: SHOWCASE */}
      <section id='showcase'>
        <Image
          src={articleImage}
          width={1920}
          height={1080}
          alt='Press release showcase image'
          className='min-h-[300px] md:max-h-[385px] min-w-full object-cover'
          style={{ objectPosition: "50% 50%" }}
        />
        <div className='showcase_container max-w-screen-xl mx-auto px-5 lg:px-8 mt-12'>
          <span
            className='inline-block mb-9 font-radialb text-base text-titleDarkGrey pb-2'
            style={{ borderBottom: "4px solid #3eedbf" }}
          >
            Company
          </span>
          <h1 className='text-titleDarkGrey font-radialb text-[44px] lg:text-6xl leading-[53px] xl:leading-[70px]'>
            {articleTitle}
          </h1>
          <span className='inline-block mt-5 mb-10 font-radialb text-base text-titleDarkGrey'>
            {articleDate}
          </span>

          {/* ARTICLE */}
          {articleContent.content.map((document, index) => (
            <div className='news_article' key={index}>
              {documentToReactComponents(document)}
            </div>
          ))}
        </div>
      </section>

      <div className='return_container max-w-screen-xl mx-auto mt-11 mb-20 lg:mb-28 lg:mt-12 px-5 lg:px-8 flex justify-center md:justify-start'>
        <a
          href='/press'
          className='font-radialb text-2xl text-titleDarkGrey pb-2 flex items-center gap-2'
          style={{ borderBottom: "4px solid #3eedbf" }}
        >
          <svg
            style={{ rotate: "180deg" }}
            className='text-[24px] hidden md:inline'
            stroke='currentColor'
            fill='none'
            strokeWidth={"2"}
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <polyline points='9 18 15 12 9 6'></polyline>
          </svg>{" "}
          Return to latest news
        </a>
      </div>
    </main>
  );
}
