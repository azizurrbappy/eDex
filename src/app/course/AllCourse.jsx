'use client';

import useAxios from '@/hooks/useAxios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const AllCourse = () => {
  const axios = useAxios();
  const [courses, setCourses] = useState();

  useEffect(() => {
    const getCourses = async () => {
      await axios.get('/courses').then(res => {
        setCourses(res.data);
      });
    };
    getCourses();
  }, []);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto w-fit gap-10">
        {courses ? (
          courses.map(course => <Card key={course._id} course={course}></Card>)
        ) : (
          <div className="min-h-50 flex items-center justify-center">
            <span className="loading loading-spinner text-[#FFA337]"></span>
          </div>
        )}
      </section>
    </>
  );
};

export default AllCourse;
