import ContactForm from "@/components/ContactForm";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
export default function contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in contact for any inquiries or questions you may have."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="contact, inquiries, questions" />
        <meta name="author" content="Your Name" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Contact" />
        <meta
          property="og:description"
          content="Get in contact for any inquiries or questions you may have."
        />
        <meta
          property="og:image"
          content="https://www.freshtajamasi.ca/HomeHeroImage.png"
        />
        <meta property="og:url" content="https://example.com/contact" />
        <meta name="twitter:title" content="Contact" />
        <meta
          name="twitter:description"
          content="Get in contact for any inquiries or questions you may have."
        />
        <meta
          name="twitter:image"
          content="https://www.freshtajamasi.ca/HomeHeroImage.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://example.com/contact" />
      </Head>
      <Navbar />
      <main className="bg-[#EAD7D3] ">
        <section id="contact" className=" px-4 lg:px-8  xl:px-12 py-5  mx-auto">
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl text-center my-5 lg:my-8">
            get in <span className="font-title">touch</span>
          </h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </>
  );
}
