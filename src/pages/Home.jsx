import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.text())
      .then(data => console.log(data));
  }, []);

  return (
    <div className="page">
      <h1>Flight Booking App</h1>
      <h3>Welcome to flight booking app</h3>

      <button className="btn" onClick={() => navigate("/flight-search")}>
        Search Flights Here
      </button>
    </div>
  );
};

export default Home;
