import React, { useState } from 'react'
import './Addproduct.css'

import upload_area from '../../assets/upload_area.svg'

const Addproduct = () => {
  const [image, setImage] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: ""
  });

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });
  };

  const addProduct = async () => {
    console.log(productDetails);
    // Logic to send data to a server
  
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image); // Assuming `image` is the file to be uploaded
  
    try {
      // Send the request to the server
      const response = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: formData,
      });
  
      // Ensure that the response is valid and convert it to JSON
      const responseData = await response.json();  // Await here to resolve the promise
  
      if (responseData.success) {
        product.image = responseData.image_url; // Assuming the server returns an image URL
        console.log(product);
      } else {
        console.error("Error: Image upload failed");
      }
    } catch (error) {
      // Handle fetch errors, e.g., network issues
      console.error('Error during product upload:', error);
    }
    await fetch('http://localhost:4000/addproduct', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type': 'application/json'
        
      },
      body: JSON.stringify(product),
    }).then((resp)=>resp.json()).then((data)=>{
      data.success?alert("product added"): alert("failed ");
    })
  };
  

  return (
    <div className='Add-product'>
      <div className="addproducts-itemfeild">
        <p>Product Title</p>
        <input 
          type="text" 
          value={productDetails.name} 
          onChange={changeHandler} 
          name="name" 
          placeholder="Type here" 
        />
      </div>
      
      <div className="adproduct-price">
        <div className="addproduct-item-feilds">
          <p>Price</p>
          <input 
            value={productDetails.old_price} 
            onChange={changeHandler} 
            type="text" 
            name="old_price" 
            placeholder="Type Here"
          />
        </div>
        
        <div className="addproduct-item-feilds">
          <p>Offer price</p>
          <input 
            value={productDetails.new_price} 
            onChange={changeHandler} 
            type="text" 
            name="new_price" 
            placeholder="Type Here"
          />
        </div>
      </div>

      <div className="addproduct-itemfeild">
        <p>Product Category</p>
        <select 
          value={productDetails.category} 
          onChange={changeHandler} 
          name="category" 
          className="add-product-selector"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>

      <div className="addproduct-Itme">
        <label htmlFor="file-input">
          <img 
            src={image ? URL.createObjectURL(image) : upload_area} 
            className="add-product-thumbnailImg" 
            alt="Upload Product" 
          />
        </label>
        <input 
          onChange={imageHandler} 
          type="file" 
          name="image" 
          id="file-input" 
          hidden 
        />
      </div>

      <button onClick={addProduct} className="addProduct-button">Add</button>
    </div>
  );
};

export default Addproduct;
