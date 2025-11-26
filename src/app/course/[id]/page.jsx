'use client';

import Container from '@/app/components/Container/Container';
import useAxios from '@/hooks/useAxios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const CourseDetails = ({ params }) => {
  const axios = useAxios();
  const [course, setCourse] = useState(null);
  const [id, setId] = useState();

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get('/courses');
      const data = res.data;

      const { id } = await params;
      setId(id);

      const filteredData = data.filter(item => item._id === id);
      setCourse(filteredData[0]);
    };
    fetchCourses();
  }, [params]);

  if (!course) {
    return (
      <div className="min-h-[calc(100vh-40vh)] flex items-center justify-center">
        <span className="loading loading-spinner text-[#FFA337]"></span>
      </div>
    );
  }

  const {
    courseTitle,
    courseImage,
    courseShortDescription,
    courseLongDescription,
    avgRating,
    totalRating,
    price,
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
    <>
      <section className="bg-gradient-to-b from-transparent to-[#379578]">
        <Container className="py-10 px-4 lg:px-0 flex items-center justify-between flex-col lg:flex-row gap-10 lg:items-start">
          <div>
            {/* breadcrumbs */}
            <div className="breadcrumbs text-sm">
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/course">Course</Link>
                </li>
                <li className="text-[#FFA337]">{courseTitle}</li>
              </ul>
            </div>

            {/* Course Info */}
            <div className="mt-4">
              <h1 className="text-4xl font-semibold">{courseTitle}</h1>
              <p className="mt-3">{courseShortDescription}</p>
            </div>

            {/* Action */}
            <div className="my-10 flex items-center gap-5">
              <Link
                href=""
                className="px-5 py-3 bg-[#ffffffa8] rounded-full border border-white font-medium"
              >
                Get Started
              </Link>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <p className="font-semibold">{avgRating}</p>
                <Rating
                  itemStyles={itemStyles}
                  style={{
                    maxWidth: 103,
                  }}
                  value={avgRating}
                  readOnly
                />
                <p>(Total: {totalRating})</p>
              </div>
            </div>
          </div>

          <div>
            <img className="rounded-2xl" src={courseImage} alt={courseTitle} />
          </div>
        </Container>
      </section>

      <Container className="mt-10">
        <section className="flex items-start justify-between gap-10">
          <div>
            <div className="bg-white shadow-sm p-4 rounded-xl">
              <h3 className="text-xl font-semibold">Description</h3>
              <p className="mt-4">{courseLongDescription}</p>
            </div>
          </div>

          <div className="p-4 border-2 border-[#2c8c70] min-w-[250px] rounded-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">${price}</h3>

              <span className="bg-amber-400 px-2 py-1 rounded-full">
                4 day ago
              </span>
            </div>

            <button className="bg-[#379578] text-white w-full mt-10 py-2 font-semibold rounded-full">
              Add To Cart
            </button>
            <button className="border border-[#379578] w-full mt-2 py-2 font-semibold rounded-full">
              Buy Now
            </button>
          </div>
        </section>
      </Container>
    </>
  );
};

export default CourseDetails;
