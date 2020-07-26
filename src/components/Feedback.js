import React from "react";
import PageTitle from "./PageTitle";
import FeedbackForm from "./FeedbackForm";
import "../assets/styles/feedback.css";

const Feedback = () => {
  return (
    <div className="feedback">
      <PageTitle text="Обратная связь" />
      <div className="feedback__desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        consequatur culpa enim excepturi ipsum maiores nostrum possimus.
        Accusantium consequuntur ex excepturi, ipsa itaque nihil porro qui
        quibusdam repellat sed ullam?
      </div>
      <FeedbackForm />
    </div>
  );
};

export default Feedback;
