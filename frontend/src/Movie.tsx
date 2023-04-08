/* eslint-disable prettier/prettier */
// This is my movie database because I copied and pasted somethings 
// to make it look nicer and add a navigation page I disabled prettier. 
import { useState } from 'react';
import data from './MovieData.json';
import{ useNavigate } from 'react-router-dom'
import MovieList from './Movie/MovieList';

const mds = data.MovieData;
function MovieThing() {
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
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <MovieList/>
    </>
  );
}
export default MovieThing;
