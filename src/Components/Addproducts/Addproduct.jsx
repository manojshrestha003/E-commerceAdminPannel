import React from 'react'
import './Addproduct.css'

const Addproduct = () => {
  return (
    <div className='Add-product'>
      <div className="addproducts-itemfeild">
        <p>Product Title</p>
        <input type="text" name = 'name' placeholder='Type here' />
      </div>
      <div className="adproduct-price">
        <div className="addproduct-item-feilds">
          <p>Price</p>
          <input type="text" name='old-price' placeholder='Type Here'/>
        </div>
        <div className="addproduct-item-feilds">
          <p>Offer price</p>
          <input type="text" name='new-price' placeholder='Type Here'/>
        </div>
      </div>
      <div className="addproduct-itemfeild">
        <p>Product Category</p>
        <select name="category" className='add-product-selector'>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
    </div>
  )
}

export default Addproduct
