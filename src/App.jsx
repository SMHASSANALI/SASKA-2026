import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lenis from '@studio-freight/lenis';
import Layout from "./layout/layout";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import NotFound from "./pages/NotFound";
import { ToastContainer } from "react-toastify";

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 2)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
      <ToastContainer
        position="top-left"
      />
    </Router>
  );
}

export default AppWrapper;