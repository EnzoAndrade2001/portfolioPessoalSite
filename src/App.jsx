import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from "./components/Header"; // Importa o Header
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header /> 
     <Hero/>
     <Projects />
    </>
  );
}

export default App;









