import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFireAlt,
  faBars,
  faMagnifyingGlass,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SideMenu from './SideMenu';
import { useTheme } from 'next-themes';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="bg-grey shadow-md px-10 lg:px-[7rem] xl:px-[18rem] py-5 dark:bg-black">
      <div className="flex justify-between items-center lg:grid lg:grid-cols-6">
        <div className="lg:hidden">
          <span className="text-3xl text-accent me-4" onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        </div>
        <div className="flex items-center justify-between text-xl col-span-2">
          <Link href="/" className="flex items-center text-3xl">
            <span className="text-primary me-4">
              <FontAwesomeIcon icon={faFireAlt} />
            </span>
            <span className="hidden sm:block font-lobster">SB blogs</span>
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

        <div className="flex justify-end">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="hover:text-accent hover:cursor-pointer"
          />
          {theme && theme === 'dark' ? (
            <FontAwesomeIcon
              icon={faSun}
              className="ms-10 text-primary hover:cursor-pointer"
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
    </nav>
  );
}
