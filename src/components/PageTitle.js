import React from "react";

const PageTitle = ({ text, className }) => {
  return <div className={`page__title ${className}`}>{text}</div>;
};

export default PageTitle;
