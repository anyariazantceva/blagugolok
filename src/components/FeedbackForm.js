import React, { useState } from "react";
import TextInput from "react-materialize/lib/TextInput";

const FeedbackForm = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, surname, phone);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__wrapper">
        <TextInput
          inputClassName="form__input"
          id="TextInput-4"
          name="name"
          placeholder="Имя"
          value={name}
          onChange={handleName}
          required
        />
        <TextInput
          inputClassName="form__input"
          id="TextInput-4"
          name="surname"
          placeholder="Фамилия"
          value={surname}
          onChange={handleSurname}
          required
        />
        <TextInput
          inputClassName="form__input"
          id="TextInput-4"
          name="phone"
          placeholder="Телефон"
          value={phone}
          onChange={handlePhone}
          required
        />
      </div>
      <button className="waves-effect waves-light btn">Отправить</button>
    </form>
  );
};
export default FeedbackForm;
