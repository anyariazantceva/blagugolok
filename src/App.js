import React from "react";
import "./App.css";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import OurMenu from "./components/pages/OurMenu";
import Services from "./components/pages/Services";
import Contacts from "./components/pages/Contacts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageFooter from "./components/layout/Footer";
import ScrollTop from "./components/ScrollTop";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  return (
    <Router>
      <div className="grey lighten-5 page-wrapper">
        <ScrollTop />
        <Header />
        <AnimatedSwitch
          atEnter={{ opacity: 0, transitionDuration: 1000 }}
          atLeave={{ opacity: 0, transitionDuration: 1000 }}
          atActive={{ opacity: 1, transitionDuration: 1000 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={OurMenu} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contacts" component={Contacts} />
        </AnimatedSwitch>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
