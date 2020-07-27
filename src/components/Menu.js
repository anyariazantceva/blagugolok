import React, { useContext } from "react";
import { MenuContext } from "../contexts/MenuContext";
import "../assets/styles/menu.css";

const Menu = () => {
  const { salads, firsts, seconds } = useContext(MenuContext);
  return (
    <div className="menu-wrapper">
      <div className="menu__item">
        <div className="menu__item-title">Салаты</div>
        <div className="menu__item-content">
          {salads.map((item) => {
            return (
              <div className="menu__item-name" key={item.id}>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="menu__item">
        <div className="menu__item-title">Первые блюда</div>
        <div className="menu__item-content">
          {firsts.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </div>
      </div>
      <div className="menu__item">
        <div className="menu__item-title">Вторые блюда</div>
        <div className="menu__item-content">
          {seconds.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </div>
      </div>
    </div>
  );
};
export default Menu;
