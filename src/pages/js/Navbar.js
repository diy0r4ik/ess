import React, { Component } from 'react'
import logo from '../img/logo.jpg';

import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsHandbag, BsSearch} from 'react-icons/bs'
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
            <div className='Input_a'>
              <input placeholder='Поиск товаров, категорий......'></input>
              <BsSearch/>
            </div>
            <div className='Input_a'>
              <input placeholder='Поиск товаров по коду......'></input>
              <BsSearch/>

            </div>
          </div>
          <div className='Nav_right'>
            <div className='user_icons'>
              <div className='user'>
              <AiOutlineUser className='icon'/>
              <p>Вход</p>
              </div>
            </div>
            <div className='user_icons'>
              <div className='user'>
              <AiOutlineHeart className='icon'/>
              <p>Избранные</p>
              </div>
            </div>

            <div className='user_icons'>
              <div className='user'>
              <BsHandbag className='icon'/>
              <p>Корзина</p>
              </div>
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
