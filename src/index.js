import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);
