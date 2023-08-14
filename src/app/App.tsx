import React from 'react';
import logo from './../logo.svg';
import './App.css';
import AppRouter from './App.routing';
import NavbarComponent from './layout/navbar/Navbar.component';

function App() {
  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
}

export default App;
