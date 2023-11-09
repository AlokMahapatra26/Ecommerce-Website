import React from 'react'
import Product from './Product.jsx'
import MetaData from '../MetaData.jsx'
import {getProduct} from "../../../actions/productAction.js";
import {useSelector , useDispatch} from 'react-redux'
import { useEffect } from 'react';
import Loader from '../Loader/Loader';
import { useAlert } from "react-alert"


function Home() {

  const alert = useAlert();
  const dispatch = useDispatch();
  const {loading , error , product} = useSelector(state => state.products);

  useEffect(()=>{
    if(error){
      return alert.error("Error")
    }
    dispatch(getProduct())
  },[dispatch , error])

  return (
    <fragment>
{ loading ? 'loading...' : <section class="text-gray-600 body-font xl:mx-16 ">
  <MetaData title="Etronica"/> 
  <div className='flex items-center justify-center flex-col'><h1 className=' border-b inline-block 
  mt-8 border-black p-2'>Featured Products</h1></div>
  <br />
     <div className="container" id='container'>
        {product && product.map((product)=> <Product product={product} />)}
     </div>
</section>}
    </fragment>
  )
}

export default Home