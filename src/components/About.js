import React, { useState } from "react";
import PageTitle from "./PageTitle";
import "../assets/styles/about.css";
const About = () => {
  const [facts, setFacts] = useState([
    {
      id: 1,
      text:
        "Мы работаем с 2010 года на базе столовой кондитерской фабрики 'Зея'.",
    },
    {
      id: 2,
      text:
        "В наш ассортимент входят блюда европейской, русской и азиатской кухни.",
    },
    {
      id: 3,
      text:
        "Мы всегда предоставляем качественную и свежую еду по доступным\n" +
        "            ценам! Комплексные обеды от 160 рублей.",
    },
  ]);
  return (
    <div className="about">
      <PageTitle text="О нас" />
      <div className="about__group">
        {facts.map((fact) => {
          return (
            <div key={fact.id} className="about__item">
              <div className="about__item-text">{fact.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
