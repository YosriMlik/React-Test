import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Nav from "./components/Nav";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import News from './components/News'
import Forme from './components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

class App extends Component {
  state = { 
    opinion : "Recommended",
    title : "Hello"
  } 

  changeTitle = (e) => {
    this.setState({
      title : e.target.value
    })      
  }

  changeColor = () => {
    var o = Math.round, r = Math.random, s = 255;
    document.getElementById('title').style.backgroundColor = 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }

  render() { 
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/form' element={<Forme />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;