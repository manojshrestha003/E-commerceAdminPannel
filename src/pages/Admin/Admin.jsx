import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/SIdebar/Sidebar'
import { Routes,Route } from 'react-router-dom'
import Addproduct from '../../Components/Addproducts/Addproduct'
import Listproduct from '../../Components/ListProduct/Listproduct'

const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
      <Routes>
        <Route path = '/addproduct' element = {<Addproduct></Addproduct>}/>
        <Route path = '/listproduct' element = {<Listproduct></Listproduct>}/>
      </Routes>

      
    </div>
  )
}

export default Admin
