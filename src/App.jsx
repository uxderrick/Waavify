import React from "react";
import LandingPage from "./pages/LandingPage";
import DetailsPage from "./pages/DetailsPage";
import SummaryPage from "./pages/SummaryPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
          <Route path="/summary" element={<SummaryPage></SummaryPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
