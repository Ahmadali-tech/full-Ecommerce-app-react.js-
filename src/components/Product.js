import React, { useContext } from 'react';
import { ProductsContext } from './Showproduct';
import { CartContext } from './Cartcontext'; 
import Banner from './Banner';

const Product = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext); 

  function handleAddToCart(product) {
    dispatch({ type: 'ADD_TO_CART', payload: product, id: product.quantity });
  }

  return (
  
    <div className="container">
      <Banner />
      <div className="products">
      < div className="Product">AVAILABLE-PRODUCTS</div>
        {products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-detailed">
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
              <div className="product-status">{product.status}</div>
              <div className='product description'>{product.description}</div>
            </div>
            {product.status === 'hot' && <div className="hot" style={{ width: '20%' }}></div>}
            {product.status === 'new' && <div className="new"></div>}
            {product.status === 'left' && <div className="left"></div>}

            <div className="add" onClick={() => handleAddToCart(product)}>
              ADD-item;
            </div>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Product;
