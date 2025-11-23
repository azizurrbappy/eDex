import React from 'react';
import Container from './components/Container/Container';
import Image from 'next/image';
import {
  RiGraduationCapLine,
  RiGroupLine,
  RiSearch2Line,
  RiVideoOnLine,
} from '@remixicon/react';
import Statistics from './components/Statistics/Statistics';

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
    </>
  );
};

export default Home;
