import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "./Assets/logo.png";

const NavbarComponent = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar bg-primary py-2"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="container navbar-div">
          <img
            src={logo}
            style={{ height: "60px", width: "60px", objectFit: "contain" }}
          />
          <h1 className="text-light ml-2" href="#">
            Petaverse
          </h1>
        </div>
        <div className="d-flex" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Services
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              data-bs-theme="light"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
