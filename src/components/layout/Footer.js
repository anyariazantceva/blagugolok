import React from "react";
import { Footer } from "react-materialize";
import {Link} from "react-router-dom";

const PageFooter = () => {
  return (
    <Footer
      className="grey darken-3"
      copyrights="2020 Столовая Уголок"
      links={
        <ul>
          <li>
            <Link className="grey-text text-lighten-3" to="/">
              Главная
            </Link>
          </li>
          <li>
            <Link className="grey-text text-lighten-3" to="/menu">
              Наше меню
            </Link>
          </li>
          <li>
            <Link className="grey-text text-lighten-3" to="/services">
              Услуги
            </Link>
          </li>
          <li>
            <Link className="grey-text text-lighten-3" to="/contacts">
              Контактная информация
            </Link>
          </li>
        </ul>
      }
    >
      <h5 className="white-text">Столовая Уголок</h5>
      <p className="grey-text text-lighten-4">
        Быстрая доставка комплексных обедов!
      </p>
    </Footer>
  );
};
export default PageFooter;
