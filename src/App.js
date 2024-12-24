import React, { createContext, useContext, useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import OtpVerify from './pages/OtpVerify';
import Welcome from './pages/Welcome';
import ForgotOtpSend from './pages/ForgotOtpSend';
import ForgotOtpVerify from './pages/ForgotOtpVerify';
import NewPassword from './pages/NewPassword';
import PasswordUpdated from './pages/PasswordUpdated';
import MusicHome from './pages/MusicHome';
import Music from './pages/Music';
import VideoHome from './pages/VideoHome';
import VideoLanguageHome from './pages/VideoLanguageHome';
import CelebrityMoviePage from './pages/CelebrityMoviePage';
import Video from './pages/Video';

export const AuthContext = createContext();

function App() {

  const [users, setUsers] = useState([["admin","Admin@123"]]);


  const [currentUser,setCurrentUser]=useState("");

  const [pendingUsername,setPendingUsername]=useState("");
  const [pendingPassword,setPendingPassword]=useState("");

   const checkUser=(username)=>{
    for (let i = 0; i < users.length; i++) {
      if(users[i][0] === username)
        return true;
    }
    return false;
  }

  //function displayAccountsInConsole() {
    //console.log(users);
  //}

   const regUser=(username,password)=>{
      if(!checkUser(username)){
          setUsers([...users,[username,password]]);
          return true;
      }
      return false;
  }

   const verfiyCredentials=(username,password)=>{

      if(checkUser(username)){
        for (let i = 0; i < users.length; i++) {
          if(users[i][0] === username){
            if(users[i][1] === password)
               return true;
          }
        }
      }
      return false;
  }

  const updatePassword = (username,newPassword) =>{
    if(checkUser(username)){
      for (let i = 0; i < users.length; i++) {
        if(users[i][0] === username){
          users[i][1] = newPassword;
        }    
      }
    }
  }


  
  return (
    <AuthContext.Provider value={{pendingUsername,pendingPassword,setPendingUsername,setPendingPassword,currentUser,setCurrentUser,checkUser,regUser,verfiyCredentials,updatePassword}}>
          <div className="App">
            <img className='background' src={require("./media/images/backgroundImage/Leonardo_Phoenix_A_dramatic_highcontrast_background_image_for_2.jpg")} alt="" />
            <Routes>
              <Route path="/" element={<Login/>}/ >
              <Route path="/Home" element={<Home/>}/ >
              <Route path="/Login" element={<Login/>}/ >
              <Route path="/SignUp" element={<SignUp/>}/ >
              <Route path="/OtpVerify" element={<OtpVerify/>}/ >
              <Route path="/Welcome" element={<Welcome/>}/ >
              <Route path="/ForgotOtpSend" element={<ForgotOtpSend/>}/ >
              <Route path="/ForgotOtpVerify" element={<ForgotOtpVerify/>}/ >
              <Route path="/NewPassword" element={<NewPassword/>}/ >
              <Route path="/PasswordUpdated" element={<PasswordUpdated/>}/ >
              
              <Route path="/MusicHome" element={<MusicHome/>}/ >
              <Route path="/Music" element={<Music/>}/ >
              <Route path="/Music/:tname" element={<Music/>}/ >

              <Route path="/VideoHome" element={<VideoHome/>}/ >
              <Route path="/VideoLanguageHome/:lang" element={<VideoLanguageHome/>}/ >

              <Route path="/CelebrityMoviePage/:celeb" element={<CelebrityMoviePage/>}/ >

              <Route path="/Video/:name" element={<Video/>}/ >
            </Routes>
          </div>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default App;
