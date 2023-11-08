import React from 'react'
import ReactStars from "react-rating-stars-component"
import { Link } from 'react-router-dom'



function Product({product}) {


  //Options for Star Rating
const options = {
  edit:false,
  color:"rgba(20,20,20,0.1)",
  activeColor:"red",
  value:product.rating,
  isHalf:true,
  size:window.innerWidth < 600 ? 20 : 25
}

  return (
    <div className='border border-black m-4 inline-block rounded overflow-hidden  w-48 h-80 '>
      <Link className='productCard' to={product._id} key={product._id}>
        <div className='flex justify-center p-2 align-center'>
        <img src={product.images[0].url} alt={product.name} width={200} />
        </div>
        
        <div className='p-4'>
        <p className='text-sm'>{product.name}</p>
        
        <div className=''>
            <ReactStars {...options} /><span className='text-sm'>({product.numOfReviews})</span><br />
            <span> &#x20b9; {product.price}</span>
        </div>
        </div>
        
    </Link>
    </div>
    
  )
}

export default Product