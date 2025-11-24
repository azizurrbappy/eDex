import React from 'react';
import Container from './components/Container/Container';
import Image from 'next/image';
import {
  RiBankLine,
  RiBriefcaseLine,
  RiCamera4Line,
  RiDatabase2Line,
  RiFileCodeLine,
  RiGlassesLine,
  RiGraduationCapLine,
  RiGroupLine,
  RiHeartPulseLine,
  RiLightbulbAiLine,
  RiMegaphoneLine,
  RiMusicLine,
  RiPenNibLine,
  RiSearch2Line,
  RiSunCloudyLine,
  RiVideoOnLine,
} from '@remixicon/react';
import CourseSlider from './components/Slider/CourseSlider/CourseSlider';
import Link from 'next/link';
import Category from './components/Category/Category';
import InstructorSlider from './components/Slider/CourseSlider/InstructorSlider';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#6176F7]">
        <Container className="py-36 flex items-center justify-between px-4 lg:px-0 lg:flex-row flex-col">
          <div>
            <p className="text-[#FFC27A] uppercase lg:text-2xl font-semibold text-xl">
              START TO SUCCESS
            </p>
            <h1 className="lg:text-5xl text-white font-semibold lg:py-6 text-4xl py-4">
              Access To 5000+ Courses <br /> from 300 Instructors <br />&
              Institutions
            </h1>
            <p className="text-gray-300 lg:text-xl text-lg">
              Various versions have evolved over the years, sometimes by
              accident.
            </p>

            <form className="mt-8 relative">
              <input
                type="text"
                placeholder="What do want to learn?"
                className="input rounded-full w-full outline-none border-none pr-12"
              />

              <button className="btn px-2 shadow-none border-0 rounded-full bg-gradient-to-b from-[#FFC27A] to-[#FFA337] text-white absolute right-[1px] z-1">
                <RiSearch2Line></RiSearch2Line>
              </button>
            </form>
          </div>
          <div>
            <Image
              className="lg:-mt-60 -mt-15"
              src="/images/saly-10.png"
              alt="saly"
              width={738}
              height={738}
              priority
            ></Image>
          </div>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="bg-gray-300">
        <Container className="py-12 flex items-center justify-between lg:px-0 px-4 flex-wrap gap-10">
          <div className="flex items-center gap-3">
            <div
              className={`text-white p-3 bg-gradient-to-b from-[#2AF9B1] to-[#20B486] rounded-full max-w-fit`}
            >
              <RiGraduationCapLine size={26}></RiGraduationCapLine>
            </div>

            <div>
              <h2 className="text-xl font-bold">300</h2>
              <p className="text-base text-gray-600">Instructors</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`text-white p-3 bg-gradient-to-b from-[#A988F9] to-[#6D3AE9] rounded-full max-w-fit`}
            >
              <RiGroupLine size={26}></RiGroupLine>
            </div>

            <div>
              <h2 className="text-xl font-bold">20,000</h2>
              <p className="text-base text-gray-600">Students</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`text-white p-3 bg-gradient-to-b from-[#FFA4AF] to-[#EE455A] rounded-full max-w-fit`}
            >
              <RiVideoOnLine size={26}></RiVideoOnLine>
            </div>

            <div>
              <h2 className="text-xl font-bold">10,000</h2>
              <p className="text-base text-gray-600">Videos</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div
              className={`text-white p-3 bg-gradient-to-b from-[#92DAF0] to-[#21C9FF] rounded-full max-w-fit`}
            >
              <RiVideoOnLine size={26}></RiVideoOnLine>
            </div>

            <div>
              <h2 className="text-xl font-bold">1,00,000</h2>
              <p className="text-base text-gray-600">User's</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Popular Course Section */}
      <Container className="px-4 lg:px-0 mt-20">
        <div>
          <h2 className="text-4xl font-semibold">
            Most <span className="text-[#3461FD]">Popular Course</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>

        <section className="mt-12">
          <CourseSlider></CourseSlider>
        </section>
      </Container>

      {/* Most Popular Category */}
      <section className="bg-[#E7E9EB] py-20 mt-20">
        <Container className="px-4 lg:px-0">
          <div>
            <h2 className="text-4xl font-semibold">
              Most <span className="text-[#3461FD]">Popular Category</span>
            </h2>
            <p className="text-gray-600 mt-2">
              Various versions have evolved over the years, sometimes by
              accident.
            </p>
          </div>

          <section className="mt-12 grid gap-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            <Category category="Design" href="">
              <RiPenNibLine size={28}></RiPenNibLine>
            </Category>

            <Category category="Development" href="">
              <RiFileCodeLine size={28}></RiFileCodeLine>
            </Category>

            <Category category="Marketing" href="">
              <RiMegaphoneLine size={28}></RiMegaphoneLine>
            </Category>

            <Category category="Business" href="">
              <RiBriefcaseLine size={28}></RiBriefcaseLine>
            </Category>

            <Category category="Lifestyle" href="">
              <RiSunCloudyLine size={28}></RiSunCloudyLine>
            </Category>

            <Category category="Photography" href="">
              <RiCamera4Line size={28}></RiCamera4Line>
            </Category>

            <Category category="Music" href="">
              <RiMusicLine size={28}></RiMusicLine>
            </Category>

            <Category category="Data Science" href="">
              <RiDatabase2Line size={28}></RiDatabase2Line>
            </Category>

            <Category category="Personal Develop" href="">
              <RiLightbulbAiLine size={28}></RiLightbulbAiLine>
            </Category>

            <Category category="Health & Fitness" href="">
              <RiHeartPulseLine size={28}></RiHeartPulseLine>
            </Category>

            <Category category="Finance" href="">
              <RiBankLine size={28}></RiBankLine>
            </Category>

            <Category category="Teaching" href="">
              <RiGlassesLine size={28}></RiGlassesLine>
            </Category>
          </section>
        </Container>
      </section>

      {/* Our Best Instructor */}
      <Container className="px-4 lg:px-0 mt-20">
        <div>
          <h2 className="text-4xl font-semibold">
            Our Best <span className="text-[#3461FD]">Instructor</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Various versions have evolved over the years, sometimes by accident.
          </p>
        </div>

        <section className="mt-12">
          <InstructorSlider></InstructorSlider>
        </section>
      </Container>

      {/* Banner Section */}
      <section className="bg-[#F8F4FF] mt-20 py-10">
        <Container className="flex items-center gap-20 lg:flex-row flex-col lg:px-0 px-4 justify-center">
          <Image
            src="/images/package.png"
            alt="package"
            width={512}
            height={412}
          ></Image>
          <div>
            <h2 className="text-4xl font-semibold">
              Join <span className="text-[#3461FD]">World's largest</span>{' '}
              learning <br /> platform today
            </h2>
            <p className="text-lg my-3 text-gray-600">
              Start learning by registering for free
            </p>
            <p className="text-gray-500">
              Ut pharetra ipsum nec leo blandit, sit amet tincidunt eros
              pharetra. Nam sed imperdiet <br /> turpis. In hac habitasse platea
              dictumst. <br /> Praesent nulla massa, hendrerit vestibulum
              gravida in, feugiat auctor felis.
            </p>
            <Link
              href=""
              className="btn bg-gradient-to-b from-[#FFC27A] to-[#FFA337] border-0 rounded-full text-white font-medium shadow-none mt-5"
            >
              Sign up for Free
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
