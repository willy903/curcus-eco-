import React from 'react'
import './product.css'
import Item from './../../components/productItem/Item';
import all_product from '../../all_product';

const Products = () => {
  return (
    <div>
        <div className="container-b">
            <div className="items-b">
                <div className="b1">
                    <h1>Our best product</h1>
                    <p>Pure and natural, our organic turmeric powder is sourced from the best turmeric farms. It's perfect for adding a rich, earthy flavor to your culinary creations. Experience the vibrant color and incredible health benefits of this golden spice. </p>
                </div>
                <div className="item2-b">
                   {all_product.map((item,i)=>{
                    return <Item key={i} nom={item.name} img={item.image} useIT={item.useIT} price={item.new_price}/>
                   })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products