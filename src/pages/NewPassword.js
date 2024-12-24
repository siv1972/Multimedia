import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const NewPassword = () => {

    let {updatePassword, pendingUsername} =useAuth();


    const navigate=useNavigate();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateForm = () => {
  
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        alert('Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
      }
  
      return true;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(validateForm()){
        updatePassword(pendingUsername,password);
        navigate("/PasswordUpdated")
      }
    };

  return (
    <div>
        <div className='total-login-box'>
            <div className='center-login-box'>
                <h1>SPOTSTAR-SET NEW PASSWORD</h1>
                <form onSubmit={handleSubmit}>
                  <div className='login-input-box'>
                        <input type="password" placeholder='Password' onChange={(e) =>  setPassword(e.target.value)} required/>

                        <input type="password" placeholder='Confirm Password' onChange={(e) =>  setConfirmPassword(e.target.value)} required/>

                        <button  className='btn'  type='submit'>Update</button>
                  </div>
                </form>
                </div>
        </div>    
    </div>
  )
}

export default NewPassword