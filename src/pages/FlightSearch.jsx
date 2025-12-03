import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSearchData } from "../redux/flightSlice";

const FlightSearch = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedFlight, setSelectedFlight] = useState(null);

  const flights = [
    {
      name: "Air India A1-275",
      source: "Mumbai",
      destination: "Delhi",
      depart: "10:00 AM",
      arrive: "12:00 PM",
      price: 5000
    },
    {
      name: "IndiGo 6E-123",
      source: "Mumbai",
      destination: "Delhi",
      depart: "2:00 PM",
      arrive: "4:00 PM",
      price: 4500
    },
    {
      name: "SpiceJet SG-456",
      source: "Mumbai",
      destination: "Delhi",
      depart: "6:00 PM",
      arrive: "8:00 PM",
      price: 4800
    }
  ];

  const handleBook = () => {
  if (!selectedFlight) {
    alert("Please select a flight to book!");
    return;
  }
  dispatch(setSearchData({
    trip: "oneway",   
    source: selectedFlight.source,
    destination: selectedFlight.destination,
    date: "2025-01-01", 
    flightName: selectedFlight.name
  }));
  navigate("/flight-booking");
};


  return (
    <div className="page">
      <h2>Available Flights</h2>

      <button className="btn book-flight" onClick={handleBook}>
        Book Flight
      </button>

      <table className="flight-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Flight</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight, index) => (
            <tr key={index}>
              <td>
                <input
                  type="radio"
                  name="flight"
                  data-testid="select-flight"
                  onChange={() => setSelectedFlight(flight)}
                />
              </td>
              <td>{flight.name}</td>
              <td>{flight.source}</td>
              <td>{flight.destination}</td>
              <td>{flight.depart}</td>
              <td>{flight.arrive}</td>
              <td>₹{flight.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style jsx>{`
        .flight-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }
        .flight-table th, .flight-table td {
          border: 1px solid #ccc;
          padding: 10px;
          text-align: center;
        }
        .flight-table th {
          background-color: #e0f0ff;
        }
        .book-flight {
          background-color: #007bff;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 10px;
        }
        .book-flight:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default FlightSearch;

