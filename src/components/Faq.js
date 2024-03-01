import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
export default function Faq() {
  return (
    <Accordion
      className="bg-white p-5 pb-7 border-2 border-[#242051] rounded-lg"
      variant="light"
    >
      <AccordionItem
        key="1"
        aria-label="What can I expect at my first session?"
        title="What can I expect at my first session?"
        className="font-subtitle border-b-2 border-[#242051]"
      >
        <p className="">
          The first session is usually focused on completing a comprehensive
          clinical assessment to determine your primary concerns, and needs, and
          discussing your treatment goals. Upon completing your assessment, I
          will propose a treatment plan tailored to your specific unique needs.
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Is everything I say confidential?"
        title="Is everything I say confidential?"
        className="font-subtitle border-b-2 border-[#242051]"
      >
        <p className="">
          Your privacy and confidentiality are crucial. The information that you
          share will not be disclosed without your consent. There are some
          exceptions to this (required by Ontario law):
        </p>
        <br></br>
        <ul className="list-disc list-inside">
          <li>
            You disclose information that indicates you or someone else is in
            imminent danger
          </li>
          <li>
            You disclose information about abuse or neglect of a child under the
            age of 16
          </li>
          <li>
            You disclose information about abuse by a health care professional
          </li>
          <li>
            You disclose information about the abuse or neglect of a senior
          </li>
          <li>The court subpoenas your records</li>
          <li>
            The College of Registered Psychotherapists of Ontario requests your
            records as part of an audit
          </li>
        </ul>
        <br></br>
        <p>
          Before you begin therapy you will discuss these circumstances in
          detail and have an opportunity to ask questions.
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="What forms of payment do you accept?"
        title="What forms of payment do you accept?"
        className="font-subtitle border-b-2 border-[#242051]"
      >
        <p className="">
          All major credit cards are accepted as forms of payment. For your
          convenience, payment can be made directly online.
        </p>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="What is your cancellation policy?"
        title="What is your cancellation policy?"
        className="font-subtitle border-b-2 border-[#242051]"
      >
        <p className="">
          If you are unable to attend an appointment, we require at least 24
          hours notice to cancel without penalty. Full session fees will be
          applied to no-show or late cancelled appointments.
        </p>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="What is your cancellation policy?"
        title="What is your cancellation policy?"
        className="font-subtitle border-b-2 border-[#242051]"
      >
        <p className="">
          Psychotherapy is not covered by OHIP. Many extended health insurance
          or employee benefit plans, partially or fully, cover psychotherapy
          services. Freshta Jamasi Counselling & Psychotherapy does not bill
          directly to insurance. You will be provided with a receipt for the
          service.
          <br></br>
          You may find it helpful to ask your insurance provider the following
          questions:
        </p>
        <br></br>
        <ul className="list-disc list-inside">
          <li>
            Does my health insurance plan include psychotherapy or services
            offered by a registered psychotherapist?
          </li>
          <li>Do I have a deductible? What is it and have I met it?</li>
          <li>
            Does my plan limit the number of sessions per calendar year? What is
            the limit?
          </li>
          <li>
            Do I need a referral from my primary care physician to cover my
            services?
          </li>
        </ul>
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Will my sessions be covered by insurance?"
        title="Will my sessions be covered by insurance?"
        className="font-subtitle border-b-2 border-[#242051]"
      >
        <p className="">
          Many healthcare insurance providers will cover the services we
          provide. I am a licensed practitioner by the CRPO as a Registered
          Psychotherapist (Qualifying). If your benefits cover Registered
          Psychotherapy, you may be eligible for full reimbursement. We always
          suggest you inquire with your provider to see what your unique plan
          entails before booking with one of our therapists.
        </p>
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="I'm in crisis and I need to see someone ASAP!"
        title="I'm in crisis and I need to see someone ASAP!"
        className="font-subtitle border-b-2 border-[#242051]"
      >
        <p className="">
          If you require urgent care, or if your or someone’s safety is at risk,
          please seek emergency services at your local emergency room or call
          911.
        </p>
      </AccordionItem>
    </Accordion>
  );
}
