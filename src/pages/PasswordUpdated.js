import React from 'react'
import { Link } from 'react-router-dom';

const PasswordUpdated = () => {


  return (
    <div className='welcome-outer'>
      <div className="card" style={{height:"130px",width:"300px"}}>
        <h2 className="card-title">SPOTSTAR</h2>
        <p className="card-content">Password Updated Successfully</p>
        <Link to="/Login"  className="card-button">Go to Login</Link>
      </div>
    </div>
  )
}

export default PasswordUpdated