import React, { Component } from 'react'
import {BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Dashboard from './pages/js/Dashboard'
import Navbar from './pages/js/Navbar'
import Footer from './pages/js/Footer'
import Category from './pages/js/Category'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/category" element={<Category />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <Category/> */}
        {/* <Dashboard/>  */}
        <Footer/>
      </div>
    )
  }
}
