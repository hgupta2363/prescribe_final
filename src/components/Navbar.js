import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LoggedStatus from "./Profile";
import axios from "axios";
import "./css/navbar.css";

export default class Navbar extends Component {
  state = {
    LoggedStatus: "",
  };
  componentDidMount() {
    if (!localStorage.getItem("Logged")) this.setState({ LoggedStatus: false });
    else this.setState({ LoggedStatus: true });
  }
  onSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:5000/Logout").then((res) => {
      localStorage.removeItem("Logged");
      window.location = "/Login";
    });
  }
  // Update()
  // {
  //
  // }
  render() {
    return (
      <div>
        <header>
          <div></div>
          <nav className="">
            <ul className="nav__links">
              <li className="">
                <Link to="/" className="a">
                  Home
                </Link>
              </li>
              <li className="">
                <Link to="/prescrie_deploy/DocList" className="a">
                  Doctors List
                </Link>
              </li>
            </ul>
          </nav>
          <div></div>
        </header>
      </div>
    );
  }
}
