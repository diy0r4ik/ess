import React, { Component } from 'react'
import vikulchatel from '../img/vikulchatel.jpg'


import '../css/Category.css'
export default class Category extends Component {
  render() {
    return (
      <div>
        <div className='catalog-skew'>
          <div className='section__heading header-white'>
            <h2>Наш Каталог</h2>
          </div>
          <div class="catalog__items">
            <div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div>
            <div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div>
            <div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div>
            <div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div>
            <div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div>
            <div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div>
            <div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div>
            <div className='catalog_card'>
              <img src={vikulchatel}/>
              <p>Модульные автоматические выключатели</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
