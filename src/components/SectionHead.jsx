import React from "react";

const SectionHead = ({ icon, title, className }) => {
  return (
    <div className="section__head">
      <span className="section__icon">{icon}</span>
      <h2 className="section__title">{title}</h2>
    </div>
  );
};

export default SectionHead;
