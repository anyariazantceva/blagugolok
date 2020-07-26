import React from "react";
import bg from "../../assets/img/blackbg.jpg";
import PageTitle from "../PageTitle";
const sectionStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${bg}) no-repeat center/cover`,
};

const Services = () => {
  return (
    <div style={sectionStyle} className="services">
      <PageTitle text="Услуги" />
    </div>
  );
};
export default Services;
