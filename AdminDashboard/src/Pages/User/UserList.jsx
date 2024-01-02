import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import "./UserList.css"
import { DeleteOutline } from '@mui/icons-material';
import { UserRows } from '../../DummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState(UserRows)

  function Delhandler(index) {
    console.log("del");
    setData(data.filter((item) => {
      return item.id !== index
    }))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user', headerName: 'User', width: 250, renderCell: (params) => {
        return (
          <div className='userListImg'>
            <img className='userImage' src={params.row.avtar} alt="" />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email Address', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'transactions',
      headerName: 'Transactions',
      width: 150,
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 170,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListButton">Edit</button>
            </Link>
            <DeleteOutline onClick={() => Delhandler(params.row.id)} className='userListDelButton' />
          </>
        )
      }
    },

  ];


  return (
    <div className='userList'>
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
