'use client';

import { RiArrowRightUpLine } from '@remixicon/react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Slide = () => {
  const [rating, setRating] = useState(3);

  const itemStyles = {
    itemShapes: (
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    ),
    activeFillColor: '#FFA500',
    inactiveFillColor: '#E5E5E5',
    activeStrokeColor: '#FFA500',
    inactiveStrokeColor: '#E5E5E5',
  };

  return (
    <div className="card bg-base-100 w-xs shadow-sm p-4 rounded-3xl my-2">
      <figure className="rounded-xl relative">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
        <span className="text-sm font-medium uppercase py-1 px-2 rounded-sm bg-[#ffffffdd] absolute top-2 left-2">
          HTML
        </span>
      </figure>

      <div className="card-body p-0 mt-4">
        <h2 className="font-medium text-base">
          Various versions have evolved daf
        </h2>

        <div className="flex items-center gap-1 text-base text-gray-600 mb-4">
          <Rating
            itemStyles={itemStyles}
            style={{
              maxWidth: 103,
            }}
            value={2}
            readOnly
          />
          <h3>(3)</h3>
        </div>

        <hr className="text-gray-200 mb-4" />

        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">$ 500</h3>

          <Link
            href=""
            className="hover:bg-gradient-to-b from-[#FFC27A] to-[#FFA337] rounded-full p-1.5 text-[#FFA337] hover:text-white duration-300"
          >
            <RiArrowRightUpLine></RiArrowRightUpLine>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
