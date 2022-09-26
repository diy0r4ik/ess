import React, { Component } from 'react'
import logo from '../img/logo.jpg';

import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsHandbag} from 'react-icons/bs'
import '../css/Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Navbar extends Component {
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
            <input placeholder='Поиск товаров по коду......'></input>
          </div>
          <div className='Nav_search'>
          </div>
          <div className='Nav_right'>
            <div className='user'>
              <AiOutlineUser className='icon'/>
              <p>Вход</p>
            </div>
            <div className='user'>
              <AiOutlineHeart className='icon'/>
              <p>Избранные</p>
            </div>
            <div className='user'>
              <BsHandbag className='icon'/>
              <p>Корзина</p>
            </div>
          </div>
        </div>
        <div className='Menu'>
          <select>
            <option>Каталог продукции</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
            <option>Модульные автоматические выключатели</option>
          </select>
          <h5 className='#'>О компании</h5>
          <h5 className='#'>Связаться с нами</h5>
        </div>
      </div>
    )
  }
}
