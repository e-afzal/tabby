import { Input } from "@/components/ui/input";

export default function Support() {
  const supportCategories = [
    { title: "Account Management", url: "#" },
    { title: "Cashback", url: "#" },
    { title: "Decline reasons", url: "#" },
    { title: "Fraud & security", url: "#" },
    { title: "Nafath ID verification", url: "#" },
    { title: "Order issues", url: "#" },
    { title: "Payments", url: "#" },
    { title: "Products & services", url: "#" },
    { title: "Returns & refunds", url: "#" },
    { title: "SIMAH", url: "#" },
    { title: "Tabby card", url: "#" },
  ];
  return (
    <main className='mt-20'>
      {/* SECTION: SHOWCASE */}
      <section
        id='showcase'
        className='min-w-full min-h-64 flex items-end justify-center pb-5 px-5'
        style={{
          background: `url("/images/home/showcase/showcase.webp") no-repeat 50% 0%/cover`,
          backgroundColor: "#292929",
        }}
      >
        <Input
          placeholder='Help me with...'
          className='px-4 py-4 text-base bg-white max-w-[730px] min-h-[56px] rounded-full focus-visible:shadow-lg'
        />
      </section>

      {/* SECTION: categories */}
      <section id='categories'>
        <div className='categories_container bg-[#fbfcfe] px-4 py-16'>
          <h2 className='font-radialb text-2xl mb-6 mx-auto max-w-[830px] text-[#373a3c]'>
            All Categories
          </h2>
          <div className='links_grid_container max-w-[830px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7'>
            {supportCategories.map((each) => (
              <a
                href={each.url}
                className='block p-4 text-lg'
                style={{
                  boxShadow: "rgba(0,0,0,0.12) 0px 2px 4px 0px",
                  border: "1px solid rgba(0, 0, 0, 0.06)",
                }}
              >
                {each.title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
