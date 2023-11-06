import React from 'react'
import Product from './Product.jsx'
import MetaData from '../MetaData.jsx'


const products = [
  {
  name:"HP (2023) Intel Core i3 12th Gen ",
  images:[{url:"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/r/m/u/-original-imaguefzxjsqxgga.jpeg?q=70"}],
  price:"38,000",
  description: "(8 GB/512 GB SSD)",
  _id:"abhishek"
  },
  {
    name:"HP 255 G9 840T7PA Athlon ",
    images:[{url:"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/c/u/a/255-g8-notebook-hp-original-imagjhbj4jf3pjdy.jpeg?q=70"}],
    price:"18,000",
    description: "HP 255 G9 840T7PA Athlon Dual Core 3050U - (4 GB/256 GB SSD/DOS) 255 G8 Thin and Light Laptop  (15.6 Inch, Jet Black, 2.5 Kg)",
    _id:"abhishek"
  },
    {
      name:"HP 2023 Athlon Dual Core 3050U ",
      images:[{url:"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/5/6/i/-original-imaggshd5zgfe8ev.jpeg?q=70"}],
      price:"38,000",
      description: "HP 2023 Athlon Dual Core 3050U - (8 GB/512 GB SSD/Windows 11 Home) 15s-ey1509AU Thin and Light Laptop  (15.6 Inch, Natural Silver, 1.69 Kg, With MS Office)",
      _id:"abhishek"
    },
      {
        name:"HP Victus Core i5 12th Gen",
        images:[{url:"https://rukminim2.flixcart.com/image/416/416/xif0q/computer/8/i/j/-original-imagthcbgurdzwuc.jpeg?q=70"}],
        price:"58,900",
        description: "HP Victus Core i5 12th Gen 12450H - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/NVIDIA GeForce RTX 2050/50 TGP) 15-fa1132TX Gaming Laptop  (15.6 inch, Performance Blue, 2.37 Kg, With MS Office)",
        _id:"abhishek"
    }

]

function Home() {
  return (
<section class="text-gray-600 body-font xl:mx-16 ">
  <MetaData title="metadata title"/> 
  <div className='flex items-center justify-center flex-col'><h1 className=' border-b inline-block 
  mt-8 border-black p-2'>Featured Products</h1></div>
  <br />
     <Product product={products[0]}/>
     <Product product={products[1]}/>
     <Product product={products[2]}/>
     <Product product={products[0]}/>
     <Product product={products[2]}/>
     <Product product={products[3]}/>
     <Product product={products[1]}/>
     <Product product={products[0]}/>
</section>
  )
}

export default Home