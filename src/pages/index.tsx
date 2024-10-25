'use client';

import Image from 'next/image';
import LatestBlogs from '@/ui/component/LatestBlogs';
// import type { NextPageWithLayout } from './_app';
import type { ReactElement } from 'react';
import RootLayout from '@/ui/layouts/RootLayout';
import Link from 'next/link';
import Button from '@/ui/component/Button';

export default function Page() {
  return (
    <>
      <div className="px-10 lg:px-[7rem] xl:px-[18rem] py-20">
        <h1 className="text-5xl text-dark-grey font-bold font-serif flex items-center dark:text-grey">
          <span className="me-4">
            <span className="text-accent">Hi!</span> I am Sandeep Bajracharya
          </span>
          <Image
            src={'/images/wave.png'}
            width={50}
            height={50}
            alt="hand_wave"
            className="hidden sm:block"
          />
        </h1>
        <p className="text-xl my-3">
          I am a{' '}
          <span className="font-bold text-dark-grey dark:text-grey">
            full stack software engineer
          </span>{' '}
          and a tech enthusiast. I love to learn new things and share my knowledge with others.
        </p>
        <Link href="/aboutMe" className="text-md">
          <Button text="Learn more" isPrimary={true} />
        </Link>
        <div className="mt-20">
          <LatestBlogs />
        </div>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
