import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutImage from "../assets/AboutImage.png";
import Image from "next/image";

export default function about() {
  return (
    <>
      <Navbar />
      <main className="bg-[#EBD9D5] ">
        <section
          id="about"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24  py-5 flex flex-col lg:flex-row gap-4 lg:justify-between"
        >
          <div className="lg:w-1/2">
            <div className="bg-[#F0ABAB] px-4 py-2 rounded-full shadow-solid-primary w-fit mb-4">
              <h3 className="text-sm font-medium lg:text-md xl:text-lg text-[#242051] font-subtitle text-center">
                COUNSELLING AND PSYCHOTHERAPY
              </h3>
            </div>
            <h1 className="font-title text-[#242051] text-4xl lg:text-6xl xl:text-8xl my-2">
              Freshta Jamasi
            </h1>
            <p className="text-[#242051] font-subtitle">
              Registered Psychotherapist (Qualifying), MA, HBSc,{" "}
              <strong>CRPO #13346</strong>
            </p>
            <p className="font-subtitle text-[#242051] py-2">
              One of the many things I can appreciate about our society is how
              people come from different walks of life - we all have a story.
              These stories, or worldviews, are what shape our personalities and
              how we perceive and overcome the various obstacles that life may
              throw at us. I also understand how beginning therapy can be
              daunting, so I provide a validating and non-judgemental
              environment with the goal of making clients as comfortable as
              possible. Helping clients explore their emotions and navigate any
              problems they may have, together, has always been a passion of
              mine.
            </p>
            <p className="font-subtitle text-[#242051] py-2">
              I provide support to individuals from diverse identities, and help
              raise their awareness of the importance of mental health. I
              present with cultural humility and I’m responsive to the
              subjective challenges you may be experiencing. We will work
              together through any adversity and facilitate self-compassion and
              growth during this experience.
            </p>
            <p className="font-subtitle text-[#242051] py-2">
              I have provided therapy to individuals with many intersecting
              identities, including those from radicalized and marginalized
              communities. As a WOC and a child of immigrants, I foster a safe
              and welcoming space where you can comfortably bring up your unique
              challenges.
            </p>
            <p className="font-subtitle text-[#242051] py-2">
              My personal approach to counselling is eclectic, and embedded in
              being collaborative, person-centred and anti-oppressive. I
              implement techniques borrowed from Cognitive Behavioural Therapy,
              Narrative Therapy, Acceptance and Commitment Therapy, and
              Mindfulness-based Interventions. I make every effort to create a
              non-judgemental and safe environment for my clients, where they
              are heard and validated.
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image
              className=" shadow-solid-primary rounded-lg object-cover lg:ml-auto"
              src={AboutImage}
            />
          </div>
        </section>
        <section
          id="modalities"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24  pb-5 "
        >
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl mb-5">
            modalities and interventions<br></br>
            <span className="font-title">I draw from services</span>
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 my-3">
            <li className="bg-[#778AC1] px-4 py-4 text-white font-subtitle rounded-lg shadow-solid-primary">
              Cognitive Behavioral Therapy (CBT)
            </li>
            <li className="bg-[#778AC1] px-4 py-4 text-white font-subtitle rounded-lg shadow-solid-primary">
              Solution-Focused Brief Therapy
            </li>
            <li className="bg-[#778AC1] px-4 py-4 text-white font-subtitle rounded-lg shadow-solid-primary">
              Strength-Based
            </li>
            <li className="bg-[#778AC1] px-4 py-4 text-white font-subtitle rounded-lg shadow-solid-primary">
              Mindfulness
            </li>
            <li className="bg-[#778AC1] px-4 py-4 text-white font-subtitle rounded-lg shadow-solid-primary">
              Acceptance and Commitment Therapy (ACT)
            </li>
            <li className="bg-[#778AC1] px-4 py-4 text-white font-subtitle rounded-lg shadow-solid-primary">
              Psychodynamic
            </li>
          </ul>
        </section>
        <section
          id="mission"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24  pb-5 "
        >
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl mb-5">
            my <span className="font-title">mission</span>
          </h2>
          <p className="font-subtitle text-[#242051] py-2">
            At Freshta Jamasi Counselling & Psychotherapy, we are committed to
            being a beacon of support for individuals aged 16 and above, with a
            specific focus on serving the BIPOC community in Ontario. Our
            virtual therapy practice is a sanctuary where anxiety, depression,
            trauma, self-esteem challenges, relationship issues, and
            cross-cultural concerns are met with understanding and guidance. We
            dedicate ourselves to fostering tangible change, providing a space
            where clients gain practical tools to navigate life's complexities.
            Through tailored therapeutic interventions, we empower individuals
            to build resilience, enhance self-awareness, and embark on a
            transformative journey towards lasting well-being. Our mission is
            not just to address immediate concerns but to equip our clients with
            skills that extend far beyond our virtual sessions, leading to
            enduring positive change in their lives.
          </p>
        </section>
        <section
          id="modalities"
          className=" px-4 lg:px-8  xl:px-12 2xl:px-24  pb-5 "
        >
          <h2 className="font-subtitle text-[#242051] text-3xl lg:text-4xl xl:text-6xl mb-5">
            trainings/certifications
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 my-3">
            <li className="bg-[#778AC1] px-4 py-4 text-white font-subtitle rounded-lg shadow-solid-primary">
              Becoming an Effective DBT Therapist: Applying Foundational
              Principles to Facilitate Change (Toronto Psychology and Wellness
              Group)
            </li>
            <li className="bg-[#778AC1] px-4 py-4 text-white font-subtitle rounded-lg shadow-solid-primary">
              EMDRIA Approved EMDR Basic Training (Envision Academy) (
              <span className="italic">currently in progress</span>)
            </li>
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}
