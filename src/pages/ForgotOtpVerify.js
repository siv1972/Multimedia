import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const ForgotOtpVerify = () => {

    const navigate=useNavigate();

    const[otp,seOtp]=useState(0);
    const[generatedOTP,setGeneratedOTP]=useState(Math.floor(1000 + Math.random() * 9000));
    

    const generateOTP = () => {
      const otp = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit OTP
      setGeneratedOTP(otp);
      alert(`Your OTP is: ${otp}`);
    };

    const handleSubmit=()=>{
      if(Number(otp) === Number(generatedOTP)){
        navigate("/NewPassword");
      }
      else{
        alert("Invalid OTP");
      }
    }

    useEffect(()=>{
      generateOTP();
    },[])



  return (
    <>
        <div className='total-login-box'>
          <div className='center-login-box'>
            <h1>SPOTSTAR OTP VERIFICATION</h1>
              <div className='login-input-box'>

                <div>
                  <form onSubmit={handleSubmit}>
                      <input value={otp===0?"":otp} onChange={(e)=> seOtp(e.target.value)} type="number" />
                      <button className='btn2' type='submit'>verify</button>
                  </form>
                  
                </div>

                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                  <p>Send Otp Again?</p>
                  <button className='btn2' onClick={generateOTP}>Resend Otp</button>
                </div>
                
              </div>
          </div>
        </div>
    </>
    
  )
}

export default ForgotOtpVerify