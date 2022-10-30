import React, { Component } from 'react'
import {BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Dashboard from './pages/js/Dashboard'
import Navbar from './pages/js/Navbar'
import Footer from './pages/js/Footer'
import Category from './pages/js/Category'
import Catalog from './pages/js/Catalog'
import Ordered from './pages/js/Ordered'
import Fault from './pages/js/Fault'

export default class App extends Component {
  render() {
    return (



      
      <div>

      {/* <Navbar/>

      {this.state.show?( 
        <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/category" element={<Category />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/ordered" element={<Ordered/>} />
            </Routes>
        </Router>
        ):(
        <div>
        </div>
      
      )}

      <Footer/> */}

        <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/ordered" element={<Ordered/>} />
          <Route path="/fault" element={<Fault/>} />
        
      </Routes>
    </BrowserRouter>
        <Footer/>
      </div>
    )
  }
}
