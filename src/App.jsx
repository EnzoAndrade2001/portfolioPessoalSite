import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from "./components/Header"; // Importa o Header
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="relative">

  
    <Navbar />
     <Header /> 
     <Hero/>
     <Projects />
     <Skills />
     <Contact/>
     <Footer/>
     </div>
  );
}

export default App;









