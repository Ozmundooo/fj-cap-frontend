import React from "react";
import PlaceholderImage from "../assets/PlaceholderImage.png";
import Image from "next/image";
export default function ServiceCard(props) {
  return (
    <li className="bg-white   rounded-lg">
      <Image
        className="w-full border-x-2 border-t-2 rounded-x-lg rounded-t-lg border-[#242051]"
        src={PlaceholderImage}
      />
      <div className="px-4 py-4 border-x-2 border-b-2 rounded-x-lg rounded-b-lg border-[#242051]">
        <div className="bg-[#F0ABAB] px-4 py-2 rounded-full shadow-solid-primary w-fit mb-3">
          <span className="text-sm font-light lg:text-md xl:text-lg text-[#242051] font-subtitle text-center">
            ONLINE
          </span>
        </div>
        <h3 className="font-title text-[#242051] text-2xl lg:text-2xl xl:text-3xl my-2">
          Free 15-Minute Virtual Consultation
        </h3>
        <p className="font-subtitle text-[#242051] mb-4">
          Connect with us for a free 15-minute virtual consultation to discuss
          your needs and explore how we can support you on your journey to
          well-being.
        </p>
        <a
          href="#"
          className="font-subtitle whitespace-nowrap inline-flex justify-center px-8 md:px-14 py-3 md:py-4 border border-transparent rounded-md shadow-sm text-lg md:text-xl  hover:border-white text-white bg-[#221E5A] hover:bg-[#221E5A20] hover:text-[#221E5A]   duration-200 shadow-solid-primary "
        >
          Book now
        </a>
      </div>
    </li>
  );
}
