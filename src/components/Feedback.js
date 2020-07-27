import React from "react";
import PageTitle from "./PageTitle";
import FeedbackForm from "./FeedbackForm";
import "../assets/styles/feedback.css";
import contacts from "../assets/img/contacts.jpg";

const Feedback = () => {
  return (
    <div className="feedback page-section">
      <PageTitle text="Обратная связь" />
      <div className="feedback__desc">
        Заинтересовались? Оставьте Ваши контактные данные и мы обязательно
        свяжемся с Вами!
      </div>
      <div className="feedback__content">
        <div className="feedback__picture">
          <img className="feedback__image" src={contacts} alt="contacts pic" />
        </div>
        <FeedbackForm />
      </div>
    </div>
  );
};

export default Feedback;
