import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import RevealFooter from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  const lenisRef = useRef(null);
  const rafId = useRef(null);

  // Initialize Lenis once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 2)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Attach Lenis instance to window for global access
    window.lenis = lenis;
    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    rafId.current = requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId.current);
      window.lenis = null; // Clean up global reference
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.lenis?.scrollTo(0, { immediate: true }) || window.scrollTo(0, 0);
  }, [location.pathname]);

  // GA4's own gtag("config", ...) call in index.html only fires once, on
  // initial load — this is a client-routed SPA, so every navigation after
  // that is invisible to Analytics unless we send a page_view ourselves.
  // Skip the very first render so we don't double-count the load gtag
  // already recorded.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (typeof window.gtag !== "function") return;
    window.gtag("event", "page_view", {
      page_path: location.pathname + location.search,
      page_title: document.title,
      page_location: window.location.href,
    });
  }, [location.pathname, location.search]);

  return (
    <div className="bg-zinc-950">
      <div className="sticky top-0 z-[999]">
        <Navbar />
      </div>
      <Outlet />
      <RevealFooter />
    </div>
  );
};

export default Layout;
