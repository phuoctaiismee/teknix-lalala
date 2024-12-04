import { SliceZone } from '@prismicio/react';
import { Metadata } from 'next';

import { MainBreadCumbs } from '@/components/custom/bread-cumbs';
import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('helpcenter');

  const breadcrumbData = [
    { label: 'Home', href: '/' },
    { label: 'Help Center' },
  ];

  return (
    <div className="mt-[4rem]">
      <MainBreadCumbs breadcrumbs={breadcrumbData} />
      <SliceZone slices={page.data.slices} components={components} />
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('helpcenter');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}
