import React from 'react'
import "./NewProduct.css"

export default function NewProduct() {
  return (
    <div className='newProduct'>
        <h1 className='newProductTitle'>New Product</h1>
        <div className="addNewProduct">
            <div className="addNewProductName">Image</div>
            <input type="file" id='file' />
        </div>
        <div className="addNewProduct">
            <div className="addNewProductName">Name</div>
            <input type="text" id='file' placeholder='Iphone' />
        </div>
        <div className="addNewProduct">
            <div className="addNewProductName">Stock</div>
            <input type="text" id='text' placeholder="123" />
        </div>
        <div className="addNewProduct">
            <div className="addNewProductName">Active</div>
            <input type="text" id='text' placeholder='Yes' />
        </div>
        <div className="addNewProduct">
            <button>Create</button>
        </div>
    </div>
  )
}
