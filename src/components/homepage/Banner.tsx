import React from "react";
import Image from "next/image";
import Link from "next/link";
import bannerImage from "@/asset/hero_img.jpg";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="relative flex min-h-[450px] items-center overflow-hidden rounded-3xl bg-gradient-to-br from-[#eef8e9] via-[#f8fbf6] to-[#e3f3dc] px-6 py-10 sm:px-10 md:px-16 lg:px-20">
        {/* Background Decoration */}
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#23BE0A]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-[#23BE0A]/10 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-center justify-between gap-10 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block rounded-full bg-[#23BE0A]/10 px-4 py-2 text-sm font-semibold text-[#23BE0A]">
              Discover Your Next Read
            </span>

            <h1 className="mt-5 max-w-xl font-serif text-4xl font-bold leading-tight tracking-tight text-[#131313] sm:text-5xl lg:text-6xl">
              Books to
              <span className="text-[#23BE0A]"> freshen up </span>
              your bookshelf
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-600 md:text-lg">
              Explore amazing stories, discover new authors, and find your
              next favorite book.
            </p>

            <Link
              href="/books"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#23BE0A] px-7 py-4 font-semibold text-white shadow-lg shadow-[#23BE0A]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#1fa308] hover:shadow-xl"
            >
              View The List
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Banner Image */}
          <div className="relative flex flex-1 justify-center md:justify-end">
            <div className="absolute h-64 w-64 rounded-full bg-[#23BE0A]/10 blur-2xl sm:h-80 sm:w-80" />

            <div className="relative z-10 rounded-3xl bg-white/50 p-4 shadow-xl backdrop-blur-sm">
              <Image
                src={bannerImage}
                alt="Books displayed on a bookshelf"
                width={450}
                height={450}
                priority
                className="h-auto w-full max-w-[300px] object-contain sm:max-w-[360px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;