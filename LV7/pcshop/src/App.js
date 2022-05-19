import { Tab } from 'bootstrap';
import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import  { Outlet, Link }  from "react-router-dom";

import './App.css';

function App() {
  return (
    <>
    <nav className='navigacija'>
        <Link className='btn' to="/">Početna</Link>
        <Link className='btn' to="/dodaj">Dodaj</Link>
    </nav>
    <Outlet />
    </>
  );
}

export default App;
