
import React from "react";
import './../styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import FlightSearch from "../pages/FlightSearch";
import FlightBooking from "../pages/FlightBooking";
import Confirmation from "../pages/Confirmation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flight-search" element={<FlightSearch />} />
      <Route path="/flight-booking" element={<FlightBooking />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  )
}

export default App
