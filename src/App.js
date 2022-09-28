import React, { Component } from 'react'
import Dashboard from './pages/js/Dashboard'
import Navbar from './pages/js/Navbar'
import Footer from './pages/js/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Dashboard/> 
        <Footer/>
      </div>
    )
  }
}
