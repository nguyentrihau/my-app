//tsrafce

import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProducModel } from '../redux/ProductReducer/productReducer'

type Props = {
    product:ProducModel
}

const ProductCard = (props: Props) => {
    const {product}=props;
  return (
    <div className='card'>
        <img src={product.image} alt="" />
        <div className="card-body">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <NavLink to={`/detail/${product.id}`}/>
        </div>
    </div>
  )
}

export default ProductCard