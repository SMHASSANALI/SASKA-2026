import React from "react";
import Seo from "../../components/Seo";
import contactBanner from "../../assets/svg/contactBanner.svg";
import ContactForm from "../../components/ContactForm";
import { TbMail, TbBrandWhatsapp, TbMapPin } from "react-icons/tb";

const Contact = () => {
  const info = [
    {
      icon: TbMail,
      label: "Email",
      value: "info@saskasolutions.com",
      href: "mailto:info@saskasolutions.com",
    },
    {
      icon: TbBrandWhatsapp,
      label: "Social",
      value: "@saskasolutions",
      href: "https://www.instagram.com/saskasolutions/",
    },
    {
      icon: TbMapPin,
      label: "Based in",
      value: "Karachi, Pakistan",
      href: null,
    },
  ];

  return (
    <main>
      <Seo
        title="Contact SASKA Solutions — Get a Free Consultation"
        description="Get in touch with SASKA Solutions for a free consultation on your next web, software or managed IT project."
        path="/contact"
      />
      <div className="bg-gradient-to-b from-dark to-zinc-950 w-full px-[20px] pt-[60px] pb-[80px]">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 text-white">
          <div className="w-full lg:w-5/12 flex flex-col gap-[25px]">
            <h1 className="font-bold text-4xl md:text-5xl">
              Let's Build Something Amazing Together!
            </h1>
            <p className="text-muted">
              We'd love to hear from you! Whether you have a project idea, need
              expert advice, or just want to say hello, our team is ready to
              help. Let's collaborate and create something impactful.
            </p>
          </div>
          <div className="w-full lg:w-6/12">
            <img src={contactBanner} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* Direct contact strip — real info instead of a bare hero/form jump */}
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-3 gap-4 mt-[40px]">
          {info.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="size-[40px] rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary shrink-0">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </>
            );
            return item.href ? (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-4 rounded-2xl border border-white/10 p-4 hover:border-primary/40 transition-colors"
              >
                {content}
              </a>
            ) : (
              <div
                key={index}
                className="flex flex-row items-center gap-4 rounded-2xl border border-white/10 p-4"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-[20px] md:px-[40px] py-[60px]">
        <ContactForm />
      </div>
    </main>
  );
};

export default Contact;
