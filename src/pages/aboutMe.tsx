import type { ReactElement } from 'react';
import RootLayout from '@/ui/layouts/RootLayout';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function AboutMe() {
  return (
    <div className="px-10 lg:px-[7rem] xl:px-[18rem] py-20 block md:flex md:justify-start md:items-start min-h-[80vh]">
      <div className="text-center md:me-10">
        <div className="w-full flex justify-center">
          <Image
            src="/images/DP.jpg"
            alt="blog-1"
            width={230}
            height={100}
            className="h-auto max-w-sm md:max-w-md lg:max-w-lg rounded-full"
          />
        </div>
        <h3 className="text-md uppercase mt-5 font-semibold text-dark-grey dark:text-accent">
          Sandeep Bajracharya
        </h3>
        <h4 className="text-fade dark:text-grey text-md">Software Engineer</h4>
        <h4 className="text-fade dark:text-grey text-sm">JavaScript . React . Node . PostgreSQL</h4>
        <div className="mt-5">
          <ul className="text-xl flex justify-around list-none mt-2">
            <li className="mr-4 cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <FontAwesomeIcon
                title="LinkedIn"
                icon={faLinkedin}
                className="text-[#0a66c2] dark:text-white"
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/in/sandeep-bajracharya/')}
              />
            </li>
            <li className="mx-4 cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <FontAwesomeIcon
                title="Github"
                icon={faGithub}
                className="text-dark-grey dark:text-white"
                size="lg"
                onClick={() => window.open('https://www.github.com/sandipbajracharya')}
              />
            </li>
            <li className="mx-4 cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <a href="mailto:sndp106.sb@gmail.com">
                <FontAwesomeIcon
                  title="Email"
                  icon={faEnvelope}
                  className="text-[#cf2d48]"
                  size="lg"
                />
              </a>
            </li>
            <li className="ms-4 cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <FontAwesomeIcon
                title="Instagram"
                icon={faInstagram}
                size="lg"
                className="text-[#a62b9f]"
                onClick={() => window.open('https://www.instagram.com/sandip_bazracharya/')}
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="md:ms-7 mt-10 md:mt-0 ">
        <h2 className="text-3xl text-dark-grey dark:text-grey font-serif font-semibold flex">
          <div>About Me </div>
          <Image
            src={'/images/wave.png'}
            width={35}
            height={35}
            alt="hand_wave"
            className=" ms-3"
          />
        </h2>

        <p className="text-lg mt-4">
          I am a passionate Software Engineer with a strong foundation in full-stack development and
          a deep understanding of modern technologies. Over the years, I have honed my skills in
          building scalable, efficient, and user-friendly applications using a variety of frameworks
          and tools. I thrive on solving complex problems, optimizing performance, and continuously
          learning new technologies to stay at the forefront of the industry.
        </p>

        <p className="text-lg mt-4">
          With a solid background in both frontend and backend development, I am proficient in
          crafting seamless user experiences while ensuring robust backend functionality.
          Collaboration and teamwork are at the core of my work, as I enjoy engaging with other
          professionals to bring innovative ideas to life. I am driven by a passion for technology
          and a desire to contribute to impactful projects that make a difference.
        </p>

        <p className="text-lg mt-4">
          Feel free to contact me for any collaborations. I&apos;m always open to new ideas and
          opportunities. :)
          {/* <Image
            src="/images/smiley2.png"
            alt="blog-1"
            width={35}
            height={35}
            className="h-auto max-w-sm md:max-w-md lg:max-w-lg rounded-full ms-1"
          /> */}
        </p>
      </div>
    </div>
  );
}

AboutMe.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
