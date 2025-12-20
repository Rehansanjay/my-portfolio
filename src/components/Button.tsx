import React from "react";

function Button({ text, link }: { text: string; link: string }) {
  // We use a standard HTML <a> tag because <Link> breaks for emails and PDFs
  return (
    <a 
      className="btn" 
      href={link}
      // If it's a PDF or External site, open in new tab. If it's email, stay here.
      target={link.startsWith("http") || link.endsWith(".pdf") ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default Button;