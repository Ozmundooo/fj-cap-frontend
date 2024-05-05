import React from "react";
import EmailIcon from "../assets/Icons/EmailIcon.svg";
import LocationIcon from "../assets/Icons/LocationIcon.svg";
import PhoneIcon from "../assets/Icons/PhoneIcon.svg";
import Image from "next/image";
import Link from "next/link";
export default function ContactForm() {
  return (
    <div className="  font-subtitle xl:flex  ">
      <form className="bg-white px-6  py-2 pb-5 border-[#242051] rounded-t-lg border-t-2 border-x-2 xl:rounded-none xl:border-0 xl:border-l-2 xl:border-y-2 xl:rounded-l-lg xl:rounded-y-lg text-[#242051] xl:w-3/5">
        <div className="flex flex-col gap-2 my-4">
          <label className="font-medium text-xl">Name</label>
          <input
            placeholder="John Doe"
            className="border-b-1 border-[#24205140] py-3"
          ></input>
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label className="font-medium text-xl">Email</label>
          <input
            placeholder="youremail@email.com"
            className="border-b-1 border-[#24205140] py-3"
          ></input>
        </div>

        <div className="flex flex-col gap-2 my-4">
          <label className="font-medium text-xl">Leave me a message</label>
          <textarea
            rows={5}
            placeholder="Please type your message here..."
            className="border-b-1 border-[#24205140] py-3"
          ></textarea>
        </div>
        <p className="font-light italic text-sm mb-4">
          By submitting this form via this web portal, you acknowledge and
          accept the risks of communicating your health information via this
          unencrypted email and electronic messaging and wish to continue
          despite those risks. By clicking "Send message" you agree to hold
          Brighter Vision harmless for unauthorized use, disclosure, or access
          of your protected health information sent via this electronic means.
        </p>
        <a
          href="#"
          className="font-subtitle whitespace-nowrap inline-flex justify-center px-6 md:px-10 py-2 border border-transparent rounded-md shadow-sm text-lg md:text-xl  hover:border-white text-white bg-[#221E5A] hover:bg-[#221E5A20] hover:text-black duration-200 shadow-solid-primary "
        >
          Send message
        </a>
      </form>
      <div className="bg-[#778AC1] px-6 py-5 pb-5 border-[#242051] rounded-b-lg border-b-2 border-x-2 xl:rounded-none xl:border-0 xl:border-r-2 xl:border-y-2 xl:rounded-r-lg xl:rounded-y-lg xl:w-2/5 flex flex-col">
        <div className="my-auto ">
          <h3 className="font-subtitle text-white text-2xl lg:text-2xl xl:text-3xl my-auto  pb-2">
            Reach out directly
          </h3>
          <p className="pb-4 text-white opacity-90 border-b-1 border-white border-opacity-40">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="text-white flex gap-2 my-3">
            <Image src={PhoneIcon} />
            <a className="my-auto text-lg" href={"tel:647-576-2751"}>
              (647)-576-2751
            </a>
          </div>
          <div className="text-white flex gap-2 my-3">
            <Image src={EmailIcon} />
            <a className="my-auto text-lg" href="mailto:info@freshtajamasi.ca">
              info@freshtajamasi.ca
            </a>
          </div>
          <div className="text-white flex gap-2 my-3">
            <Image src={LocationIcon} />
            <p className="my-auto text-lg">Toronto, ON | Woodbridge ON </p>
          </div>
        </div>
      </div>
    </div>
  );
}
