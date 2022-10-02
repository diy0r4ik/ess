import React, { Component } from 'react'
import vikulchatel from '../img/vikulchatel.jpg'
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import '../css/Catalog.css'


export default class Catalog extends Component {
    state = { liked: false };
    toggle = () => {
      let localLiked = this.state.liked;
    
      // Toggle the state variable liked
      localLiked = !localLiked;
      this.setState({ liked: localLiked });
    };
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
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                        <div className='catalog_categoty_card'>
                            <img src={vikulchatel}/>
                            <p>Контактор электромагнитный NC1</p>
                        </div>
                    </div>
                    <div className='catalog_cards2'>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

                            </div>
                        </div>
                        <div className='catalog_card2'>
                            <div className="card_like" style={{ width: "10px", fontSize: '35px' }} onClick={() => this.toggle()} > {this.state.liked === false ? ( <AiOutlineHeart /> ) : ( <AiFillHeart /> )} </div>
                            <img src={vikulchatel}/>
                            <div className='card_texts'>
                                <div className='card_texts_p'>
                                    <p>Код: 3518</p> 
                                    <p>В наличии</p>                                    
                                </div>

                            <h6>Щит пластиковый PC 350х500х190 IP65 PC 36 груп</h6>
                            <div className='catalog_card_b'>
                                <p className='card_price'>678 000 сум</p>
                                <p className='buy'>В КОРЗИНУ</p>                                
                            </div>

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
