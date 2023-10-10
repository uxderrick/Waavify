import React from "react";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage></LandingPage>}></Route>
          <Route
            path="/dashboard"
            element={<DetailsPage></DetailsPage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
