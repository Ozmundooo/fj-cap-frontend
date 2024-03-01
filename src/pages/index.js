import React from "react";
import Navbar from "../components/Navbar";

import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";

import ContactForm from "@/components/ContactForm";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#EBD9D5] ">
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
              href="#"
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
            Therapy <span className="font-title">services</span> I offer
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-3">
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </ul>
        </section>
        <section
          id="faq"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24 py-5 max-w-4xl mx-auto"
        >
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl text-center mb-5">
            Frequently asked <br></br>
            <span className="font-title">questions</span>
          </h2>
          <Faq />
        </section>
        <section id="contact" className=" px-4 lg:px-8  xl:px-12 py-5  mx-auto">
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl text-center mb-5">
            Still have <br></br>
            <span className="font-title">questions</span>?
          </h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
