import React from "react";
import Link from "next/link";

function Footer() {
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__info">
          <p className="footer__built">
            Designed &amp; Built by{" "}
            <Link href="https://github.com/Rehansanjay" target="_blank" className="footer__link">
              Rehan Sanjay
            </Link>
          </p>
        </div>

        <button
          className="footer__back-to-top"
          onClick={handleScrollToTop}
          aria-label="Back to top"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M8 12V4M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
