import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
import Chart from '../../Components/Chart/Chart'
import { productdata } from '../../DummyData'
import { UploadFileOutlined } from '@mui/icons-material'

export default function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to={"/newProduct"}>
          <button className='productAddButton'> Create </button>
        </Link>
      </div>
      <div className="productInfoContainer">
        <div className="productSalesContainer">
          <Chart datas={productdata} title={"Sales"} datakey={"sales"} />
        </div>
        <div className="productDetail">
          <div className="productdiv">
            <img src="\public\Assests\Airpodes.jpg" alt="" />
            <span>iPhones</span>
          </div>
          <div>
            <div className="info">
              <h4 htmlFor="">Id :</h4>
              <span>343</span>
            </div>
            <div className="info">
              <h4 htmlFor="">Sales :</h4>
              <span>2223</span>
            </div>
            <div className="info">
              <h4 htmlFor="">Active :</h4>
              <span>Yes</span>
            </div>
            <div className="info">
              <h4 htmlFor="">In Stock :</h4>
              <span>Yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productStockContainer">
        <div className="productName">
          <h3>Product Name</h3>
          <input type="text" placeholder='Apple airPodes' />
          <div className="stockoption">
            <label htmlFor="">In stock</label>
            <select name="" id="">
              <option value="0">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
          <div className="stockoption">
            <label htmlFor="">Active</label>
            <select name="" id="">
              <option value="0">Yes</option>
              <option value="0">No</option>
            </select>
          </div>
        </div>
        <div className="productupload">
          <div className="imgdiv">
            <img src="\public\Assests\Airpodes.jpg" alt="" />
            <span> <UploadFileOutlined /> </span>
          </div>
          <div>
            <button>Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}
