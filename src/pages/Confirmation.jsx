import React from 'react'
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  return (
    <div className='page'>
      <h2>Thank you for booking!</h2>
      <br/>
      <button className="btn" onClick={() => navigate("/")}>
        Back Home
      </button>
    </div>
  )
}

export default Confirmation