import React, { createContext, useState, useEffect } from "react";

export const MenuContext = createContext();

const MenuContextProvider = (props) => {
  const [salads, setSalads] = useState([
    { id: "s1", title: "Морковь по корейски" },
    { id: "s2", title: "Свекла с маслом" },
    { id: "s3", title: "Яйцо под майонезом" },
    { id: "s4", title: "Салат из свежей капусты" },
    { id: "s5", title: "Салат Сюрприз" },
    { id: "s6", title: "Морская капуста с морковью" },
    { id: "s7", title: "Винегрет овощной" },
    { id: "s8", title: "Оливье" },
  ]);
  const [firsts, setFirsts] = useState([
    { id: "f1", title: "Борщ" },
    { id: "f2", title: "Суп овощной" },
    { id: "f3", title: "Суп с галушками" },
    { id: "f4", title: "Лапша по домашнему" },
    { id: "f5", title: "Рассольник" },
    { id: "f6", title: "Суп гороховый" },
    { id: "f7", title: "Суп рыбный" },
  ]);
  const [seconds, setSeconds] = useState([
    { id: "se1", title: "Котлета мясная с гарниром" },
    { id: "se2", title: "Котлета рыбная с гарниром" },
    { id: "se3", title: "Голубец любительский с гарниром" },
    { id: "se4", title: "Минтай жаренный с гарниром" },
    { id: "se5", title: "Горбуша под овощами с гарниром" },
    { id: "se6", title: "Соус Чахохбили с гарниром" },
    { id: "se7", title: "Котлета куриная рубленная с гарниром" },
    { id: "se8", title: "Рагу овощное" },
    { id: "se9", title: "Плов со свининой" },
    { id: "se10", title: "Жаркое по-домашнему" },
    { id: "se11", title: "Тефтели мясные с гарниром" },
    { id: "se12", title: "Голубец в листе с гарниром" },
  ]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    <MenuContext.Provider value={{ salads, seconds, firsts, loading }}>
      {props.children}
    </MenuContext.Provider>
  );
};
export default MenuContextProvider;
