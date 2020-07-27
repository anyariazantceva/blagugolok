import React, { useContext } from "react";
import { MenuContext } from "../../contexts/MenuContext";
import PageTitle from "../PageTitle";
import "../../assets/styles/contacts.css";

const sectionStyle = {
  width: "100%",
  height: "100vh",
  backgroundColor: `white`,
};

const Contacts = () => {
  const { loading } = useContext(MenuContext);
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <div className="contacts" style={sectionStyle}>
      <PageTitle text="Контактная информация" />
      <div className="contacts__desc">
        <div className="contacts__address">
          <span className="contacts__bold">Адрес: </span> Амурская область, г.
          Благовещенск, ул. Ленина, 18, 2 этаж.
        </div>
        <div className="contacts__phone">
          <span className="contacts__bold">Телефон: </span> 8 924 670 18 52,
        </div>
        <div className="contacts__email">
          <span className="contacts__bold">Email: </span> blagugolok@mail.ru
        </div>
        <div className="contacts__legal">
          <div className="legal__title">Юридическая информация: </div>
          <div className="legal__text">
            <div className="legal__text-item">ИНН 280119814973</div>
            <div className="legal__text-item">ОГРН 315 280 100002477</div>
            <div className="legal__text-item">
              Дальневосточный филиал ПАО "МТС-БАНК"
            </div>
            <div className="legal__text-item">р/сч 40802810100220002311</div>
            <div className="legal__text-item">кор/сч 30101810700000000838</div>
            <div className="legal__text-item">БИК 040813838</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
