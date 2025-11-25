import React from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Link from 'next/link';

const Card = ({ course }) => {
  const {
    courseImage,
    courseTitle,
    courseLongDescription,
    avgRating,
    totalRating,
    price,
    Instructor,
    _id,
  } = course;

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
    <div className="card bg-base-100 w-xs shadow-sm h-fit rounded-2xl">
      <figure>
        <img className="rounded-lg" src={courseImage} alt={courseTitle} />
      </figure>
      <div className="p-3">
        <h2 className="card-title">{courseTitle}</h2>
        <p className="m-0 text-sm text-gray-600 my-2">
          {courseLongDescription}
        </p>
        <div className="flex items-center gap-1.5">
          <h4 className="font-semibold">{avgRating}</h4>
          <Rating
            itemStyles={itemStyles}
            style={{
              maxWidth: 103,
            }}
            value={avgRating}
            readOnly
          />
          <p className="text-sm font-medium text-gray-500">({totalRating})</p>
        </div>

        <div className="mt-3">
          <Link
            href={`course/${_id}`}
            className="bg-[#ffa500] flex justify-center py-1.5 rounded-full text-white font-semibold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
