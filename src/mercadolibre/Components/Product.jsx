import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Categories } from '../../components/Categories';
import { currencyFormat } from '../../until/currencyFormat';
import { TbTruckDelivery } from 'react-icons/tb';
import searchItemService from '../actions/search-item';



export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    searchItemService.getItemById(id).then((res)=>{
      setProduct(res.item);
    })
   
  }, [id]);
  return (
    <>

      {
        product &&
        <div className="productdetail_container">
          <Categories />
          <div className="product-main">
            <img src={product.picture} alt={product.title} className="product-image" />

            <div className="product-info">
              <span className="condition-sold">
              {product.free_shipping && "Free shipping"}
                {product.free_shipping && (<TbTruckDelivery className="free-shipping" size={20}  />)} 
              
              </span>
              
              <h1 className="product-title">{product.title}</h1>
              <p className="product-price">{currencyFormat(product.price)}</p>
              <button className="buy-button">Comprar</button>
            </div>
          </div>

          <div className="product-description">
            <h2>Descripción del producto</h2>
            <p>{product.description}</p>
          </div>
        </div>
      }
    </>


  )
}
