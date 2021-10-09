import React, { Fragment } from "react"
import logo from "assets/images/logo.svg"

export default function Navbar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-bg">
        <div className="mr-2">
          <img src={logo} alt="" srcset="" />
        </div>
        <a className="navbar-brand text-white" href="!#">
          Bearbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse pl-3 pr-3"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="!#">
                Find Jobs
                <br />
                <div
                  style={{
                    height: "4px",
                    width: "65px",
                    background: "#fff",
                  }}
                ></div>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="!#">
                Upskill Yourself
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="!#">
                  Post a Job
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="!#">
                  Sign in
                </a>
              </li>
            </ul>
          </form>
        </div>
      </nav>
    </Fragment>
  )
}
