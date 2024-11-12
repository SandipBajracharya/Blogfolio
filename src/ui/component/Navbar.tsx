import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faFireAlt,
  faBars,
  faMagnifyingGlass,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import SideMenu from './SideMenu';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // works as componentDidMount
    setIsMounted(true); // this state update will trigger re-render in the component
  }, []);

  return (
    <nav className="bg-grey shadow-md px-10 lg:px-[7rem] xl:px-[18rem] py-5 dark:bg-dark-grey">
      {isMounted ? (
        <div className="flex justify-between items-center lg:grid lg:grid-cols-6">
          <div className="lg:hidden">
            <span className="text-3xl text-accent me-4" onClick={() => setShowMenu(!showMenu)}>
              <FontAwesomeIcon icon={faBars} />
            </span>
          </div>
          <div className="flex items-center justify-between text-2xl col-span-2">
            <Link href="/" className="flex items-center">
              {/* <span className="text-primary me-4">
                <FontAwesomeIcon icon={faFireAlt} />
              </span> */}
              <div className="font-semibold hidden md:block font-indie">Sandeep Bajracharya</div>
              <div className="font-semibold uppercase md:hidden block font-indie">SB</div>
            </Link>
          </div>
          <div className="hidden col-span-3 lg:flex justify-center">
            <ul className="flex list-none justify-between">
              <li className="hover:text-accent">
                <Link href="/blogs">Blogs</Link>
              </li>
              <li className="hover:text-accent ms-16">
                <Link href="/projects">Projects</Link>
              </li>
              <li className="hover:text-accent ms-16">
                <Link href="/aboutMe">About Me</Link>
              </li>
            </ul>
          </div>
          {showMenu && <SideMenu handleClose={() => setShowMenu(false)} />}

          <div className="flex justify-end items-center">
            <span className="hidden sm:block">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="hover:text-accent hover:cursor-pointer"
              />
            </span>
            {resolvedTheme && resolvedTheme === 'dark' ? (
              <FontAwesomeIcon
                icon={faSun}
                className="ms-7 md:ms-10 text-primary hover:cursor-pointer"
                onClick={() => setTheme('light')}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className="ms-7 md:ms-10 text-dark-grey hover:cursor-pointer"
                onClick={() => setTheme('dark')}
              />
            )}
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
}
