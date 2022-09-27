import React, { Component } from 'react'

import {FiPhoneCall} from 'react-icons/fi'

import invector from '../img/invector.jpg'
import vikulchatel from '../img/vikulchatel.jpg'
import NM from '../img/NM.jpg'
import avtomat from '../img/avtomat.jpg'

import '../css/Dashboard.css'
import Carousel from 'react-bootstrap/Carousel';
export default class Dashboard extends Component {
  render() {
    return (
      <div>
 <Carousel>
      <Carousel.Item interval={1000}>
        <div className='Slide'>
          <div className='Slide_left'>
            <h3> Цифровые мультиметры </h3>
            <a>Delixe</a>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm, <br/> gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'>
            <img src={invector} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='Slide'>
          <div className='Slide_left'>
            <h3> Цифровые мультиметры </h3>
            <a>Delixe</a>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm, <br/> gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'>
            <img src={invector} />
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='Slide'>
          <div className='Slide_left'>
            <h3> Цифровые мультиметры </h3>
            <a>Delixe</a>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm, <br/> gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybuni <br/> m,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'>
            <img src={invector} />
          </div>
        </div>

      </Carousel.Item>
    </Carousel>
    <div className='catalog'>
      <div className='wrapper'>
        <div className='catalog-skew'>
          <div className='section__heading header-white'>
            <h2>Наш Каталог</h2>
          </div>
          <div class="catalog__items">
              <a href="#!" class="catalog__card">         
                  <img src={vikulchatel} className="catalog__card--img"/>
                    <div class="catalog__card--link">Модульные автоматические выключатели</div>
              </a>
              <a href="#!" class="catalog__card">         
                  <img src={vikulchatel} className="catalog__card--img"/>
                    <div class="catalog__card--link">Модульные автоматические выключатели</div>
              </a>
              <a href="#!" class="catalog__card">         
                  <img src={vikulchatel} className="catalog__card--img"/>
                    <div class="catalog__card--link">Модульные автоматические выключатели</div>
              </a>
              <a href="#!" class="catalog__card">         
                  <img src={vikulchatel} className="catalog__card--img"/>
                    <div class="catalog__card--link">Модульные автоматические выключатели</div>
              </a>
              <a href="#!" class="catalog__card">         
                  <img src={vikulchatel} className="catalog__card--img"/>
                    <div class="catalog__card--link">Модульные автоматические выключатели</div>
              </a>
              <a href="#!" class="catalog__card">         
                  <img src={vikulchatel} className="catalog__card--img"/>
                    <div class="catalog__card--link">Модульные автоматические выключатели</div>
              </a>
              <a href="#!" class="catalog__card">         
                  <img src={vikulchatel} className="catalog__card--img"/>
                    <div class="catalog__card--link">Модульные автоматические выключатели</div>
              </a>
              <a href="#!" class="catalog__card">         
                  <img src={vikulchatel} className="catalog__card--img"/>
                    <div class="catalog__card--link">Модульные автоматические выключатели</div>
              </a>
          </div>
          <a href='#!' className='catalog_btn_a'>
            <div className='catalog_btn'>
              <button>Все категории</button>
            </div>
          </a>
        </div>
      </div>
      {/* <h1>Наш Каталог</h1> */}
    </div>
    <section>
      <div className='contact'>
        <div className='section__heading2 header-white2'>
            <h2>Наш Каталог</h2>
        </div>
        <div className='contact_icons'>
          <div className='contact_icon'>
            <FiPhoneCall/>
            <p>+998943048710</p>
          </div>
          <div className='contact_icon'>
            <FiPhoneCall/>
            <p>+998943048710</p>
          </div>
          <div className='contact_icon'>
            <FiPhoneCall/>
            <p>+998943048710</p>
          </div>
          <div className='contact_icon'>
            <FiPhoneCall/>
            <p>+998943048710</p>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}
