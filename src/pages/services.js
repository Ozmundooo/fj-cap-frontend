import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Faq from "@/components/Faq";

export default function services() {
  return (
    <>
      <Navbar />
      <main className="bg-[#EBD9D5] ">
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
      </main>
      <Footer />
    </>
  );
}
