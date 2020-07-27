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

function App() {
  return (
    <Router>
      <div className="grey lighten-5 page-wrapper">
        <Header />
        <ScrollTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={OurMenu} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/contacts" component={Contacts} />
        </Switch>
        <PageFooter />
      </div>
    </Router>
  );
}

export default App;
