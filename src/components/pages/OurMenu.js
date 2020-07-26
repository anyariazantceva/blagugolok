import React from "react";
import PageTitle from "../PageTitle";
import bg from "../../assets/img/whitebg.jpg";
import Menu from "../Menu";
import "../../assets/styles/menu.css";
const sectionStyle = {
  width: "100%",
  height: "100vh",
  background: `url(${bg}) no-repeat center/cover`,
};

const OurMenu = () => {
  return (
    <div style={sectionStyle} className="our-menu">
      <PageTitle text="Наш ассортимент" />
      <Menu />
    </div>
  );
};
export default OurMenu;
