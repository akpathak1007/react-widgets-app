import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import items from "./data/accordion";
import dropdownOptions from "./data/dropdown";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const App = () => {
  const [selected, setSelected] = useState(dropdownOptions[1]);
  return (
    <div className="">
      <Header/>
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={ dropdownOptions }
          selected={ selected }
          onSelectedChange={ setSelected }
          label='Select a Color'
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
