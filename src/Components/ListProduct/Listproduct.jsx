import React, { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cross_icon.png'
const Listproduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () =>{
    await fetch('http://localhost:4000/allproducts').then((res)=>res.json())
    .then((data)=>{setAllProducts(data)});
  }
  useEffect(()=>{
    fetchInfo();
  }, [])
  const removeProduct =async(id)=>{
    await fetch('http://localhost:4000/removeproduct',{
      method: 'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo()
  }
  return (
    <div className='list-product'>
      
     <h1>All products list </h1>
     <div className="lsitProduct-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Old Price</p>
      <p>New Price</p>
      <p>Category</p>
      <p>Remove</p>
     </div>
     <div className="lsit-product-allProduct">
      <hr />
      {allProducts.map((product, index)=>{
        return <><div key={index} className="lsitProduct-format-main listproduct-format">
          <img className='listproduct-product-icon ' src={product.image} alt="" />
          <p>{product.name}</p>
          <p>${product.old_price}</p>
          <p>${product.new_price}</p>
          <p>{product.category}</p>
          <img onClick={()=>{removeProduct(product.id)}} src={cross_icon} alt="" className='listproduct-remove-icon' />

        </div>
        <hr />
        </>
      })}

     </div>
    </div>
  )
}

export default Listproduct
