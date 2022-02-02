import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import items from "./data/accordion";
import dropdownOptions from "./data/dropdown";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";

const App = () => {
  const accordion = () => {
    if (window.location.pathname === "/") {
      return <Accordion items={items} />;
    }
  };
  const list = () => {
    if (window.location.pathname === "/list") {
      return <Search />;
    }
  };
  const dropdown = () => {
    if (window.location.pathname === "/dropdown") {
      return <Dropdown />;
    }
  };
  const translate = () => {
    if (window.location.pathname === "/translate") {
      return <Translate />;
    }
  };
  return (
    <div className="container mt-4">
      {accordion()}
      {dropdown()}
      {translate()}
      {list()}
    </div>
  );
};

export default App;
