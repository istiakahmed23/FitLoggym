import Image from 'next/image';
import React from 'react';
import bannerImage from '@/assets/banner.png'
import Link from 'next/link';

const Banner = () => {
  return (
    <section className="w-full container  bg-[#0B0C0F] px-3 py-6 sm:px-5 lg:px-8">
      <div className="container mx-auto grid w-full  grid-cols-1 items-center gap-6 rounded-xl border border-[#25272E] bg-[#15161B] px-6 py-8 sm:px-8 md:grid-cols-2 md:px-10 lg:px-12 lg:py-10">

        {/* Left Content */}
        <div className="order-2 flex flex-col items-center text-center md:order-1 md:items-start md:text-left">
          <p className="mb-4 text-[10px] font-bold tracking-wider text-[#C2F800]">
            WORKOUT LIBRARY
          </p>

          <h1 className="max-w-xl text-2xl font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-2xl lg:text-3xl">
            Train with intent. Log
            <br className="hidden sm:block" /> Every set.
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-[#858B98]">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today's plan, and watch the week's work add up.
          </p>

          {/* <Link
            href="#library"
            className="mt-5 inline-block rounded-md bg-[#C2F800] px-5 py-3 text-[10px] font-extrabold uppercase text-black transition-colors duration-200 hover:bg-[#d4ff33] focus:outline-none focus:ring-2 focus:ring-[#C2F800] focus:ring-offset-2 focus:ring-offset-[#15161B]"
          >
            Browse Workouts
          </Link> */}


          <a
            href="#library"
            className="mt-5 inline-block rounded-md bg-[#C2F800] px-5 py-3 text-[10px] font-extrabold uppercase text-black transition-colors duration-200 hover:bg-[#d4ff33]"
          >
            Browse Workouts
          </a>

        </div>

        {/* Right Image */}
        <div className="order-1 flex items-center justify-center md:order-2 md:justify-end">
          <div className="relative h-52 w-full max-w-[280px] sm:h-60 md:h-64 lg:h-72">
            <Image
              src={bannerImage}
              alt="Athlete demonstrating a gym workout"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 35vw"
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;