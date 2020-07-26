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
        <a className="brand-logo left" href="#">
          <div className="logo">
            <img className="logo__image" src={Logo} alt="" />
          </div>
        </a>
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
      <NavItem to="/">
        <Link to="/">Главная</Link>
      </NavItem>
      <NavItem>
        <Link to="/menu">Наше меню</Link>
      </NavItem>
      <NavItem>
        <Link to="/services">Услуги</Link>
      </NavItem>
      <NavItem>
        <Link to="/contacts">Контакная информация</Link>
      </NavItem>
    </Navbar>
  );
};

export default Header;
