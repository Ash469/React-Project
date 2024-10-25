import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
// import React,{useState} from 'react'

function App() {
  const [mode,setMode]= useState('light');
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      <Navbar title="Ayush" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      {/* <About/> */}
      <TextFrom heading="Enter Text To Analyze"  mode={mode}></TextFrom>
      </div>
    </>
  );
}

export default App;
