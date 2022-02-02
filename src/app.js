import React, {useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import items from "./data/accordion";
import dropdownOptions from "./data/dropdown";
import Dropdown from "./components/Dropdown";

const App = () => {
  const [selected, setSelected] = useState(dropdownOptions[1]);
  return (
    <div className="container mt-4">
      <Dropdown selected = {selected} onSelectedChange = {setSelected} options={dropdownOptions} />
    </div>
  );
};

export default App;
