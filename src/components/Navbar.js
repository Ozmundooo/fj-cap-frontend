import React from "react";
import MainLogo from "../assets/Logos/MainLogo.png";
import Image from "next/image";
import Head from "next/head";
export default function navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="relative font-subtitle bg-[#EAD7D3]">
        <div className=" mx-auto px-6 lg:px-8 xl:px-12 2xl:px-24">
          <div className="flex justify-between items-center  py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <Image
                  className="h-16 w-auto lg:h-24"
                  src={MainLogo}
                  alt="Freshta Jamasi COUNSELLING AND PSYCHOTHERAPY Logo"
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10 text-md lg:text-lg">
              <a
                href="/"
                className=" font-medium text-black hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="/about"
                className=" font-medium text-black hover:text-gray-900"
              >
                About
              </a>
              <a
                href="/services"
                className=" font-medium text-black hover:text-gray-900"
              >
                Services
              </a>
              <a
                href="/contact"
                className=" font-medium text-black hover:text-gray-900"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="https://freshtajamasi.janeapp.com/"
                target="_blank"
                className="font-subtitle ml-8 whitespace-nowrap inline-flex items-center justify-center px-8 py-2 border border-transparent rounded-md shadow-sm text-lg lg:text-xl font-medium text-white bg-[#221E5A] hover:bg-[#221E5A20] hover:text-black duration-200 shadow-solid-primary "
              >
                Book now
              </a>
            </div>
          </div>
        </div>
        {/*
        Mobile menu, show/hide based on mobile menu state.
    
        Entering: "duration-200 ease-out"
          From: ""
          To: ""
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      */}

        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-500 absolute top-0 inset-x-0 p-2 transition transform origin md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="px-2">
                  <Image
                    className="h-16 w-auto"
                    src={MainLogo}
                    alt="Freshta Jamasi COUNSELLING AND PSYCHOTHERAPY Logo"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </a>
                  <a
                    href="/about"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}

                    <span className="ml-3 text-base font-medium text-gray-900">
                      About
                    </span>
                  </a>
                  <a
                    href="/services"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Services
                    </span>
                  </a>
                  <a
                    href="/contact"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/chart-bar */}

                    <span className="ml-3 text-base font-medium text-gray-900">
                      Contact
                    </span>
                  </a>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="https://freshtajamasi.janeapp.com/"
                  target="_blank"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-lg lg:text-xl font-medium text-white bg-[#221E5A] hover:bg-[#221E5A20] shadow-solid-primary "
                >
                  Book now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
