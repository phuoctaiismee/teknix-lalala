'use client';
import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
   CalendarIcon,
   CarFrontIcon,
   ChevronDownIcon,
   HotelIcon,
   PlaneTakeoffIcon,
} from 'lucide-react';
import Link from 'next/link';
import { KeyTextField, LinkField, SelectField } from '@prismicio/client';
import { title } from 'process';
import { PrismicNextLink } from '@prismicio/next';
const categoriesList = [
   {
      link: '/category/car',
      name: 'Car',
      description: 'Discover the world of luxury cars',
      icon: 'car',
   },
   {
      link: '/category/hotel',
      name: 'Hotel',
      description: 'Discover the world of luxury hotels',
      icon: 'stay',
   },
   {
      link: '/category/plane',
      name: 'Flight',
      description: 'Discover the world of luxury flights',
      icon: 'flight',
   },
   {
      link: '/category/calendar',
      name: 'Calendar',
      description: 'Discover the world of luxury events',
      icon: 'tour',
   },
];

interface NavigationType {
   navigation: {
      title: KeyTextField;
      link: LinkField;
      description: KeyTextField;
      icon: SelectField<'flight' | 'hotel' | 'tour' | 'car'>;
   }[];
}
const SwitchType = ({ navigation }: NavigationType) => {
   const [open, setOpen] = useState(false);
   const handleClose = () => {
      setOpen(false);
   };
   return (
      <Popover open={open} onOpenChange={setOpen}>
         <PopoverTrigger className="text-opacity-90 group self-center py-2 h-10 sm:h-12 rounded-md text-sm sm:text-base font-medium hover:text-opacity-100 focus:outline-none">
            <span className="inline-flex space-x-2 items-center">
               Travel
               <ChevronDownIcon className="w-5 h-5 mix-blend-difference" />
            </span>
         </PopoverTrigger>
         <PopoverContent className="w-[320px] py-0 px-4 sm:px-0 overflow-hidden rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5">
            <nav>
               <ul className="relative grid grid-cols-1 gap-7 p-6">
                  {navigation?.map(({ title, link, description, icon }) => (
                     <PrismicNextLink key={title} field={link} onClick={handleClose}>
                        <li className="flex items-center p-2 -m-3 text-neutral-800 transition duration-150 ease-in-out rounded-lg hover:bg-neutral-100 hover:text-neutral-900 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50  dark:hover:bg-neutral-800 dark:text-neutral-100 dark:hover:text-neutral-200">
                           <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-md dark:text-neutral-100 sm:h-12 sm:w-12 bg-neutral-100 dark:bg-neutral-700">
                              {icon === 'car' && <CarFrontIcon className="w-7 h-7" />}
                              {icon === 'flight' && <PlaneTakeoffIcon className="w-7 h-7" />}
                              {icon === 'hotel' && <HotelIcon className="w-7 h-7" />}
                              {icon === 'tour' && <CalendarIcon className="w-7 h-7" />}
                           </div>
                           <div className="ml-4 space-y-0.5">
                              <p className="text-sm font-medium">{title}</p>
                              <p className="text-xs">{description}</p>
                           </div>
                        </li>
                     </PrismicNextLink>
                  ))}
               </ul>
            </nav>
            <div className="bg-neutral-50 dark:bg-neutral-700">
               <Link
                  href="#"
                  className="flow-root py-5 px-7 text-neutral-800 dark:text-neutral-300 transition duration-150 ease-in-out rounded-md focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
               >
                  <span className="flex items-center">
                     <span className="text-sm font-medium">Documentation</span>
                  </span>
                  <span className="block text-sm text-gray-500 dark:text-neutral-400">
                     Start integrating products and tools
                  </span>
               </Link>
            </div>
         </PopoverContent>
      </Popover>
   );
};

export default SwitchType;
