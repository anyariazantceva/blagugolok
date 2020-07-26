import React from "react";
import TextInput from "react-materialize/lib/TextInput";
import Textarea from "react-materialize/lib/Textarea";

const FeedbackForm = () => {
  return (
    <form className="form">
      <div className="form__group">
        <TextInput id="TextInput-4" placeholder="Имя" />
        <TextInput id="TextInput-4" placeholder="Фамилия" />
      </div>
      <div className="form__group">
        <TextInput email id="TextInput-4" label="Email" validate />
        <TextInput id="TextInput-4" placeholder="Телефон" />
      </div>
      <Textarea id="Textarea-12" placeholder="Сообщение..." />
      <button>Отправить</button>
    </form>
  );
};
export default FeedbackForm;
