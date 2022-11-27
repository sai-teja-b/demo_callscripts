import { useState } from "react";
import "./App.css";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";

import Question from "./components/ordersScriptCB/routineAppt";
import data from "./components/ordersScriptCB/ordersdata";
import Orders from "./components/CombinedVersions/Orders";
import SelfReferralCB from "./components/SelfRefferalCB/SelfReferralCB";
import SelfReferral from "./components/CombinedVersions/SelfReferral";
import ReferralCB from "./components/ReferralCB/SelfReferralCB";
import ReferralPS from "./components/ReferralPS/ReferralPS";
import Referral from "./components/CombinedVersions/Referral";

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <div className="nav">
          <NavLink
            to="/"
            className="navlink"
            style={({ isActive }) => ({
              background: isActive ? "#4caf50" : "#009edb",
            })}
          >
            Self Referral
          </NavLink>
          <NavLink
            to="/referral"
            className="navlink"
            style={({ isActive }) => ({
              background: isActive ? "#4caf50" : "#009edb",
            })}
          >
            Referral
          </NavLink>
          <NavLink
            to="/order"
            className="navlink"
            style={({ isActive }) => ({
              background: isActive ? "#4caf50" : "#009edb",
            })}
          >
            Orders
          </NavLink>
        </div>
        <div className="script-area">
          <Routes>
            <Route path="/" exact element={<SelfReferral />}></Route>
            <Route path="/referral" element={<Referral />}></Route>
            <Route path="/order" element={<Orders />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
