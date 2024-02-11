import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navBar';
import News from './components/news';

export default class App extends Component {
  render() {
    return(
    <>
    <Navbar/>
    <News/>
    </>

      )
  }
}
