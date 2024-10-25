import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <>
      <div className="px-10 lg:px-[7rem] xl:px-[18rem] pb-5">
        <div className="border-b-[1px] border-fade-grey my-2" />
        <div className="md:flex justify-between items-center pt-3">
          <div className="text-dark-grey flex items-center">
            <span className="text-xl font-semibold hidden sm:block me-6 dark:text-grey">
              Let&apos;s connect!
            </span>
            <ul className="text-xl flex list-none">
              <li className="me-4 cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <FontAwesomeIcon
                  title="LinkedIn"
                  icon={faLinkedin}
                  className="text-[#0a66c2] dark:text-white"
                  onClick={() => window.open('https://www.linkedin.com/in/sandeep-bajracharya/')}
                />
              </li>
              <li className="mx-4 cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <FontAwesomeIcon
                  title="Github"
                  icon={faGithub}
                  className="text-dark-grey dark:text-white"
                  onClick={() => window.open('https://www.github.com/sandipbajracharya')}
                />
              </li>
              <li className="mx-4 cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <a href="mailto:sndp106.sb@gmail.com">
                  <FontAwesomeIcon title="Email" icon={faEnvelope} className="text-[#cf2d48]" />
                </a>
              </li>
              <li className="ms-4 cursor-pointer transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                <FontAwesomeIcon
                  title="Instagram"
                  icon={faInstagram}
                  className="text-[#a62b9f]"
                  onClick={() => window.open('https://www.instagram.com/sandip_bazracharya/')}
                />
              </li>
            </ul>
          </div>
          <div className="text-fade mt-2 lg:mt-0 dark:text-grey">© 2024 Sandeep Bajracharya</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
