import React, { useState } from "react";
import Dropdown from "./Dropdown";
import options from "../data/translate";
import Convert from "./Convert";
const Translate = (props) => {
  const [language, setLanguage] = useState(options[1]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="language" className="form-label">
          Enter text
        </label>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="form-control"
          id="language"
        />
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        label="Select a language"
      />
      <h1 className="display-1 mt-5">Output</h1>
      <hr />
      <Convert language={language} text={text} />
    </div>
  );
};

export default Translate;
