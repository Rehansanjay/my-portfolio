import Button from "@/components/Button";
import Logo from "@/components/Logo";
import Link from "next/link";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  const sectionLinks = [
    { name: "About", link: "/#about" },
    { name: "Experience", link: "/#experience" },
    { name: "Work", link: "/#work" },
    { name: "Contact", link: "/#contact" },
  ];

  // Scroll handler — sticky nav + progress bar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section detection via Intersection Observer
  useEffect(() => {
    const sectionIds = ["about", "experience", "work", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = link.replace("/#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.1 + i * 0.08,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    open: {
      x: "0%",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.08, duration: 0.3 },
    }),
  };

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "navbar--scrolled" : ""}`} role="navigation" aria-label="Main navigation">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} aria-hidden="true" />

      <div className="navbar__inner">
        {/* Logo */}
        <motion.div
          className="navbar__brand"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="navbar__desktop">
          <ul className="navbar__list" role="menubar">
            {sectionLinks.map(({ name, link }, index) => (
              <motion.li
                key={name}
                className="navbar__item"
                custom={index}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                role="none"
              >
                <a
                  href={link}
                  className={`navbar__link ${activeSection === link.replace("/#", "") ? "navbar__link--active" : ""}`}
                  onClick={(e) => handleNavClick(e, link)}
                  role="menuitem"
                >
                  <span className="navbar__link-number">0{index + 1}.</span>
                  {name}
                </a>
              </motion.li>
            ))}
          </ul>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <Button text="Resume" link="/resume.pdf" />
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <motion.button
          className="navbar__toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <div className={`navbar__hamburger ${mobileMenuOpen ? "navbar__hamburger--open" : ""}`}>
            <span />
            <span />
            <span />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="navbar__mobile"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <ul className="navbar__mobile-list">
                {sectionLinks.map(({ name, link }, index) => (
                  <motion.li
                    key={name}
                    custom={index}
                    variants={mobileItemVariants}
                    initial="closed"
                    animate="open"
                  >
                    <a
                      href={link}
                      className="navbar__mobile-link"
                      onClick={(e) => handleNavClick(e, link)}
                    >
                      <span className="navbar__link-number">0{index + 1}.</span>
                      {name}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button text="Resume" link="/resume.pdf" />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;