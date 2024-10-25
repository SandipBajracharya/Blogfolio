import type { ReactElement } from 'react';
import RootLayout from '@/ui/layouts/RootLayout';
import LatestBlogs from '@/ui/component/LatestBlogs';
import Tags from '@/ui/component/Tags';

export default function Blogs() {
  return (
    <div className="px-10 lg:px-[7rem] xl:px-[18rem] py-14 grid grid-cols-1 gap-y-0 lg:grid-cols-4 lg:gap-12">
      <Tags />
      <LatestBlogs className="lg:col-span-3 mt-10 lg:mt-0" title="Blogs" />
    </div>
  );
}

Blogs.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
