import { MainButton } from '@/components/common/button/mainButton';
import Bounded from '@/components/common/containers/bounded';
import Heading from '@/components/common/typography/heading';
import Paragraph from '@/components/common/typography/paragraph';
import { Content } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { JSXMapSerializer, PrismicRichText } from '@prismicio/react';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

const heroComponents: JSXMapSerializer = {
   heading1: ({ children }) => (
      <Heading as="h1" className="text-5xl md:text-6xl 1920:text-7xl z-[1] font-medium text-white">
         {children}
      </Heading>
   ),
   paragraph: ({ children }) => (
      <Paragraph as="p" className="text-white dark:text-white text-base">
         {children}
      </Paragraph>
   ),
};

export const MainContent = ({ slice }: { slice: Content.HeroSlice }) => {
   return (
      <Bounded className="w-full flex flex-col justify-center items-center">
         <div className="w-full flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start gap-1 md:gap-3 z-10">
            <div className="mb-3">
               <PrismicRichText field={slice.primary.sub_heading} components={heroComponents} />
            </div>

            <div className="mb-2">
               <PrismicRichText field={slice.primary.heading} components={heroComponents} />
            </div>

            <div className="hidden md:block">
               <div className="flex items-center flex-wrap gap-8">
                  {slice?.primary?.benefits?.map((benefit, index) => (
                     <div className="flex gap-2 items-center" key={index}>
                        <Image
                           src="/assets/images/home/banner-tick.png"
                           alt="Banner Stick"
                           width={25}
                           height={25}
                           loading="lazy"
                        />

                        <div className="text-sm text-neutral-50 1920:text-base">{benefit.name}</div>
                     </div>
                  ))}
               </div>
            </div>

            {/* button section */}
            <div className="mt-6 xl:mt-8 flex justify-start items-center gap-4">
               <PrismicNextLink field={slice?.primary?.button_link}>
                  <MainButton
                     text={slice.primary.button_text || ''}
                     rightIcon={<ArrowRight className="w-5 h-5 ml-1" />}
                     className="text-black text-base"
                  />
               </PrismicNextLink>
               <MainButton
                  text={slice.primary.video_text || ''}
                  variant="ghost"
                  className="bg-transparent text-white hover:bg-transparent hover:text-white text-base"
                  leftIcon={
                     <span className="bg-white rounded-full flex justify-center items-center p-4">
                        <Play className="w-5 h-5 text-black" />
                     </span>
                  }
               />
            </div>
         </div>
      </Bounded>
   );
};
