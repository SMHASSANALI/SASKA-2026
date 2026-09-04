import React, { useRef, useState } from "react";

import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

import ArrowButton from "./ArrowButton";

import contactBg from "../assets/images/contact-bg.png";

import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    const { name, email, company, phone, message } = formData;

    if (!name || !email || !company || !phone || !message) {
      toast.error("Please fill all fields");
      return;
    }

    emailjs
      .sendForm(
        'service_htvfes9',
        'template_lihw05o',
        form.current,
        '8GvgYzGjkwINOneAo'
      )
      .then(
        (result) => {
          console.log(result.status);
          if (result.status === 200) {
            toast.success("Form submitted successfully!");
          }
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: ''
          })
        },
        (error) => {
          console.error(error);
          toast.error('Failed to submit the form. Please try again.');
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="w-full relative rounded-3xl border border-white/10 bg-surface overflow-hidden">
      {/* Header band — a strip with the background photo, not the whole panel */}
      <div className="relative h-[180px] md:h-[220px] flex items-end p-6 md:p-10">
        <img
          src={contactBg}
          alt="Contact Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/70 to-surface/10" />
        <div className="relative z-10 text-white flex flex-col md:flex-row md:items-end md:justify-between w-full gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-2">
              Contact Us
            </p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight max-w-lg">
              Connect With Your Next Great Hire Today!
            </h2>
          </div>
          <ArrowButton onClick={() => { navigate("/contact") }} text={"Get Consultation"} />
        </div>
      </div>

      {/* Form panel — a two-column grid instead of stacked full-width inputs */}
      <div className="p-6 md:p-10 text-white">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="text-sm text-muted px-1">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border border-white/15 rounded-xl w-full p-3 bg-black/20 mt-1 focus:border-primary/60 outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-muted px-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border border-white/15 rounded-xl w-full p-3 bg-black/20 mt-1 focus:border-primary/60 outline-none"
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm text-muted px-1">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="border border-white/15 rounded-xl w-full p-3 bg-black/20 mt-1 focus:border-primary/60 outline-none"
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm text-muted px-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border border-white/15 rounded-xl w-full p-3 bg-black/20 mt-1 focus:border-primary/60 outline-none"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-sm text-muted px-1">
              Project Details *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="border border-white/15 rounded-xl w-full p-3 bg-black/20 mt-1 min-h-[140px] focus:border-primary/60 outline-none"
            />
          </div>
          <div className="flex justify-end pt-2">
            <button
              disabled={loading}
              className="flex items-center gap-3 rounded-xl bg-primary text-primary-ink font-semibold px-6 py-3 disabled:opacity-60"
            >
              Submit
              <FaArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
