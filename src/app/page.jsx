import React from 'react';
import Container from './components/Container/Container';
import Image from 'next/image';
import { RiSearch2Line } from '@remixicon/react';

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
              accident,
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
    </>
  );
};

export default Home;
