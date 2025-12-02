// import { useDispatch, useSelector } from "react-redux";
// import { setUserData } from "../redux/flightSlice";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import React from "react";


// export default function FlightBooking() {

// const dispatch = useDispatch();
// const navigate = useNavigate();

// const flight = useSelector(state => state.flight.searchData);

// const [first, setFirst] = useState("");
// const [last, setLast] = useState("");
// const [email, setEmail] = useState("");
// const [mobile, setMobile] = useState("");

// const submit = () => {
// if (!first || !last || !email || !mobile) {
// alert("All fields are required");
// return;
// }
// dispatch(setUserData({ first, last, email, mobile }));
// navigate("/confirmation");
// };

// return ( <div className="page"> <h2>Booking Confirmation for {flight?.name}</h2>

//   <h3>Enter Passenger Details</h3>

//   <input className="input" type="text" placeholder="First Name *"
//     value={first} onChange={e=>setFirst(e.target.value)} /> <br/>

//   <input className="input" type="text" placeholder="Last Name *"
//     value={last} onChange={e=>setLast(e.target.value)} /> <br/>

//   <input className="input" type="text" placeholder="Email ID *"
//     value={email} onChange={e=>setEmail(e.target.value)} /> <br/>

//   <input className="input" type="text" placeholder="Mobile Number *"
//     value={mobile} onChange={e=>setMobile(e.target.value)} /> <br/>

//   <button className="btn" onClick={submit}>Confirm Booking</button>
// </div>


// );
// }



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../redux/flightSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FlightBooking() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const flight = useSelector(state => state.flight.searchData);

  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const submit = () => {
    if (!first || !last || !email || !mobile) {
      alert("All fields are required");
      return;
    }
    dispatch(setUserData({ first, last, email, mobile }));
    navigate("/confirmation");
  };

  return (
    <div className="page">
      <h2>Booking Confirmation for {flight?.name}</h2>

      <h3>Enter Passenger Details</h3>

      <input className="input" type="text" placeholder="First Name *"
        value={first} onChange={e => setFirst(e.target.value)} /> <br />

      <input className="input" type="text" placeholder="Last Name *"
        value={last} onChange={e => setLast(e.target.value)} /> <br />

      <input className="input" type="text" placeholder="Email ID *"
        value={email} onChange={e => setEmail(e.target.value)} /> <br />

      <input className="input" type="text" placeholder="Mobile Number *"
        value={mobile} onChange={e => setMobile(e.target.value)} /> <br />

      <button className="btn" onClick={submit}>Confirm Booking</button>
    </div>
  );
}
