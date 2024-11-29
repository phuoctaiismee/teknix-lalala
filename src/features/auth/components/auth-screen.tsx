'use client';

import { useEffect, useState } from 'react';
import { SignInFlow } from '../types';
import SignInCard from './sign-in-card';
import SignUpCard from './sign-up-card';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';

interface AuthScreenProps {
   screen?: SignInFlow;
}
const AuthScreen = ({ screen = 'signIn' }: AuthScreenProps) => {
   const [state, setState] = useState<SignInFlow>(screen);
   useEffect(() => {
      if (screen) setState(screen);
   }, [screen]);

   return (
      <div className="flex flex-col w-full">
         <div className="w-full">
            {state === 'signIn' ? (
               <SignInCard setState={setState} />
            ) : (
               <SignUpCard setState={setState} />
            )}
         </div>
      </div>
   );
};

export default AuthScreen;

export const AuthSkeleton = () => (
   <div className="container mb-24 lg:mb-32">
      <div className="my-20 flex flex-col items-center justify-center">
         <Skeleton className="h-10 w-24" />
      </div>
      <div className="max-w-md mx-auto space-y-6">
         <div className="grid gap-3">
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
            <Skeleton className="h-10" />
         </div>
         <Separator />
         <div className="grid grid-cols-1 gap-6">
            <div>
               <Skeleton className="h-5 w-24" />
               <Skeleton className="h-10 mt-1" />
            </div>
            <div>
               <Skeleton className="h-5 w-24" />
               <Skeleton className="h-10 mt-1" />
            </div>
            <div>
               <Skeleton className="h-14 mt-1" />
            </div>
         </div>
      </div>
   </div>
);