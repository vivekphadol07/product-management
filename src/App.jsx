import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 500); 

    return () => clearTimeout(timer);
  }, [searchQuery]);
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <Navbar setSearchQuery={setSearchQuery}/>

      {/* Pages */}
      <Routes>
        <Route path="/shopping-cart/" element={<Home searchQuery={debouncedQuery}/>} />
        <Route path="/shopping-cart/cart" element={<Cart />} />
      </Routes>

    </div>
  );
};
