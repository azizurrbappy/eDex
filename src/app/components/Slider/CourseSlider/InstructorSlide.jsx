'use client';

import '@smastrom/react-rating/style.css';
import Image from 'next/image';
import Link from 'next/link';

const InstructorSlide = ({ instructor }) => {
  const { displayName, skill, photoURL } = instructor;

  return (
    <div className="card bg-base-100 w-xs shadow-sm p-4 rounded-3xl mb-16">
      <figure className="rounded-xl">
        <img src={photoURL} alt={displayName} />
      </figure>

      <div className="card-body p-0 mt-4 text-center">
        <h2 className="text-base">{displayName}</h2>
        <p className="text-gray-500">{skill}</p>
      </div>
    </div>
  );
};

export default InstructorSlide;
