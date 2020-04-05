import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Register from "./Register";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Profile from "./Profile";
import DoctorsList from "./DoctorsList";
import PatientDetail from "./PatientDetail";
import ZoomCall from "./ZoomCall";
import Payment from "./Payment";

function MainRoutes() {
  return (
    <Router>
      <Navbar />
      <Route path="/prescrie_deploy/Home" component={Register} />
      <Route path="/prescrie_deploy/Login" component={Login} />
      <Route path="/prescrie_deploy/SignUp" component={Register} />
      <Route path="/prescrie_deploy/Profile/:id" component={Profile} />
      <Route path="/prescrie_deploy/DocList" component={DoctorsList} />
      <Route
        path="/prescrie_deploy/PatientDets/:id/:name/:slot/:fee"
        component={PatientDetail}
      />
      <Route path="/prescrie_deploy/payment_status" component={Payment} />
      <Route
        path="/prescrie_deploy/zoom_call_token/:name"
        component={ZoomCall}
      />
    </Router>
  );
}
export default MainRoutes;
