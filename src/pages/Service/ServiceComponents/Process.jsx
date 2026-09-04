import React from "react";
import serviceBg from "../../../assets/images/servicesBg.png";
import process from "../../../assets/svg/process.svg";

const Process = () => {
  return (
    <main className="relative h-full w-full text-white pb-[20px] px-[20px]">
      <div className="absolute inset-0 h-full w-full -z-10">
        <img
          src={serviceBg}
          alt=""
          className="w-full h-full object-cover md:block hidden"
        />
      </div>
      <div className="max-w-[1600px] mx-auto z-50 h-full">
        <div className="h-full items-center flex flex-col justify-center gap-[10px] md:gap-[60px]">
          <div className="flex flex-col md:flex-row ">
            <div className="w-full md:w-6/12 flex flex-col gap-[13px]">
              <p className="font-semibold text-lg md:text-2xl pt-[20px]">
                How We Work
              </p>
              <h2 className="font-black text-[60px] md:text-[82px] leading-[100%]">
                Our Process <br />{" "}
                <span className=" text-[40px] md:text-[64px]">Work Flow</span>{" "}
              </h2>
              <p className="md:text-lg font-semibold">
                At SASKA Solutions, we follow a structured and efficient process
                to deliver high-quality digital solutions. Our workflow ensures
                clarity, transparency, and collaboration at every stage. Here’s
                a detailed breakdown of how we work:
              </p>
            </div>
            <div className="w-full md:w-6/12">
              <img src={process} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full gap-[30px]">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  1{" "}
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">Consultation</h1>
                <h2 className="text-lg">
                  Every successful project starts with a clear understanding of
                  client requirements. <br /> During this phase:
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    We listen to your business goals, challenges, and vision.
                  </li>
                  <li>We discuss your target audience and competitors.</li>
                  <li>
                    We identify the best approach, technologies, and strategies
                    for your project.
                  </li>
                  <li>We define project scope, timelines, and deliverables.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  2{" "}
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">Planning & Research</h1>
                <h2 className="text-lg">
                  After understanding your needs, we move to the planning stage,
                  where we:
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    Conduct thorough market research to analyze trends and user
                    expectations.
                  </li>
                  <li>
                    Create a structured project roadmap to ensure smooth
                    execution.
                  </li>
                  <li>
                    Develop wireframes, user flows, and prototypes for design
                    clarity.
                  </li>
                  <li>
                    Choose the best tools and technologies for development.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  3{" "}
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">Design & Development</h1>
                <h2 className="text-lg">
                  Once the planning is finalized, our expert team starts
                  designing and developing the solution.
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    Our UI/UX designers create visually appealing and
                    user-friendly interfaces.
                  </li>
                  <li>
                    The development team writes clean, optimized, and scalable
                    code.
                  </li>
                  <li>
                    We focus on mobile responsiveness, fast loading times, and
                    intuitive navigation.
                  </li>
                  <li>
                    Security and performance are prioritized during development.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  4{" "}
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">
                  Testing & Optimization
                </h1>
                <h2 className="text-lg">
                  Before launching, we conduct rigorous testing to ensure
                  flawless functionality. <br /> This includes:
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    Functional Testing – Ensuring every feature works as
                    expected.
                  </li>
                  <li>
                    Performance Testing – Checking speed, responsiveness, and
                    optimization.
                  </li>
                  <li>
                    Security Testing – Identifying vulnerabilities and
                    strengthening security.
                  </li>
                  <li>
                    User Testing – Gathering feedback to enhance user
                    experience.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  {" "}
                  5{" "}
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">Deployment & Support</h1>
                <h2 className="text-lg">
                  Once the project passes all tests, we proceed with the final
                  deployment. Our commitment doesn’t end here!
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    We deploy the project on the desired platform (web, mobile,
                    or cloud).
                  </li>
                  <li>We provide training and documentation for your team.</li>
                  <li>
                    We offer post-launch support to fix any issues and ensure
                    smooth operation.
                  </li>
                  <li>
                    We continuously monitor and optimize the solution for future
                    improvements.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* IT Services Section */}
        <div className="w-full mt-[60px]">
          <h2 className="text-[32px] md:text-[48px] font-black text-center mb-8">
            Our IT Services in Action
          </h2>
          <p className="text-primary font-semibold text-center mb-8">
            How our Managed IT Services enhance every step of the process
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full gap-[30px]">
            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  6
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">
                  Systems Administration
                </h1>
                <h2 className="text-lg">
                  We provide comprehensive management of your IT systems to
                  ensure smooth and secure operations.
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    Day-to-day administration and user management for seamless
                    operations.
                  </li>
                  <li>
                    Support for critical applications in both on-premises and
                    cloud environments.
                  </li>
                  <li>Ensuring flexibility, stability, and compliance.</li>
                  <li>
                    Proactive monitoring to prevent issues before they arise.
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  7
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">
                  Cloud Managed Services
                </h1>
                <h2 className="text-lg">
                  The cloud is essential for modern business agility and
                  scalability.
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    Secure migration to cloud platforms like Microsoft Azure.
                  </li>
                  <li>
                    Efficient infrastructure management for VMs, storage, and
                    networking.
                  </li>
                  <li>
                    Continuous optimization for cost control and performance.
                  </li>
                  <li>Enterprise-grade scalability and security solutions.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  8
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">
                  Cybersecurity Services
                </h1>
                <h2 className="text-lg">
                  Security is at the core of everything we do, protecting your
                  business from evolving threats.
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    Layered defenses against malware, phishing, and data
                    breaches.
                  </li>
                  <li>Compliance with industry regulations and standards.</li>
                  <li>Proactive security audits and penetration testing.</li>
                  <li>Employee training to enhance security awareness.</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-row gap-2">
              <div className="flex flex-col items-center">
                <span className="size-[54px] border-4 border-primary rounded-full flex items-center justify-center text-[32px] font-black text-primary">
                  9
                </span>
              </div>
              <div>
                <h1 className="text-[32px] font-bold">
                  Desktop Support Excellence
                </h1>
                <h2 className="text-lg">
                  Responsive desktop support keeps your teams productive with
                  minimal downtime.
                </h2>
                <ul className="ml-6 list-disc">
                  <li>
                    Rapid problem resolution for hardware and software issues.
                  </li>
                  <li>
                    User education to improve efficiency and reduce errors.
                  </li>
                  <li>Proactive maintenance to prevent workstation issues.</li>
                  <li>
                    Support for diverse operating systems and applications.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Process;
