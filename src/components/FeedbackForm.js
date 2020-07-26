import React from "react";
import TextInput from "react-materialize/lib/TextInput";

const FeedbackForm = () => {
  return (
    <form className="form">
        <div className="form__wrapper">
            <div className="form__group">
                <TextInput id="TextInput-4" placeholder="Имя" required/>
                <TextInput id="TextInput-4" placeholder="Фамилия" required />
            </div>
            <div className="form__group">
                <TextInput email id="TextInput-4" label="Email" validate />
                <TextInput id="TextInput-4" placeholder="Телефон" required/>
            </div>
        </div>
      <button className="waves-effect waves-light btn">Отправить</button>
    </form>
  );
};
export default FeedbackForm;
