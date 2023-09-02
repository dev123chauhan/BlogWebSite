import React from 'react';
import {  Route,Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog';
import Home from './Pages/Home';

const App = () => {
  return (
    <div className='container'>
    
      <Routes>
        <Route  exact path='/' element=<Home/> />
        <Route path='/blog/:id' element=<Blog/> />
        <Route to='/'/>
      </Routes>
    </div>
  );
};

export default App;
