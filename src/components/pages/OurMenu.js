import React from "react";
import PageTitle from "../PageTitle";
import bg from "../../assets/img/whitebg.jpg";
const sectionStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${bg}) no-repeat center/cover`,
};

const OurMenu = () => {
  return (
    <div style={sectionStyle} className="our-menu">
      <PageTitle text="Наш ассортимент" />
    </div>
  );
};
export default OurMenu;
