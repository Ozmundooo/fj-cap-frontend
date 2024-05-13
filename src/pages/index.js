import React from "react";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import FreeConsult from "../assets/FreeConsult.jpeg";
import IndividualTherapy from "../assets/IndividualTherapy.jpeg";
import StudentTherapy from "../assets/StudentTherapy.jpeg";
import RateReduced from "../assets/RateReduced.jpeg";
import ISRFY from "../assets/ISRFY.jpg";
import Image from "next/image";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Freshta Jamasi | Counselling and Psychotherapy</title>
        <meta
          name="description"
          content="Freshta Jasami: Empowering Therapist for Diverse Identities. Discover Validation, Growth, and Support in Your Journey to Mental Wellness."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="counselling, psychotherapy, therapy, mental health"
        />
        <meta name="author" content="Freshta Jamasi" />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Freshta Jamasi | Counselling and Psychotherapy"
        />
        <meta
          property="og:description"
          content="Freshta Jasami: Empowering Therapist for Diverse Identities. Discover Validation, Growth, and Support in Your Journey to Mental Wellness."
        />
        <meta property="og:image" content="/assets/Logos/MainLogo.png" />
        <meta property="og:url" content="https://freshtajamasi.ca" />
        <meta
          name="twitter:title"
          content="Freshta Jamasi | Counselling and Psychotherapy"
        />
        <meta
          name="twitter:description"
          content="Freshta Jasami: Empowering Therapist for Diverse Identities. Discover Validation, Growth, and Support in Your Journey to Mental Wellness."
        />
        <meta name="twitter:image" content="/assets/Logos/MainLogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://freshtajamasi.ca" />
      </Head>
      <Navbar />
      <main className="bg-[#EAD7D3] ">
        <section
          id="homehero"
          className="h-[70vh] lg:h-[80vh] bg-cover bg-heroImage bg-center px-4 pb-6 lg:px-8 lg:pb-10 xl:px-12 2xl:px-24 sm:p-6 flex "
        >
          <div className="mt-auto max-w-[1700px]">
            <div className="bg-[#F0ABAB] px-4 py-2 rounded-full shadow-solid-primary w-fit mb-3">
              <h3 className="text-sm font-medium lg:text-md xl:text-lg text-[#242051] font-subtitle text-center">
                COUNSELLING AND PSYCHOTHERAPY
              </h3>
            </div>
            <h1 className="font-title text-white text-4xl lg:text-6xl xl:text-8xl mb-2">
              Freshta Jamasi
            </h1>
            <p className="font-subtitle text-white font-light lg:text-lg xl:text-xl mb-4 md:w-3/4 xl:w-1/2">
              In-person and virtual counselling and psychotherapy services for
              teens/adolescents and adults in Ontario. I use an eclectic
              approach of Acceptance and Commitment Therapy (ACT), Dialectical
              Behavioural Therapy (DBT), and Psychodynamic theories
            </p>
            <a
              href="https://freshtajamasi.janeapp.com/"
              className="font-subtitle whitespace-nowrap inline-flex justify-center px-8 md:px-14 lg:px-20 xl:px-24 py-3 md:py-4 border border-transparent rounded-md shadow-sm text-lg md:text-xl lg:text-2xl xl:text-4xl hover:border-white text-white bg-[#221E5A] hover:bg-white hover:text-[#221E5A] duration-200 shadow-solid-primary "
            >
              Book now
            </a>
          </div>
        </section>
        <section
          id="services"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24  py-5 "
        >
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl mb-5">
            therapy <span className="font-title">services</span> I offer
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-3">
            <ServiceCard
              image={FreeConsult}
              online={true}
              title={"Free 15-minute virtual consultation"}
              subtitle={
                "Connect with us for a free 15-minute virtual consultation to discuss your needs and explore how we can support you on your journey towell-being."
              }
              link={"#"}
            />
            <ServiceCard
              image={IndividualTherapy}
              inperson={true}
              online={true}
              title={"Individual Therapy (50 minutes)"}
              subtitle={
                "Individual therapy is a collaborative process between a therapist and client aimed at exploring thoughts, behaviours, emotions, and experiences. It offers a safe and non-judgemental space to address various concerns and gain insight."
              }
              link={"#"}
            />
            <ServiceCard
              image={StudentTherapy}
              online={true}
              title={"Student Therapy (50 minutes)"}
              subtitle={
                "Student Therapy offers specialized individual counseling tailored to high school and post-secondary students, providing a confidential space to address academic pressure, identity exploration, and mental health concerns like anxiety and depression, as well as navigate the challenges of adolescence and young adulthood with confidence."
              }
              link={"#"}
            />
            <ServiceCard
              image={RateReduced}
              online={true}
              inperson={true}
              title={"Reduced-Rate Therapy (50 minutes)"}
              subtitle={
                "Rate reductions between $50-$120 are offered based on income and availability. Offered both online and in-person."
              }
              link={"#"}
            />
          </ul>
        </section>
        <section
          id="services"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24  py-5 flex flex-col lg:flex-row gap-4 lg:gap-10 lg:justify-between"
        >
          <div className="lg:w-1/2 my-auto">
            <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl mb-5 ">
              Is therapy <span className="font-title">right for you?</span>
            </h2>
            <p className="font-subtitle text-[#242051] text-lg xl:text-xl 2xl:text-2xl mb-4">
              Curious if therapy is the right fit for you, especially with a
              culturally-sensitive lens? Seeking support from a mental health
              therapist can be a crucial step in navigating life's challenges
              with understanding and guidance. Whether you're wrestling with
              stress, anxiety, depression, or facing unique cultural or racial
              experiences, therapy offers a safe, inclusive space to explore
              your thoughts and emotions. It's a place to develop
              culturally-responsive coping skills, address intergenerational
              trauma, and build resilience rooted in your identity.
            </p>
            <a
              href="https://freshtajamasi.janeapp.com/"
              className="font-subtitle whitespace-nowrap inline-flex justify-center px-8 md:px-14 lg:px-20 xl:px-24 py-3 md:py-4 border border-transparent rounded-md shadow-sm text-lg md:text-xl lg:text-2xl xl:text-4xl hover:border-white text-white bg-[#221E5A] hover:bg-white hover:text-[#221E5A] duration-200 shadow-solid-primary "
            >
              Book now
            </a>
          </div>
          <div className="lg:w-1/2">
            <Image
              className=" border-[#242051] border-2 rounded-lg object-cover lg:ml-auto  "
              src={ISRFY}
            />
          </div>
        </section>
        <section
          id="quote"
          className=" bg-[#242051] px-4 pb-6 lg:px-8 lg:pb-10 xl:px-12 2xl:px-24 sm:p-6 flex my-4"
        >
          <div className="mx-auto ">
            <h1 className="font-title text-white text-xl lg:text-2xl xl:text-4xl text-center my-4">
              "I am not what happened to me. I am what I choose to become"{" "}
            </h1>
            <p className="font-subtitle text-white text-xl lg:text-2xl xl:text-3xl text-center ">
              {" "}
              Carl Jung
            </p>
          </div>
        </section>
        <section
          id="faq"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24 py-5 max-w-4xl mx-auto"
        >
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl text-center mb-5">
            frequently asked <br></br>
            <span className="font-title">questions</span>
          </h2>
          <Faq />
        </section>
        <section id="contact" className=" px-4 lg:px-8  xl:px-12 py-5  mx-auto">
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl text-center mb-5">
            still have <br></br>
            <span className="font-title">questions</span>?
          </h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
