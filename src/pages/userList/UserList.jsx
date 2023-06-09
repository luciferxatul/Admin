import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline, EditOutlined } from '@mui/icons-material';
import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter( (item) => item.id !== id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'user', headerName: 'User', width: 200, renderCell: (params) =>{
      return (
        <div className='userListUser'>
          <img className='userListImg' src={params.row.avatar} alt="" />
          {params.row.username}
        </div>
      )
    } },
    { field: 'email', headerName: 'Email', width: 300 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell : (params) =>{
        return(
          <>
            <Link to={"/user/" + params.row.id}>
              <EditOutlined className='userListEdit' />
            </Link>
            
            <DeleteOutline className="userListDelete" onClick={()=>{handleDelete(params.row.id)}} />
          </>
        )
      }
    },
  ];
  
  

  return (
    <div className='userList'>
       <DataGrid
        rows={data}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={3}
        checkboxSelection
      />
    </div>
  )
}
