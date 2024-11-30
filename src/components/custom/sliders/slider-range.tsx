'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const SliderRange = React.forwardRef<
   React.ElementRef<typeof SliderPrimitive.Root>,
   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, hidden = false, ...props }, ref) => {
   const initialValue = Array.isArray(props.value) ? props.value : [props.min, props.max];

   return (
      <SliderPrimitive.Root
         ref={ref}
         className={cn('relative flex w-full touch-none select-none items-center', className)}
         {...props}
      >
         <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-secondary">
            <SliderPrimitive.Range className="absolute h-full bg-primary" />
         </SliderPrimitive.Track>
         {!hidden && (
            <React.Fragment>
               {initialValue.map((value, index) => (
                  <React.Fragment key={index}>
                     <SliderPrimitive.Thumb className="block h-3 w-3 rounded-full border-2 border-neutral-500 bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer" />
                  </React.Fragment>
               ))}
            </React.Fragment>
         )}
      </SliderPrimitive.Root>
   );
});
SliderRange.displayName = SliderPrimitive.Root.displayName;

export { SliderRange };
