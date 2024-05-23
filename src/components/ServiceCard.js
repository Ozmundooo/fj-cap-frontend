import React from "react";
import PlaceholderImage from "../assets/PlaceholderImage.png";
import Image from "next/image";
export default function ServiceCard(props) {
  return (
    <li className="bg-white border-[#242051] border-2 rounded-lg">
      <Image
        alt={props.title + " Image"}
        className="w-full  rounded-x-lg rounded-t-lg h-[300px] lg:h-[400px]  object-cover "
        src={props.image}
      />

      <div className="px-4 py-4  rounded-x-lg rounded-b-lg flex flex-col justify-between ">
        <div className="">
          <div className="flex gap-2">
            {props.online ? (
              <div className="bg-[#F0ABAB] px-4 py-2 rounded-full shadow-solid-primary w-fit mb-3">
                <span className="text-sm font-light lg:text-md xl:text-lg text-[#242051] font-subtitle text-center">
                  ONLINE
                </span>
              </div>
            ) : (
              <></>
            )}
            {props.inperson ? (
              <div className="bg-[#F0ABAB] px-4 py-2 rounded-full shadow-solid-primary w-fit mb-3">
                <span className="text-sm font-light lg:text-md xl:text-lg text-[#242051] font-subtitle text-center">
                  IN PERSON
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <h3 className="font-title text-[#242051] text-2xl lg:text-2xl xl:text-3xl my-2">
            {props.title}
          </h3>
          <p className="font-subtitle text-[#242051] mb-4">{props.subtitle}</p>
        </div>
        <div className="">
          <a
            href="https://freshtajamasi.janeapp.com/"
            className=" font-subtitle whitespace-nowrap inline-flex items-end justify-center px-8 md:px-14 py-3 md:py-4 border border-transparent rounded-md shadow-sm text-lg md:text-xl  hover:border-white text-white bg-[#221E5A] hover:bg-[#221E5A20] hover:text-[#221E5A]   duration-200 shadow-solid-primary "
          >
            Book now
          </a>
        </div>
      </div>
    </li>
  );
}
