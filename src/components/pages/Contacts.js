import React from "react";
import "../../assets/styles/menu.css";
import PageTitle from "../PageTitle";

const sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: `white`,
};

const Contacts = () => {
  return (
    <div style={sectionStyle}>
      <PageTitle text="Контактная информация" />
      <div className="contacts__desc">
        <div className="contacts__address">
          <span>Адрес: </span> Амурская область, г. Благовещенск, ул. Ленина,
          18, 2 этаж.
        </div>
        <div className="contacts__phone">
          <span>Телефон: </span> 8 924 670 18 52,
        </div>
        <div className="contacts__email">
          <span>Email: </span> blagugolok@mail.ru
        </div>
        <div className="contacts__legal">
          <span>Юридическая информация: </span> blagugolok@mail.ru ИНН
          2801198149 73 ОГРН 315 280 100002477 Дальневосточный филиал ПАО "МТС
          БАНК" р сч 40802810100220002311 кор сч 30101810700000000838 БИК
          040813838
        </div>
      </div>
    </div>
  );
};

export default Contacts;
