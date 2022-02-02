import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="navbar navbar-expand-md navbar-light bg-info ">
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
              <Link href="/" className="nav-link text-dark">
                Accordion
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/list" className="nav-link">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/dropdown" className="nav-link">
                Dropdown
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/translate" className="nav-link">
                Translate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
