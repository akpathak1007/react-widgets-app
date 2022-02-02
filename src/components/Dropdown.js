import React from "react";
import { useState } from "react/cjs/react.development";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const renderItems = options.map((option) => {
      if (option.value === selected.value) {
          return null;
    }
    return (
      <option
        key={option.value}
        value={option.value}
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </option>
    );
  });
  return (
    <div>
      <form action="">
        <select name="" className="form-select" id="">
          <option value="">{selected.label}</option>
          {renderItems}
        </select>
      </form>
    </div>
  );
};
export default Dropdown;
