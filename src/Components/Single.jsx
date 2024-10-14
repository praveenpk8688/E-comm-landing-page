import React from 'react';
import { useParams } from 'react-router-dom';
import {laptop, mobile, tablet, tv, printer} from '../Data';
import './Css/Single.css'
// import Navbar from './Navbar';



function ProductDetails() {
    
  const { id } = useParams();
  const Allpro = [...laptop, ...mobile, ...tablet, ...tv, ...printer];
  const product = Allpro.find(p => p.id === parseFloat(id));

  if (!product) {
    return <div>Product not found</div>;
  }
  console.log(product.inStock)

  return (
    <>

        <div className='single-product'>
            <h1>{product.brand} {product.model}</h1>
            <p className='desc'> {product.description}</p>
            <p className='price'>Price: ${product.price} <strike>${1000}</strike></p>
            <h2 className='stock' style={product.instock ? {color: 'green'} : {color: 'red'}}>{product.instock ? 'In Stock' :'Out of Stock'}</h2>
            <pre className='stockCount'>{product.instock ? '' : `HurryUp! only ${product.hurryup} left`}</pre>
            <button className='buy-now'>
              BUY NOW
            </button>
      </div>
            <div className="img-container">
                
            <img className='single-img' src={product.image} alt={product.brand + ' ' + product.model} />
           
            </div>
      </>
  );
}

export default ProductDetails;
