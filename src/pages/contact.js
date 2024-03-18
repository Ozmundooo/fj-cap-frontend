import ContactForm from "@/components/ContactForm";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function contact() {
  return (
    <>
      <Navbar />
      <main className="bg-[#EBD9D5] ">
        <section id="contact" className=" px-4 lg:px-8  xl:px-12 py-5  mx-auto">
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl text-center mb-5">
            get in <span className="font-title">touch</span>
          </h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
