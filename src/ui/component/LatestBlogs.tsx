import Image from 'next/image';

function LatestBlogs({ title = 'Check out my Latest Blogs', className = '' }) {
  return (
    <div className={className}>
      <h2 className="text-3xl text-dark-grey dark:text-grey font-bold font-serif flex items-center">
        {title}{' '}
        <Image src={'/images/blog.svg'} width={35} height={35} alt="hand_wave" className=" ms-3" />
      </h2>
      <div className="border-b-[1px] border-fade-grey my-2" />
      <div>
        <div className="flex items-start my-8">
          <span className="md:me-5 lg:me-10 hidden md:block shadow-md">
            <Image
              src="/images/nextjs.png"
              alt="blog-1"
              width={400}
              height={100}
              layout="responsive"
              className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            />
          </span>
          <div>
            <h2 className="text-2xl mb-1 text-dark-grey dark:text-grey font-bold font-serif">
              How to build a complete site using Next.js
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. ...{' '}
              <span className="underline text-dark-grey italic text-sm dark:text-accent">
                Read more
              </span>
            </p>
            <div className="text-sm text-fade mt-1">Posted on: October 22, 2024</div>
          </div>
        </div>
        <div className="border-b-[1px] border-fade-grey my-2" />

        <div className="flex items-start my-8">
          <span className="md:me-5 lg:me-10 hidden md:block shadow-md">
            <Image
              src="/images/postman.jpg"
              alt="blog-1"
              width={400}
              height={100}
              layout="responsive"
              className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            />
          </span>
          <div>
            <h2 className="text-2xl mb-1 text-dark-grey dark:text-grey font-bold font-serif">
              How to use Postman to make HTTP requests
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. ...{' '}
              <span className="underline text-dark-grey italic text-sm dark:text-accent">
                Read more
              </span>
            </p>
            <div className="text-sm text-fade mt-1">Posted on: September 20, 2024</div>
          </div>
        </div>
        <div className="border-b-[1px] border-fade-grey my-2" />

        <div className="flex items-start my-8">
          <span className="md:me-5 lg:me-10 hidden md:block shadow-md">
            <Image
              src="/images/git.png"
              alt="blog-1"
              width={400}
              height={100}
              layout="responsive"
              className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            />
          </span>
          <div>
            <h2 className="text-2xl mb-1 text-dark-grey dark:text-grey font-bold font-serif">
              Basic GIT commands to save the day
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. ...{' '}
              <span className="underline text-dark-grey italic text-sm dark:text-accent">
                Read more
              </span>
            </p>
            <div className="text-sm text-fade mt-1">Posted on: July 14, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestBlogs;
