import dynamic from 'next/dynamic';
import React from 'react';

export const Header = dynamic(() =>
   import('@/components/common/header').then((mod) => mod.default),
);
export const Footer = dynamic(() =>
   import('@/components/common/footer').then((mod) => mod.default),
);

const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Header />
         {children}
         <Footer />
         {/* <ScrollToTopButton /> */}
      </>
   );
};

export default MainLayout;
