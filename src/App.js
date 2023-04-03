import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Verilog from "./pages/Verilog";
import System from "./pages/System";
import Uvm from "./pages/Uvm";
import Interview from "./pages/Interview";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";
import Article from "./components/Article";

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home expanded={expanded} setExpanded={setExpanded} />}
        />
        <Route path="/" element={<Layout />}>
          <Route path="/verilog" element={<Verilog />} />
          <Route path="/system" element={<System />} />
          <Route path="/uvm" element={<Uvm />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/verilog/:slug" element={<Article />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
