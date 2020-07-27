import React from "react";
import "../assets/styles/welcome.css";
import bg from "../assets/img/foodtable.jpg";
import bg1 from "../assets/img/foodtable2.jpg";

const sectionStyle = {
  width: "100%",
  height: "550px",
  background: `url(${bg}) no-repeat center/cover`,
};

const Welcome = () => {
  return (
    <section style={sectionStyle} className="welcome-page page-section">
      <h1 className="welcome-page__title">Столовая Уголок</h1>
      <div className="welcome-page__desc">
        Доставка комплексных обедов организациям по бюджетным ценам!
      </div>
    </section>
  );
};
export default Welcome;
