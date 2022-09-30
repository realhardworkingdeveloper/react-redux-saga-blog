import React from "react";
import Home from "./pages/Home";
import Singlepost from "./pages/SinglePost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Singlepost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;