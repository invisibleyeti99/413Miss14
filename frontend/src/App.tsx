/* eslint-disable prettier/prettier */
//
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBanner from './banner';
import { BrowserRouter as Router, Routes, Route }
    from "react-router-dom";
import Movie from "./Movie";
import Podcast from "./Podcast";


function App() {
  
  return (
    //This is my routing to take us to each of the pages. 
    <Router>
      <Routes>
        <Route path="/first" element={<Movie />}/>
        <Route path="/second" element={<Podcast />}/>
        <Route path="/" element={<TopBanner />}/>
      </Routes>
    </Router>
  );
}

export default App;
