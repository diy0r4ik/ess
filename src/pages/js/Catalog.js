import React, { Component } from 'react'
import vikulchatel from '../img/vikulchatel.jpg'

import '../css/Catalog.css'
export default class Catalog extends Component {
  render() {
    return (
      <div className='Catalog'>
        <div className='where_you'>
            <a href='#!'><p>Главная /</p></a>
            <a href='#!'><p>  qayerdir</p></a>
        </div>
        <h1 className='category_name'>Пускатели электромагнитные, дополнительные устройства и запчасти</h1>
        <section>
            <div className='catalog_main'>
                <div className='catalog_left'>
                    <form>
                        <p>metki</p>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label>
                    </form>
                    <form>
                        <p>metki</p>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label>
                    </form>
                    <form>
                        <p>metki</p>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label> <br/>
                        <label><input type="checkbox" id="vehicle1" /> <span className='checkbox'></span> Хит продаж</label>
                    </form>       
                </div>
                <div className='catalog_right'>
                    <h1>Под категории</h1>
                    <div className='catalog_categoty'>
                        <div className='catalog_categoty_card'>
                            {/* <img src={}/> */}
                            <p></p>
                        </div>
                    </div>
                    <div className='catalog_cards2'>
                        <div className='catalog_card2'>
                            <img src={vikulchatel}/>
                            <p>Код: 3518</p> <br/>
                            <p>В наличии</p> <br/>
                            <p>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</p>
                            <div className='catalog_card_b'>
                                <p>678 000 сум</p>
                                <p>В КОРЗИНУ</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>            
        </section>    

      </div>
    )
  }
}
