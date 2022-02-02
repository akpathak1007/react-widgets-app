import React, { useState } from "react";
import Dropdown from "./Dropdown";
import options from "../data/translate";
const Translate = (props) => {
  const [language, setLanguage] = useState(options[1]);
  return (
    <div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
    </div>
  );
};

export default Translate;
