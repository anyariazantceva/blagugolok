import React from "react";
import "../../assets/styles/header.css";
import { Navbar, NavItem, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <Navbar
      className="header grey darken-3 z-depth-3"
      alignLinks="right"
      brand={
        <Link className="brand-logo left" to="/">
          <div className="logo">
            <img className="logo__image" src={Logo} alt="" />
          </div>
        </Link>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Link to="/">Главная</Link>
      <Link to="/menu">Наше меню</Link>
      <Link to="/services">Услуги</Link>
      <Link to="/contacts">Контакная информация</Link>
    </Navbar>
  );
};

export default Header;
