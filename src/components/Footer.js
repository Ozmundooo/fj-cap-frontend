import React from "react";
import EmailIcon from "../assets/Icons/EmailIconBlack.svg";
import LocationIcon from "../assets/Icons/LocationIconBlack.svg";
import PhoneIcon from "../assets/Icons/PhoneIconBlack.svg";
import FooterImageOne from "../assets/FooterImageOne.svg";
import FooterImageTwo from "../assets/FooterImageTwo.svg";
import FooterImageThree from "../assets/FooterImageThree.svg";
import Image from "next/image";
import Link from "next/link";
import MainLogo from "../assets/Logos/MainLogo.png";
import { SocialIcon } from "react-social-icons";
export default function Footer() {
  return (
    <footer className="bg-[#F0ABAB] font-subtitle px-4 lg:px-8  xl:px-12 2xl:px-24  py-5 text-black border-t-2 border-black border-opacity-50">
      <div className=" flex flex-col lg:flex-row justify-between pb-2">
        {" "}
        <div className="lg:w-1/3">
          <div className="flex gap-2 mb-3 lg:hidden">
            <Image
              className="h-16 w-auto lg:h-24"
              src={MainLogo}
              alt="Freshta Jamasi COUNSELLING AND PSYCHOTHERAPY Logo"
            />

            <h3 className="my-auto font-title text-xl">
              Freshta Jamasi<br></br>
              <span className="font-subtitle text-sm">
                Counselling & Phsycotherapy
              </span>
            </h3>
          </div>
          <div className=" flex gap-2 py-2">
            <Image
              alt="Icon of a Phone"
              className="fill-black"
              src={PhoneIcon}
            />
            <a className="my-auto " href={"tel:647-576-2751"}>
              (647)-576-2751
            </a>
          </div>
          <div className=" flex gap-2 py-2">
            <Image alt="Email Icon" src={EmailIcon} />
            <a className="my-auto " href="mailto:info@freshtajamasi.ca">
              info@freshtajamasi.ca
            </a>
          </div>
          <div className=" flex gap-2 py-2">
            <Image alt="Icon of pin for a map" src={LocationIcon} />
            <p className="my-auto ">Toronto, ON | Woodbridge. ON </p>
          </div>
          <SocialIcon
            label="my instagram account"
            url="https://www.instagram.com/therapyintoronto/"
            bgColor="black"
            fgColor="#F0ABAB"
            className="my-2 lg:mt-5"
          />
        </div>
        <div className=" ">
          <div className="lg:flex gap-2 mb-3 hidden ">
            <Image
              className="h-16 w-auto lg:h-24"
              src={MainLogo}
              alt="Freshta Jamasi COUNSELLING AND PSYCHOTHERAPY Logo"
            />
            {/* <div className="my-auto">
              <h3 className=" font-title text-xl lg:text-3xl ">
                Freshta Jamasi<br></br>
              </h3>
              <span className="font-subtitle text-sm lg:text-lg leading-tight">
                Counselling & Phsycotherapy
              </span>
            </div> */}
          </div>
        </div>
        <div className="my-2 flex flex-col justify-between lg:w-1/3 ">
          <p className="w-3/4 lg:text-right text-sm lg:ml-auto">
            If you require urgent care, or if your or someone’s safety is at
            risk, please seek emergency services at your local emergency room or
            call 911.
          </p>
          <div className="flex gap-2 my-4 lg:ml-auto">
            <Image alt="CRPO" src={FooterImageOne} />
            <Image alt="Flag" src={FooterImageTwo} />

            <a
              href="https://www.psychologytoday.com/profile/1068053"
              // class="sx-verified-seal"
              target="_blank"
            >
              <Image alt="Psycology Today Logo" src={FooterImageThree} />
            </a>
            {/* <script
            type="text/javascript"
            src="https://member.psychologytoday.com/verified-seal.js"
            data-badge="16"
            data-id="1068053"
            data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy9bQkFER0VdL3Byb2ZpbGUvW1BST0ZJTEVfSURdP2NhbGxiYWNrPXN4Y2FsbGJhY2s="
          ></script> */}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-black border-opacity-20 flex flex-col lg:flex-row justify-between gap-2 py-2">
        <p>©Freshta Jamasi 2024. All Rights Reserved</p>
        <p>
          Developed by:{" "}
          <a className="underline" href="https://www.oadev.ca/">
            OADev
          </a>
        </p>
      </div>
    </footer>
  );
}
