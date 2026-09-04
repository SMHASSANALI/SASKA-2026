import React from "react";
import Seo from "../../components/Seo";
import contactBanner from "../../assets/svg/contactBanner.svg";
import ContactForm from "../../components/ContactForm";

const Contact = () => {
  return (
    <main>
      <Seo
        title="Contact SASKA Solutions — Get a Free Consultation"
        description="Get in touch with SASKA Solutions for a free consultation on your next web, software or managed IT project."
        path="/contact"
      />
      <div className="bg-gradient-to-b from-dark to-zinc-950 w-full h-[90vh] px-[20px]">
        <div className="h-full min-h-[80vh] max-w-[1600px] mx-auto flex flex-row items-center justify-between text-white">
          <div className="w-full md:w-5/12 flex flex-col gap-[25px]">
            <h1 className="font-bold text-5xl">
              Let’s Build Something Amazing Together!
            </h1>
            <p>
              We’d love to hear from you! Whether you have a project idea, need
              expert advice, or just want to say hello, our team is ready to
              help. Let’s collaborate and create something impactful.
            </p>
          </div>
          <div className="w-0 md:w-7/12">
            <img src={contactBanner} alt="" />
          </div>
        </div>
      </div>
      <div className="max-w-[1600px] mx-auto relative">
        <div className="md:mt-[-25vh] w-full px-[20px] md:px-[40px]">
          <ContactForm />
        </div>
      </div>
    </main>
  );
};

export default Contact;
