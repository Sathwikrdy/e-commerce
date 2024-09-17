import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import remove_icon from '../../assets/remove_icon.png'

const Listproduct = () => {

  const [allproducts,setAllproducts] = useState([]);

  const fetchInfo = async()=>{
    await fetch('http://localhost:5000/allproducts')
    .then((res)=>res.json())
    .then((data)=>{setAllproducts});
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async(id)=>{
    await fetch('http://localhost:5000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list_product'>
        <h1>ALL PRODUCTS LIST</h1>
        <div className="list_products_main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New Price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="list_products_allproducts">
          <hr />
          {allproducts.map((product,index)=>{
            return <><div key={index} className="list_products_format_main">
              <img src={product.image} alt="" className="list_product_icon" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{remove_product(product.id)}} src={remove_icon} alt="" className="remove_icon" />
            </div>
            <hr />
            </>
          })}
        </div>
    </div>
  )
}

export default Listproduct