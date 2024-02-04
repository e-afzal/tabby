import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function LoginCTA() {
  return (
    <div className='flex justify-center'>
      <HoverCard>
        <HoverCardTrigger className='border-b-[2px] hover:border-b-[2px] border-[#fff] hover:border-[#3eedbe] hover:cursor-pointer'>
          Log in or sign up
        </HoverCardTrigger>
        <HoverCardContent className='w-full shadow-xl rounded-bl rounded-br z-10 border-t py-5 px-10'>
          <h4 className='font-radialb mb-4 text-titleDarkGrey'>Shoppers</h4>
          <a
            href='#'
            className='text-center font-radialb text-white hover:text-ctaBlue bg-ctaBlue hover:bg-ctaGreen px-8 py-3 rounded-full block min-w-60'
          >
            Log in or sign up
          </a>
          <div className='credentials_divider'>
            <span className='my-6'>OR</span>
          </div>
          <h4 className='font-radialb mb-4 text-titleDarkGrey'>Businesses</h4>
          <a
            href='#'
            className='text-center font-radialb text-white hover:text-ctaBlue bg-ctaBlue hover:bg-ctaGreen px-8 py-3 rounded-full block min-w-60 mb-4'
          >
            Business log in
          </a>
          <a
            href='#'
            className='text-center font-radialb text-ctaBlue px-8 py-3 rounded-full block min-w-60 border-2 border-ctaBlue hover:border-[#3eedbe]'
          >
            Business sign up
          </a>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}
