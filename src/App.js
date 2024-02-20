import './App.css';
import React, { Component } from 'react'
import Navbar from './components/navBar';
import News from './components/news';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12

  state={
    progress:0
  }

  setprogress = (progress)=>{
  this.setState({progress:progress})
  }

  render() {
    return (
      <>
        <Router>
          <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          
          <Routes>
            <Route exact  path="/" element={<News setprogress = {this.setprogress} key="general" pageSize={this.pageSize} category={"general"} />} />
            <Route exact  path="/business" element={<News setprogress = {this.setprogress} key="business" pageSize={this.pageSize} category={"business"} />} />
            <Route exact  path="/entertainment" element={<News setprogress = {this.setprogress} key="entertainment" pageSize={this.pageSize} category={"entertainment"} />} />
            <Route exact  path="/general" element={<News setprogress = {this.setprogress} key="general" pageSize={this.pageSize} category={"general"} />} />
            <Route exact  path="/health" element={<News setprogress = {this.setprogress} key="health " pageSize={this.pageSize} category={"health"} />} />
            <Route exact  path="/science" element={<News setprogress = {this.setprogress} key="science" pageSize={this.pageSize} category={"science"} />} />
            <Route exact  path="/sports" element={<News setprogress = {this.setprogress} key="sports" pageSize={this.pageSize} category={"sports"} />} />
            <Route exact  path="/technology" element={<News setprogress = {this.setprogress} key="technology" pageSize={this.pageSize} category={"technology"} />} />    </Routes>
        </Router>
      </>

    )
  }
}
