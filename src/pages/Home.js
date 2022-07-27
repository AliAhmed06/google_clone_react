import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from '../components/Search';
import Logo from '../images/google_logo.svg';

function Home() {
  return (
    <div className="home">
        <div className="home_header">
            <div className="home_header_left">
                <Link to='/about'>About</Link>
                <Link to='/store'>Store</Link>
            </div>
            <div className="home_header_right">
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
                <AppsIcon />
                <Avatar />
            </div>
        </div>
        <div className="home_body">
            {/* <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-old-logok-21.png" alt="" /> */}
            <img src={Logo} alt="" />
            <div className="home_inputContainer">
                <Search hideButtons={false} />
            </div>
        </div>
    </div>
  )
}

export default Home