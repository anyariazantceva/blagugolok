import React from "react";
import bg from "../../assets/img/blackbg.jpg";
import PageTitle from "../PageTitle";
import "../../assets/styles/services.css";
const sectionStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${bg}) no-repeat center/cover`,
};

const Services = () => {
  return (
    <div style={sectionStyle} className="services">
      <PageTitle className="white-text" text="Услуги" />
      <div className="services__details white-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        adipisci consectetur harum hic in ipsum libero molestiae nihil odio
        quisquam! Blanditiis dolores eum nisi nostrum vitae! Ea nesciunt porro
        quisquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Alias, beatae corporis culpa dolor dolorum harum laboriosam libero,
        nihil nobis nulla odit officia possimus praesentium quia quos
        reprehenderit repudiandae totam veniam.
      </div>
    </div>
  );
};
export default Services;
