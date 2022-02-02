import React from "react";

const Header = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-info">
      <div className="container-fluid">
        <a href="#" className="navbar-brand">
          Wedgits
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbar_content"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar_content">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Accordion
              </a>
            </li>
            <li className="nav-item">
              <a href="/list" className="nav-link">
                Search
              </a>
            </li>
            <li className="nav-item">
              <a href="/dropdown" className="nav-link">
                Dropdown
              </a>
            </li>
            <li className="nav-item">
              <a href="/translate" className="nav-link">
                Translate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
