import React from 'react';
import Container from '../components/Container/Container';
import { RiSearchLine } from '@remixicon/react';
import AllCourseCard from './AllCourse';

const Course = () => {
  return (
    <>
      <Container className="px-4 lg:px-0">
        <section className="my-10">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">All Course</h1>
            <p className="text-gray-500">eDex All Course</p>
          </div>

          <div className="flex items-center justify-center gap-2 md:flex-row flex-col">
            <label className="input rounded-full">
              <RiSearchLine size={18} className="text-gray-500" />
              <input type="search" required placeholder="Search" />
            </label>

            <select defaultValue="Sort by" className="select rounded-full">
              <option disabled={true}>Sort by</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </section>

        <section className="mb-20">
          <AllCourseCard></AllCourseCard>
        </section>
      </Container>
    </>
  );
};

export default Course;
