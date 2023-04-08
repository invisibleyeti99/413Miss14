/* eslint-disable prettier/prettier */
//This is my home page. 
import React from 'react';
import styles from './banner.module.css';
import{ useNavigate } from 'react-router-dom'
function TopBanner(props: any) {
    const navigate = useNavigate();
  
  const goToSecondsComp = () => {
  
    // This will navigate to Podcast component
    navigate('/second'); 
  };
  const gotToFirstComp = () => {
  
    // This will navigate to Movie Database component
    navigate('/first'); 
  };
  const gotToHome = () => {
  
    // This will navigate to home component
    navigate('/'); 
  };
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <h1 className="navbar-brand text-white" >Navbar</h1>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav- item active">
            <button className="btn btn-primary" onClick={gotToHome} >Home</button>
        </li>
        <li className="nav-item active">
            <button className="btn btn-primary" onClick={goToSecondsComp} >Podcast</button>
        </li>
        <li className="nav- item active">
            <button className="btn btn-primary" onClick={gotToFirstComp} >Movie Database</button>
        </li>

        </ul>
    </div>
    </nav>
        <div className="col-2">
          <img src="./JoelHiltonHeadshot.jpg" alt="" />
        </div>
        <br />
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>Joel Hilton has a database full of movies their ratings and important information about them. Also he has a podcast. Go and check it out!</h1>
        </div>
    </>
  );
}

export default TopBanner;
