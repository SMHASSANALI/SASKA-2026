import { useEffect } from "react";

const SITE_URL = "https://www.saskasolutions.com";

const setMeta = (name, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setCanonical = (href) => {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

/**
 * Sets the document title, meta description, robots directive and canonical
 * link for the current route. This is a client-only SPA (no SSR/prerendering),
 * so a small effect-based helper does the same job react-helmet-async would —
 * without an extra dependency or a React 19 peer-dependency mismatch.
 */
const Seo = ({ title, description, path = "/", noindex = false }) => {
  useEffect(() => {
    if (title) document.title = title;
    setMeta("description", description);
    setMeta("robots", noindex ? "noindex, nofollow" : "index, follow");
    setCanonical(`${SITE_URL}${path === "/" ? "" : path}`);
  }, [title, description, path, noindex]);

  return null;
};

export default Seo;
