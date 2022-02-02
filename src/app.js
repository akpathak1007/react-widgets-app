import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import items from "./data/accordion";
import dropdownOptions from "./data/dropdown";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const App = () => {
  return (
    <div className="container mt-4">
      <Translate />
    </div>
  );
};

export default App;
