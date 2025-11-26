'use client';

import React, { useContext } from 'react';
import PrivateRoute from '../PrivateRoute';
import Container from '../components/Container/Container';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../context/AuthContext';
import useAxios from '@/hooks/useAxios';
import { RiDeleteBinLine, RiEyeLine } from '@remixicon/react';
import Link from 'next/link';
import { toast } from 'react-toastify';

const page = () => {
  const axios = useAxios();
  const { user } = useContext(AuthContext);

  const { data: courses, refetch } = useQuery({
    queryKey: ['courses', user?.email],
    queryFn: async () => {
      const res = await axios.get('/courses');
      return res.data;
    },
  });

  const handleCourseDelete = id => {
    axios.delete(`/courses/${id}`).then(res => {
      if (res.data.deletedCount) {
        refetch();
        toast.success('Course delete successfully!');
      }
    });
  };

  return (
    <>
      <PrivateRoute>
        <Container className="max-w-3xl lg:px-0 px-4 pt-10 mb-10">
          {/* Page Head */}
          <section className="text-center pb-10">
            <h1 className="text-3xl font-bold pb-2">Manage Course</h1>
            <p className="text-gray-500">
              View, edit, and organize your courses in one place.
            </p>
          </section>

          {/* Page Content */}
          <section>
            <ul className="list bg-base-100 rounded-box shadow-md">
              {courses
                ? courses.map(course => (
                    <li key={course._id} className="list-row">
                      <div>
                        <img
                          className="size-10 rounded-box"
                          src={course.courseImage}
                        />
                      </div>
                      <div>
                        <div>{course.courseTitle}</div>
                        <div className="text-xs uppercase font-semibold opacity-60">
                          {course.Instructor}
                        </div>
                      </div>
                      <Link
                        href={`/course/${course._id}`}
                        className="btn btn-soft btn-primary rounded-full p-2 h-fit hover:text-white"
                      >
                        <RiEyeLine></RiEyeLine>
                      </Link>
                      <button
                        onClick={() => handleCourseDelete(course._id)}
                        className="btn btn-soft btn-error rounded-full p-2 h-fit hover:text-white"
                      >
                        <RiDeleteBinLine></RiDeleteBinLine>
                      </button>
                    </li>
                  ))
                : ''}
            </ul>
          </section>
        </Container>
      </PrivateRoute>
    </>
  );
};

export default page;
