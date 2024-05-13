import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import Faq from "@/components/Faq";
import Image from "next/image";
import FreeConsult from "../assets/FreeConsult.jpeg";
import IndividualTherapy from "../assets/IndividualTherapy.jpeg";
import StudentTherapy from "../assets/StudentTherapy.jpeg";
import RateReduced from "../assets/RateReduced.jpeg";
import Head from "next/head";
export default function services() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta
          name="description"
          content="Discover the therapy services offered by Freshta Jasami, an empowering therapist for diverse identities. Explore individual therapy, student therapy, and reduced-rate therapy to support your mental wellness journey."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="keywords"
          content="counselling, psychotherapy, therapy, mental health"
        />
        <meta name="author" content="Freshta Jamasi" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Services" />
        <meta
          property="og:description"
          content="Discover the therapy services offered by Freshta Jasami, an empowering therapist for diverse identities. Explore individual therapy, student therapy, and reduced-rate therapy to support your mental wellness journey."
        />
        <meta property="og:image" content="/assets/Logos/MainLogo.png" />
        <meta property="og:url" content="https://freshtajamasi.ca/services" />
        <meta name="twitter:title" content="Services" />
        <meta
          name="twitter:description"
          content="Discover the therapy services offered by Freshta Jasami, an empowering therapist for diverse identities. Explore individual therapy, student therapy, and reduced-rate therapy to support your mental wellness journey."
        />
        <meta name="twitter:image" content="/assets/Logos/MainLogo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://freshtajamasi.ca/services" />
      </Head>
      <Navbar />
      <main className="bg-[#EAD7D3] ">
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
          id="faq"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24 py-5 max-w-4xl mx-auto"
        >
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl text-center mb-5">
            frequently asked <br></br>
            <span className="font-title">questions</span>
          </h2>
          <Faq />
        </section>
      </main>
      <Footer />
    </>
  );
}
