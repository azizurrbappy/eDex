'use client';

import React, { use, useState } from 'react';
import PrivateRoute from '../PrivateRoute';
import Container from '../components/Container/Container';
import { AuthContext } from '../context/AuthContext';
import useAxios from '@/hooks/useAxios';
import { toast } from 'react-toastify';

const AddCourse = () => {
  const { user } = use(AuthContext);
  const [textLength, setTextLength] = useState('');
  const [textLength2, setTextLength2] = useState('');
  const axios = useAxios();

  const handleAddCourse = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const profilePhoto = user?.photoURL;
    const courseTitle = e.target.courseTitle.value;
    const courseImage = e.target.courseImage.value;
    const category = e.target.category.value;
    const shortDescription = e.target.shortDescription.value;
    const description = e.target.description.value;
    const coursePrice = Number(e.target.coursePrice.value);
    const createdAt = new Date().toISOString();

    const addCourse = {
      Instructor: name,
      email: email,
      photoUrl: profilePhoto,
      courseTitle: courseTitle,
      courseImage: courseImage,
      category: category,
      courseLongDescription: description,
      courseShortDescription: shortDescription,
      price: coursePrice,
      avgRating: 0,
      totalRating: 0,
      createdAt: createdAt,
    };

    axios.post('/courses', addCourse).then(res => {
      if (res.data.insertedId) {
        e.target.reset();
        toast.success('Course added successfully!');
      }
    });
  };

  return (
    <>
      <PrivateRoute>
        <Container className="max-w-3xl lg:px-0 px-4 pt-10 mb-10">
          {/* Page Head */}
          <section className="text-center pb-10">
            <h1 className="text-3xl font-bold pb-2">Add New Course</h1>
            <p className="text-gray-500">
              Fill out the form below to add a new course to your course list
            </p>
          </section>

          <section className="p-4 border border-gray-300 rounded-xl">
            <div>
              <h4 className="text-base font-semibold">Personal Info</h4>
              <p className="text-sm text-gray-500">
                Enter your personal information.
              </p>
            </div>

            <form onSubmit={handleAddCourse} className="pt-5">
              <div className="pb-3.5">
                <p className="text-sm font-semibold pb-1.5">Full Name *</p>
                {user ? (
                  <input
                    type="text"
                    name="name"
                    required
                    className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                    placeholder="Full Name"
                    defaultValue={user.displayName}
                    disabled
                  />
                ) : (
                  <div className="skeleton w-full h-10 rounded-lg"></div>
                )}
              </div>

              <div className="pb-3.5">
                <p className="text-sm font-semibold pb-1.5">Email *</p>
                {user ? (
                  <input
                    type="email"
                    name="email"
                    required
                    className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                    placeholder="Full Name"
                    defaultValue={user.email}
                    disabled
                  />
                ) : (
                  <div className="skeleton w-full h-10 rounded-lg"></div>
                )}
              </div>

              <hr className="my-5 text-gray-300" />

              <div className="">
                <h4 className="text-base font-semibold">Course Info</h4>
                <p className="text-sm text-gray-500">
                  Enter the basic details about your course.
                </p>
              </div>

              <div className="pt-5">
                <p className="text-sm font-semibold pb-1.5">Course Title *</p>
                <input
                  type="text"
                  name="courseTitle"
                  required
                  className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                  placeholder="Enter a clear, descriptive course title"
                />
              </div>

              <div className="pt-3.5">
                <p className="text-sm font-semibold pb-1.5">
                  Course Short Description
                </p>
                <textarea
                  name="shortDescription"
                  onChange={e => setTextLength2(e.target.value)}
                  value={textLength2}
                  maxLength={120}
                  className="textarea outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                  placeholder="Provide a detailed short description of your course..."
                ></textarea>
                <div className="text-right text-xs text-gray-500 pt-1">
                  <p>{textLength2.length}/120</p>
                </div>
              </div>

              <div className="pt-3.5">
                <p className="text-sm font-semibold pb-1.5">
                  Course Long Description
                </p>
                <textarea
                  name="description"
                  onChange={e => setTextLength(e.target.value)}
                  value={textLength}
                  maxLength={2000}
                  className="textarea outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                  placeholder="Provide a detailed long description of your course..."
                ></textarea>
                <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                  <p>
                    Include features, benefits, specifications, and usage
                    instructions.
                  </p>
                  <p>{textLength.length}/2000</p>
                </div>
              </div>

              <div className="pt-3.5">
                <p className="text-sm font-semibold pb-1.5"> Category *</p>
                <select
                  name="category"
                  required
                  defaultValue="Select Category"
                  className="select outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                >
                  <option disabled={true}>Select Category</option>
                  <option>Design</option>
                  <option>Development</option>
                  <option>Marketing</option>
                  <option>LandBusiness</option>
                  <option>Lifestyle</option>
                  <option>Photography</option>
                  <option>Music</option>
                  <option>Data Science</option>
                  <option>Personal Develop</option>
                  <option>Health & Fitness</option>
                  <option>Finance</option>
                  <option>Teaching</option>
                </select>
              </div>

              <div className="pt-5">
                <p className="text-sm font-semibold pb-1.5">
                  Price <span>($)</span> *
                </p>
                <input
                  name="coursePrice"
                  type="text"
                  required
                  className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                  placeholder="example: 1200"
                />
              </div>

              <div className="pt-3.5 pb-10">
                <p className="text-sm font-semibold">Course Media *</p>
                <div className="text-xs text-gray-500 pt-0.5 pb-2">
                  <p>Enter high-quality images to showcase your course</p>
                </div>
                <input
                  name="courseImage"
                  type="text"
                  required
                  className="input outline-0 w-full focus:border-[#7065f0] duration-200 rounded-lg"
                  placeholder="Enter photo url"
                />
              </div>

              <input
                className="btn bg-[#7065f0] text-white font-medium w-full rounded-full"
                type="submit"
                value="Add Course"
              />
            </form>
          </section>
        </Container>
      </PrivateRoute>
    </>
  );
};

export default AddCourse;
