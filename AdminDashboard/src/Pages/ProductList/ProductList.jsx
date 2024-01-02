import React, { useState } from 'react'
import "./ProductList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { ProductRows } from '../../DummyData';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const [data, setData] = useState(ProductRows)

  function Delhandler(index) {
    console.log("del");
    setData(data.filter((item) => {
      return item.id !== index
    }))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product', headerName: 'Product', width: 250, renderCell: (params) => {
        return (
          <div className='productListImg'>
            <img className='productImage' src={params.row.avtar} alt="" />
            {params.row.productname}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListButton">Edit</button>
            </Link>
            <DeleteOutline onClick={() => Delhandler(params.row.id)} className='productListDelButton' />
          </>
        )
      }
    },

  ];

  return (
    <div className='productList'>
      <div style={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={data}
          columns={columns}
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 8 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  )
}
