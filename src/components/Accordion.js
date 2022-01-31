import React, { useState } from "react";
import "./Accordion.css";
const config = {
  show: {
    action: "active",
    icon: "bi-caret-down-fill",
  },
  hide: {
    action: "",
    icon: "bi-caret-right-fill",
  },
};
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const onTitleClick = (index) => {
    setActiveIndex(index);
  };
    const RenderItems = items.map((item, index) => {
    const { action, icon } = activeIndex === index ? config.show : config.hide;
    return (
      <li className="list-group-item text-muted" key={item.title}>
        <h6
          onClick={() => onTitleClick(index)}
          className={`${action} mb-3`}
          style={{ cursor: "pointer" }}
        >
          <i className={`bi ${icon}`}></i> {item.title}
        </h6>
        <p className={`deactive ${action}`}>{item.content}</p>
      </li>
    );
  });
  return (
    <div className="accordion container  my-3">
      <ul className="list-group list-group-flush">{RenderItems}</ul>
    </div>
  );
};

export default Accordion;
