import React, { Component } from 'react'
import logo from '../img/logo.jpg';

import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'
import '../css/Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='Navbar'>
          <div className='Nav_logo'>
            <img src={logo} alt="Logo" className="Logo" />
            <p><span>ETE</span>  products</p>
            <div className='Nav_phone'>+998(94)3048710</div>
          </div>
          
          <div className='Nav_search'>
            <input placeholder='Поиск товаров, категорий......'></input>
          </div>
          <div className='Nav_search'>
            <input placeholder='Поиск товаров по коду......'></input>
          </div>
          <div className='Nav_right'>
            <div className='user'>
              <AiOutlineUser/>
              <p>Вход</p>
            </div>
            <div className='user'>
              <AiOutlineHeart/>
              <p>Избранные</p>
            </div>
            <div className='user'>
              <BsHandbag/>
              <p>Корзина</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
