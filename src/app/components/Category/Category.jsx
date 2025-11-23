import { RiArrowRightUpLine } from '@remixicon/react';
import Link from 'next/link';
import React from 'react';

const Category = ({ children, category, href }) => {
  return (
    <div className="flex items-center justify-between max-w-2xs bg-white py-2.5 px-3 rounded-2xl hover:shadow-sm hover:shadow-[#FFA337] duration-500 cursor-pointer">
      <div className="flex items-center gap-2.5">
        {children}
        <h4 className="text-lg font-semibold">{category}</h4>
      </div>

      <div className="hover:bg-gradient-to-b from-[#FFC27A] to-[#FFA337] rounded-full p-1.5 text-[#FFA337] hover:text-white duration-300">
        <Link href={href ? href : ''}>
          <RiArrowRightUpLine></RiArrowRightUpLine>
        </Link>
      </div>
    </div>
  );
};

export default Category;
