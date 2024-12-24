import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const ForgotOtpSend = () => {

    let {checkUser, setPendingUsername} =useAuth();


    const navigate=useNavigate();

    const [userName, setUsername] = useState('');


    const handleSubmit = (e) => {
      e.preventDefault();
      if(checkUser(userName)){
        setPendingUsername(userName);
          navigate("/ForgotOtpVerify");
      }
      else{
        alert("User Not Found");
      }
    };


  return (
    <>
        <div className='total-login-box'>
          <div className='center-login-box'>
              <h1>Forgot Password</h1>

              <div className='login-input-box'>

                <div>
                  <form onSubmit={handleSubmit}>
                  <input type="text" placeholder='Username' value={userName===0?"":userName} onChange={(e) => setUsername(e.target.value)} required/>
                  <button className='btn2'type='submit'>Send Otp</button>
                  </form>
                </div>

              </div>
          </div>
        </div>
    </>
    
  )
}

export default ForgotOtpSend