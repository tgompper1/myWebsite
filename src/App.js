import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Footer from './components/Footer/Footer';
import Projects from './components/pages/Projects/Projects';
import Experience from './components/pages/Experience/Experience';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path = '/' exact component ={Home}/>
        <Route path = '/projects' component= {Projects}/>
        <Route path = '/experience' component= {Experience}/>
        <Route path = '/about' component = {About}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
