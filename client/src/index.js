import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";

export default function App() {
  // Router
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          {/* Home page */}
          <Route index element={<Home />} />

          {/* Contact page */}
          <Route path="contact" element={<Contact />} />

          {/* 404 page */}
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));