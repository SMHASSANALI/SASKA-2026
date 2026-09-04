import React from "react";
import { Link, useLocation } from "react-router-dom";
import Seo from "../components/Seo";

const NotFound = () => {
  const location = useLocation();

  return (
    <main className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 py-24 bg-dark text-ink">
      <Seo
        title="Page Not Found | SASKA Solutions"
        description="The page you're looking for doesn't exist."
        path={location.pathname}
        noindex
      />
      <p className="font-mono text-sm text-primary tracking-wider uppercase mb-4">
        404
      </p>
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
        We couldn't find that page
      </h1>
      <p className="text-muted max-w-md mb-8">
        The link you followed may be broken, or the page may have moved.
        Let's get you back on track.
      </p>
      <Link
        to="/"
        className="border border-primary/60 text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-black transition-colors"
      >
        Back to Home
      </Link>
    </main>
  );
};

export default NotFound;
