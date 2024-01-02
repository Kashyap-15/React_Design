import React from 'react'
import "./App.css"
import Topbar from './Components/Topbar/Topbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserList from './Pages/User/UserList'
import UserPage from './Pages/UserPage/UserPage'
import NewUser from './Pages/NewUser/NewUser'
import ProductList from './Pages/ProductList/ProductList'
import Product from './Pages/Product/Product'
import NewProduct from './Pages/NewProduct/NewProduct'

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Topbar/>
      <div className="container">
        <Sidebar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/user' element={<UserList/>}></Route>
            <Route path='/user/:userId' element={<UserPage/>}></Route>
            <Route path='/newUser' element={<NewUser/>}></Route>
            <Route path='/product' element={<ProductList/>}></Route>
            <Route path='/product/:productId' element={<Product/>}></Route>
            <Route path='/newProduct' element={<NewProduct/>}></Route>
          </Routes>
      </div>
        </BrowserRouter>
    </>
  )
}
