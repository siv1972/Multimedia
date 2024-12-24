import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/login.css'
import { useAuth } from '../App';



const Login = () => {



  let { displayAccountsInConsole, setCurrentUser, checkUser, verfiyCredentials } =  useAuth();



  const navigate=useNavigate();

  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");

  const auth=(e)=>{

    e.preventDefault();
    
    if(checkUser(username)){
      if(verfiyCredentials(username,password)){
        setCurrentUser(username);
        navigate("/Home");
      }
        
      else
        alert("Invalid Credentials");
    }
    else{
      alert("Invalid Credentials");
    }
  }


  return (
    <div className='total-login-box'>
      <div className='center-login-box'>
        <h1 onClick={displayAccountsInConsole}>Spotstar Login</h1>
        <div className='login-input-box'>
          <form onSubmit={(e) => auth(e)}>

              <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='Username' required/>

              <div>
                <input type="password"  value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='Password' required/>
                <Link to="/ForgotOtpSend"><p>forgotpassword</p></Link>
              </div>

              <div className='submit-box'>
                <button type='submit' className='btn' style={{marginTop:"10px",marginBottom:"10px"}}>Login</button>
              </div>
          </form>

          <p>Are you new user <Link to="/SignUp">Sign up</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login