import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import Routes from './routes';

function App() {
  return (
    <div className="container">
      <img src ={logo} width="50" alt ="AirCnC"/> 
      <p>Neves Solution</p>

      <div className = "content">
        <Routes/>     

      </div>
    </div>
   
  );
}

export default App;
