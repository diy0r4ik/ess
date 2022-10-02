import React, { Component } from 'react'
import vikulchatel from '../img/vikulchatel.jpg'
import '../css/Ordered.css'
export default class Ordered extends Component {
  render() {
    return (
      <div>
        <div className='Ordered'>
            <div className='Ordered_nav'>
                <h1>Корзина (2 товаров)</h1>
            </div>           
            <div className='Ordered_main'>
                <div className='Ordered_left'>
                    <div className='Ordered_product'>
                        <img src={vikulchatel}/>
                        <div className='O_product_name'>
                            <p>Реле времени ST3P A-A 3 мин. (24 VDC)</p>
                            <p>Код Продукта: #514</p>
                        </div>
                        <div className='O_product_amount'>
                            <p>-</p><p className='O_P_amount'>2</p><p>+</p>
                        </div>
                        <div className='O_product_price'>
                            <p>(59 000 сум/шт.)</p>
                            <p className='O_product_price2'>59 000 сум</p>
                        </div>
                    </div>    
                    <div className='Ordered_product'>
                        <img src={vikulchatel}/>
                        <div className='O_product_name'>
                            <p>Реле времени ST3P A-A 3 мин. (24 VDC)</p>
                            <p>Код Продукта: #514</p>
                        </div>
                        <div className='O_product_amount'>
                            <p>-</p><p className='O_P_amount'>2</p><p>+</p>
                        </div>
                        <div className='O_product_price'>
                            <p>(59 000 сум/шт.)</p>
                            <p className='O_product_price2'>59 000 сум</p>
                        </div>
                    </div>    
                </div>    
                <div className='Ordered_right'>
                        
                </div>    
            </div> 
        </div>

      </div>
    )
  }
}
