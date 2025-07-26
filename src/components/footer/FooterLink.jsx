import React from "react";

const FooterLink = ({ label, onClick }) => {
  return (
    <li>
      <button onClick={onClick} className="hover:underline">
        {label}
      </button>
    </li>
  );
};

export default FooterLink;
