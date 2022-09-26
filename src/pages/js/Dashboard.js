import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
export default class Dashboard extends Component {
  render() {
    return (
      <div>
 <Carousel>
      <Carousel.Item interval={1000}>
        <div className='Slide'>
          <div className='Slide_left'>
            <h3>invectori</h3>
            <h1>Delixe</h1>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybunim,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'></div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <div className='Slide'>
          <div className='Slide_left'>
            <h3>invectori</h3>
            <h1>Delixe</h1>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybunim,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='Slide'>
          <div className='Slide_left'>
            <h3>invectori</h3>
            <h1>Delixe</h1>
            <p>gbhukjilkopl[kojiugyttyhujiokpgyftdtyuhjkjhugyftdrhjkqwzexrctvybunim,.zsxdcfvgbhnjmio,p.zxdcftvgybuhnjimk,.zxrdctfvygbuhnijm,xctvybuynm,</p>
            <button> Подробнее </button>
          </div>
          <div className='Slide_right'></div>
        </div>

      </Carousel.Item>
    </Carousel>
      </div>
    )
  }
}
