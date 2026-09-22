import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/asset/book.ico";

const link = (
  <>
    <li>
      <Link
        href="/"
        className="rounded-lg px-4 py-2 font-medium transition-colors hover:bg-[#23BE0A]/10 hover:text-[#23BE0A]"
      >
        Home
      </Link>
    </li>

    <li>
      <Link
        href="/books"
        className="rounded-lg px-4 py-2 font-medium transition-colors hover:bg-[#23BE0A]/10 hover:text-[#23BE0A]"
      >
        Books
      </Link>
    </li>

    <li>
      <Link
        href="/listed-books"
        className="rounded-lg px-4 py-2 font-medium transition-colors hover:bg-[#23BE0A]/10 hover:text-[#23BE0A]"
      >
        Listed Books
      </Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="navbar min-h-[76px] p-0">
          {/* Left Side */}
          <div className="navbar-start">
            {/* Mobile Menu */}
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost mr-1 rounded-xl lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content z-50 mt-3 w-56 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
              >
                {link}
              </ul>
            </div>

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl px-2 py-1 transition-opacity hover:opacity-80"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#23BE0A]/10">
                <Image
                  src={logo}
                  width={28}
                  height={28}
                  alt="Book Vibe logo"
                  className="object-contain"
                />
              </div>

              <span className="hidden font-serif text-xl font-bold text-[#131313] sm:block">
                Book Vibe
              </span>
            </Link>
          </div>

          {/* Center Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal items-center gap-1 px-1">
              {link}
            </ul>
          </div>

          {/* Right Side */}
          <div className="navbar-end gap-2">
            <button className="btn btn-success">
              Sign in
            </button>

            <button className="btn btn-info">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;