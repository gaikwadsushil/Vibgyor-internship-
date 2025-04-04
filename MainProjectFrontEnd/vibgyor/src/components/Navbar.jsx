import React from 'react'
import {NavLink} from 'react-router-dom';
export default function Navbar() {
  return (
    <div>
    
      <header>
        <nav
          style={{ padding: "0 4%" }}
          className="navbar navbar-expand-sm navbar-dark bg-warning"
        >
          <a className="navbar-brand" href="/">
            <img
              width="50px"
              style={{ "border-radius": "30%" }}
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="/" aria-current="page">
                  Home <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdownId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownId">
                  <a className="dropdown-item" href="/">
                    Action 1
                  </a>
                  <a className="dropdown-item" href="/">
                    Action 2
                  </a>
                </div>
              </li>
            </ul>
            <form className="d-flex my-2 my-lg-0">
              <input
                className="form-control me-sm-2"
                type="text"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          <NavLink to="/login" style={{ width: "20px" }}>
            <svg
              style={{
                margin: "0 0 0 50%",
                "border-radius": "50%",
                "background-color": "orange",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="200%"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>
          </NavLink>
        </nav>
      </header>
    </div>
  );
}