import { BrowserRouter, Routes as Router, Route } from "react-router-dom";
import { ROUTE_PATHS } from "../data/constants";
import Home from "../pages/Home/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path={ROUTE_PATHS.HOME} Component={Home} />
      </Router>
    </BrowserRouter>
  );
};
