import Container from '@/app/components/Container/Container';
import NavLink from '@/app/components/NavLink/NavLink';
import { RiLock2Line, RiMenu2Fill } from '@remixicon/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const links = [
    {
      pageName: 'Home',
      path: '/',
    },
    {
      pageName: 'About',
      path: '/about',
    },
    {
      pageName: 'Course',
      path: '/course',
    },
    {
      pageName: 'Blog',
      path: '/blog',
    },
    {
      pageName: 'Contact',
      path: '/contact',
    },
  ];

  return (
    <>
      <nav className="bg-base-100 shadow-sm sticky top-0 z-50">
        <Container className="navbar lg:px-0 px-4">
          <div className="navbar-start space-x-3">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="lg:hidden">
                <RiMenu2Fill size={24} color="#333" />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links.map((link, index) => (
                  <li key={index}>
                    <NavLink path={link.path}>{link.pageName}</NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/">
              <h2 className="text-2xl font-bold">
                <span className="text-[#FFC27A]">e</span>Dex
              </h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink path={link.path}>{link.pageName}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="navbar-end space-x-2">
            <Link
              href=""
              className="flex items-center justify-center gap-1 border-0 rounded-full font-medium cursor-pointer hover:text-white hover:bg-gradient-to-b from-[#FFC27A] to-[#FFA337] py-2 px-4 duration-200 font-medium"
            >
              <RiLock2Line size={16}></RiLock2Line> Login
            </Link>

            <Link
              href=""
              className="btn bg-gradient-to-b from-[#FFC27A] to-[#FFA337] border-0 rounded-full text-white font-medium shadow-none"
            >
              Sign up for Free
            </Link>
          </div>
        </Container>
      </nav>
    </>
  );
};

export default Navbar;
