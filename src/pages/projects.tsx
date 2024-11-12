import type { ReactElement } from 'react';
import RootLayout from '@/ui/layouts/RootLayout';
import Image from 'next/image';

export default function Projects() {
  return (
    <div className="px-10 lg:px-[7rem] xl:px-[18rem] py-14">
      <h2 className="text-3xl text-dark-grey dark:text-fade-grey font-bold font-serif flex items-center">
        Projects{' '}
        <Image
          src={'/images/project.svg'}
          width={35}
          height={35}
          alt="hand_wave"
          className=" ms-3"
        />
      </h2>
      <div className="border-b-[1px] border-fade-grey my-2" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-1 md:gap-x-6 md:gap-y-3 xl:gap-x-8 xl:gap-y-5 mt-5">
        <div className="p-7 my-2 rounded-md shadow-lg dark:shadow-dark-grey">
          <Image
            src="/images/blog-pic-1.jpg"
            alt="blog-1"
            width={400}
            height={100}
            // layout="responsive"
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div className="mt-4">
            <h2 className="text-2xl mb-3 text-dark-grey font-bold font-serif dark:text-accent">
              REED
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="p-7 my-2 rounded-md shadow-lg dark:shadow-dark-grey">
          <Image
            src="/images/blog-pic-1.jpg"
            alt="blog-1"
            width={400}
            height={100}
            // layout="responsive"
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div className="mt-4">
            <h2 className="text-2xl mb-3 text-dark-grey font-bold font-serif dark:text-accent dark:shadow-secondary">
              Lawson
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="p-7 my-2 rounded-md shadow-lg dark:shadow-dark-grey">
          <Image
            src="/images/blog-pic-1.jpg"
            alt="blog-1"
            width={400}
            height={100}
            // layout="responsive"
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div className="mt-4">
            <h2 className="text-2xl mb-3 text-dark-grey font-bold font-serif dark:text-accent dark:shadow-secondary">
              Commission, billing and payment system
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
        <div className="p-7 my-2 rounded-md shadow-lg dark:shadow-dark-grey">
          <Image
            src="/images/blog-pic-1.jpg"
            alt="blog-1"
            width={400}
            height={100}
            // layout="responsive"
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
          />
          <div className="mt-4">
            <h2 className="text-2xl mb-3 text-dark-grey font-bold font-serif dark:text-accent dark:shadow-secondary">
              Commission, billing and payment system
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Projects.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
