import React, { useRef, useCallback } from "react";

function Button({ text, link }: { text: string; link: string }) {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const ripple = document.createElement("span");
    ripple.className = "btn__ripple";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  }, []);

  return (
    <a
      ref={btnRef}
      className="btn"
      href={link}
      target={link.startsWith("http") || link.endsWith(".pdf") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {text}
    </a>
  );
}

export default Button;