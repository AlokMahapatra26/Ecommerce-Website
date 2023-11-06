import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import React from "react";
import Home from "./components/layout/Home/Home";


function App() {
  
  return (
    <Router>
      <Header/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
