import { useNavigate } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoMusicalNotesSharp } from "react-icons/io5";
import { BiSolidVideos } from "react-icons/bi";
import '../Styles/header.css'
import { Link } from 'react-router-dom'

const Header = ({path="Home"}) => {

  const navigate=useNavigate();

  return (
    <div className='total-header-box'>
        <div className='header-box'>
          <div className="go-back-box" onClick={()=> navigate("/"+path)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"></path>
            </svg>
          </div>
            
            <h1>SPOTSTAR</h1>
        </div>

        <div className='navbar'>
            <Link  to='/Home'><FaHome style={{marginBottom:"50px"}}/></Link>
            <Link  to='/MusicHome'><IoMusicalNotesSharp/></Link>
            <Link  to='/VideoHome'><BiSolidVideos/></Link>
            <button onClick={()=> navigate("/Login")} className='logout-btn'>logout</button>
        </div>
    </div>
  )
}

export default Header