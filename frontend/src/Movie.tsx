/* eslint-disable prettier/prettier */
// This is my movie database because I copied and pasted somethings 
// to make it look nicer and add a navigation page I disabled prettier. 
import { useState } from 'react';
import data from './MovieData.json';
import{ useNavigate } from 'react-router-dom'
const mds = data.MovieData;
function MovieList() {
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
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Cateogry</th>
            </tr>
          </thead>
          <tbody>
            {mds.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
export default MovieList;
