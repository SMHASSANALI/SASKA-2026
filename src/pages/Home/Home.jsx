import React from "react";
import Seo from "../../components/Seo";
import HomeBanner from "./HomeComponents/HomeBanner";
import About from "./HomeComponents/About";
import Services from "./HomeComponents/Services";
import ManagedITTeaser from "./HomeComponents/ManagedITTeaser";
import Projects from "./HomeComponents/Projects";
import Team from "./HomeComponents/Team";
import Testimonials from "./HomeComponents/Testimonials";
import Contact from "./HomeComponents/Contact";

const Home = () => {
  return (
    <main>
      <Seo
        title="SASKA Solutions - Managed IT & Custom Software Solutions"
        description="Elevate your business with Saska Solutions. We build scalable software and offer proactive IT support to help you achieve your goals and stay competitive."
        path="/"
      />
      <HomeBanner />
      <About />
      <Services />
      <ManagedITTeaser />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
