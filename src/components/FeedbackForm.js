import React from "react";
import TextInput from "react-materialize/lib/TextInput";

const FeedbackForm = () => {
  return (
    <form className="form">
      <div className="form__wrapper">
        <TextInput
          inputClassName="form__input"
          id="TextInput-4"
          placeholder="Имя"
          required
        />
        <TextInput
          inputClassName="form__input"
          id="TextInput-4"
          placeholder="Фамилия"
          required
        />
        <TextInput
          inputClassName="form__input"
          id="TextInput-4"
          label="Email"
        />
        <TextInput
          inputClassName="form__input"
          id="TextInput-4"
          placeholder="Телефон"
          required
        />
      </div>
      <button className="waves-effect waves-light btn">Отправить</button>
    </form>
  );
};
export default FeedbackForm;
