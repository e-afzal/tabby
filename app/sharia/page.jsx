// ASSET IMPORTS
import shalhoob from "@/public/images/sharia/shalhoob.webp";
import ahmad from "@/public/images/sharia/ahmad.webp";
import bureau from "@/public/images/sharia/bureau.webp";
import Image from "next/image";

// METADATA
export const metadata = {
  title: "Shariah Values | Tabby",
  description:
    "Compliance with Islamic Shariah principles is at the forefront of Tabby's values and are upheld in accordance with Shariah Laws.",
  openGraph: {
    title: "Shariah Values | Tabby",
    description:
      "Compliance with Islamic Shariah principles is at the forefront of Tabby's values and are upheld in accordance with Shariah Laws.",
    url: "https://tabby-ead.vercel.app/sharia",
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

export default function Sharia() {
  return (
    <main className='mt-20 md:mt-24'>
      {/* SECTION: SHOWCASE */}
      <section id='compliance_showcase'>
        <div className='max-w-screen-xl mx-auto pt-12 px-5 lg:px-8'>
          <h1 className='text-titleDarkGrey font-radialb text-center text-[44px] lg:text-6xl leading-[48px] lg:leading-[64px] tracking-[-1.2px] whitespace-pre-wrap'>
            We're committed to Shariah Law
          </h1>
          <p className='text-center mt-6 md:mt-4'>
            Compliance with Islamic Shariah principles is at the forefront of
            Tabby's values and are upheld in accordance with Shariah Laws.
          </p>
          <a
            href='#'
            className='font-radialb tracking-wide text-center text-ctaBlue hover:text-white bg-ctaGreen hover:bg-ctaBlue rounded-full mt-8 mx-auto px-8 py-3 w-max flex justify-center items-center gap-2'
          >
            View Shariah Certificate
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
      </section>

      {/* SECTION: COMPLIANCE */}
      <section id='compliance_faq'>
        <div className='compliance_container mt-20 max-w-screen-xl mx-auto px-5 lg:px-8'>
          <h2 className='text-titleDarkGrey font-radialb text-3xl lg:text-[44px] lg:leading-[48px] whitespace-pre-wrap mb-4'>
            How does Tabby ensure Shariah compliancy?
          </h2>
          <p className='text-[#54545c] text-lg'>
            Tabby set out to build a more rewarding relationship with money by
            empowering people to reach financial freedom while advocating
            responsible and ethical spending habits. We rely on Shariah
            principles as our reference and guide to commit to our mission and
            values. Tabby regularly seeks legal and Islamic counsel to adhere to
            Shariah principles in our core services.
          </p>
          <p className='text-[#54545c] text-lg mt-6'>
            We are committed to complying with Shariah governance practices,
            such as (but not limited to), the establishment of a Shariah
            Committee, independence of pronouncement, administration of Shariah
            audit and Shariah reporting.
          </p>
          <p className='text-[#54545c] text-lg mt-6'>
            To achieve this, we have appointed Shariyah Review Bureau (“SRB”) to
            help us adhere to the best practices and guidelines on Shariah
            governance. In this role, SRB will facilitate Shariah related
            discussions, product research, and Shariah reporting while working
            with the head of functions to augment Shariah principles and rulings
            at different levels of the organization. SRB will also help ensure
            that the members of the Shariah Committee operate with independence
            and autonomy and warrants effective decision-making and Shariah
            assurance practices.
          </p>
        </div>
      </section>

      {/* SECTION: COMMITTEE */}
      <section id='committee'>
        <div className='committee_container mt-20 max-w-screen-xl mx-auto px-5 lg:px-8'>
          <h2 className='text-titleDarkGrey font-radialb text-3xl lg:text-[44px] lg:leading-[48px] whitespace-pre-wrap mb-4'>
            Shariah committee
          </h2>
          <p className='text-[#54545c] text-lg'>
            For the purpose of effective Sharia governance and supervision, two
            renowned and qualified Sharia scholars have been assigned. The
            Sharia Committee independently issues pronouncements, and these
            rulings are binding onus. The names of the Sharia Committee members
            are provided below:
          </p>
        </div>
      </section>

      {/* SECTION: SCHOLARS */}
      <section id='scholars'>
        <div className='scholar_grid mt-5 lg:mx-auto px-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-screen-xl'>
          <div className='scholar_card'>
            <Image
              src={shalhoob}
              alt='Dr Salah Fahad Al Shalhoob'
              className='rounded-md'
            />
            <h4 className='font-radialb text-titleDarkGrey text-[28px] mt-5'>
              Dr Salah Fahad Al Shalhoob
            </h4>
            <p className='text-[#54545c] mt-2 md:max-w-[470px] w-full'>
              Shaikh Salah is a Sharia scholar who procured his PhD from
              Edinburgh University (UK) and Masters from Al Imam University
              (KSA). He has led a broad range of engagements in the US, Europe,
              and the GCC, focusing on banking and investment products,
              real-estate acquisitions, Islamic, Insurance management, listed
              securities, and private equity fund. His product based experience
              spans sukuks, home mortgages, leasing, SME Financing and asset
              management transactions. He is currently a faculty member at the
              Saudi Electronic University, Riyadh. Before that, he was a faculty
              member and director of the Islamic Banking and Finance Center at
              King Fahd University of Petroleum and Minerals in Dhahran.
            </p>
          </div>
          <div className='scholar_card'>
            <Image
              src={ahmad}
              alt='Sheikh Muhammad Ahmad'
              className='rounded-md'
            />
            <h4 className='font-radialb text-titleDarkGrey text-[28px] mt-5'>
              Dr Salah Fahad Al Shalhoob
            </h4>
            <p className='text-[#54545c] mt-2 md:max-w-[470px] w-full'>
              Shaikh Salah is a Sharia scholar who procured his PhD from
              Edinburgh University (UK) and Masters from Al Imam University
              (KSA). He has led a broad range of engagements in the US, Europe,
              and the GCC, focusing on banking and investment products,
              real-estate acquisitions, Islamic, Insurance management, listed
              securities, and private equity fund. His product based experience
              spans sukuks, home mortgages, leasing, SME Financing and asset
              management transactions. He is currently a faculty member at the
              Saudi Electronic University, Riyadh. Before that, he was a faculty
              member and director of the Islamic Banking and Finance Center at
              King Fahd University of Petroleum and Minerals in Dhahran.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: LEVEL */}
      <section id='level' className='mt-16'>
        <div className='card_container max-w-screen-xl mx-auto py-16 lg:py-20 px-8 flex flex-col-reverse lg:flex-row gap-10 justify-between items-center'>
          <div className='card_content max-w-xl'>
            <h2 className='font-radialb text-[28px] md:text-[44px] leading-[1.3] md:leading-[48px]'>
              About Shariyah Review Bureau
            </h2>
            <p className='text-lg mt-6 mb-10' style={{ color: "#54545c" }}>
              Shariyah Review Bureau (SRB) is a Middle East-based firm with an
              international scholarly platform of +37 scholars covering 4 major
              school of jurisprudences and spreading over 16 countries including
              Saudi Arabia, Bahrain, UAE, Malaysia, Pakistan, UK, Germany and
              Russia. SRB is licensed and regulated by the Central Bank of
              Bahrain and has been serving the Islamic financial industry for
              almost 20 years and is committed to empowering Sharia compliance
              for businesses around the world.
            </p>
            {/* CTA BUTTON - Appears for <1024px devices */}
            <a
              href='#'
              className='text-center text-white hover:text-ctaBlue bg-ctaBlue hover:bg-ctaGreen font-radialb tracking-wide px-9 py-3 rounded-full mt-8 md:w-max flex justify-center items-center gap-2'
            >
              Visit SRB website
            </a>
          </div>
          <div className='card_image'>
            <Image
              src={bureau}
              alt='Shariyah Review Bureau'
              className='min-w-80 w-full max-w-xl lg:min-w-[525px]'
            />
          </div>
        </div>
      </section>
    </main>
  );
}
