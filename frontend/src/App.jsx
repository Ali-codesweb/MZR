import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./screens/Home";

import Login from "./screens/Login";
import { LoadingOverlay } from "@mantine/core";
function App() {
  const routes = [
    {
      route: "/",
      component: React.lazy(() => import("./screens/Login")),
      name: "Login",
    },
  ];
  return (
    <div className="App">
      <Router>
        <React.Suspense fallback={<LoadingOverlay visible={true} />}>
          <Routes>
            {routes.map((e) => (
              <Route path={e.route} element={<e.component name={e.name} />} />
            ))}
            <Route path="/home" element={<Home />} />
          </Routes>
        </React.Suspense>
      </Router>
    </div>
  );
}

export default App;
