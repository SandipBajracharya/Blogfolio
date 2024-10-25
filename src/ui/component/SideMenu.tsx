import React, { useRef } from 'react';
import Link from 'next/link';
import useOutsideClick from '@/ui/hooks/useOutsideClick';

export default function SideMenu({ handleClose }) {
  const dialogRef = useRef(null);

  // Close the dialog when clicking outside
  useOutsideClick(dialogRef, handleClose);

  return (
    <div className="fixed top-0 left-0 w-screen h-full bg-transparent-overlay z-50 lg:hidden">
      <div
        ref={dialogRef} // ref to this div to prevent closing if menu items click
        className="relative h-full w-72 bg-accent text-white shadow-lg px-8 py-10"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl uppercase">Menu</h2>
        </div>
        <div className="border-b-[1px] border-fade-grey my-2" />
        <ul className="list-none text-xl">
          <li className="mt-4">
            <Link href="/blogs" className="hover:text-dark-grey" onClick={() => handleClose()}>
              Blogs
            </Link>
          </li>
          <li className="mt-3">
            <Link href="/projects" className="hover:text-dark-grey" onClick={() => handleClose()}>
              Projects
            </Link>
          </li>
          <li className="mt-3">
            <Link href="/aboutMe" className="hover:text-dark-grey" onClick={() => handleClose()}>
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
