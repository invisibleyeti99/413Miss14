import React from 'react';
/* eslint-disable prettier/prettier */
//This is my podcast page I tried to add basic boot strap to make it look nicer.
import { useNavigate } from 'react-router-dom';
function Podcast(props: any) {
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
        <h1 className="navbar-brand text-white">Navbar</h1>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav- item active">
              <button className="btn btn-primary" onClick={gotToHome}>
                Home
              </button>
            </li>
            <li className="nav-item active">
              <button className="btn btn-primary" onClick={goToSecondsComp}>
                Podcast
              </button>
            </li>
            <li className="nav- item active">
              <button className="btn btn-primary" onClick={gotToFirstComp}>
                Movie Database
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="align-self-center">Bacon Sale Podcast</h1>
      <p>
        {' '}
        This is the Bacon Sale Podcast full of fun times and good laughs you
        should visit it. Click <a href="https://baconsale.com/">here</a> for the
        Podcast
      </p>
    </>
  );
}

export default Podcast;
