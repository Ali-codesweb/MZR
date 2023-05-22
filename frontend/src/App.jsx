import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import React from "react";

import { LoadingOverlay } from "@mantine/core";
import AppBar from "./components/AppBar";
import { QueryClient, QueryClientProvider } from "react-query";
function App() {
  const queryClient = new QueryClient();
  const CommonRoutes = [
    {
      route: "/",
      component: React.lazy(() => import("./screens/Login")),
      name: "Login",
    },
  ];
  const VMRoutes = [
    {
      route: "/vice-manager/home",
      component: React.lazy(() => import("./screens/vice-manager/VMHome")),
      name: "Vice Manager Home",
    },
    {
      route: "/vice-manager/maintenance",
      component: React.lazy(() =>
        import("./screens/vice-manager/VMMaintenance")
      ),
      name: "Vice Manager Home",
    },
  ];
const faizRoutes = [
  {
    route: "/faiz/home",
    component: React.lazy(() => import("./screens/department/faiz/DFaizHome")),
    name: "Faiz Home",
  }
]
  const SMRoutes = [
    {
      route: "/store-manager/home",
      component: React.lazy(() => import("./screens/store-manager/SMHome")),
      name: "Store Manager Home",
    },
    {
      route: "/store-manager/allocate-budget",
      component: React.lazy(() => import("./screens/store-manager/SMALllocateBudget")),
      name: "Store Manager Home",
    },
  ];
  const routes = VMRoutes.concat(SMRoutes, CommonRoutes,faizRoutes);
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
          <AppBar>
            <React.Suspense fallback={<LoadingOverlay visible={true} />}>
              <Routes>
                {routes.map((e) => (
                  <Route
                    path={e.route}
                    element={<e.component name={e.name} />}
                  />
                ))}
              </Routes>
            </React.Suspense>
          </AppBar>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
