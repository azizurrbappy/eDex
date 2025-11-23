'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ children, path }) => {
  const pathname = usePathname();
  return (
    <Link
      className={`link ${pathname === `${path}` ? 'active' : ''}`}
      href={path}
    >
      {children}
    </Link>
  );
};

export default NavLink;
