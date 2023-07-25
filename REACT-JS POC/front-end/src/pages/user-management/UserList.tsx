import * as React from 'react';
import './userList.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { UserType } from '../../dataTypes/UserType';
import List from '../../components/list/List';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  { field: 'name', headerName: 'User', width: 180 },
  { field: 'emailId', headerName: 'Email Id', width: 260 },
  { field: 'role', headerName: 'Role', width: 180 },
  {
    field: 'status',
    headerName: 'Status',
    width: 180,
    renderCell: (params: any) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    }
  },

  {
    field: 'actions', headerName: 'Actions', width: 170, renderCell: (params: any) => {
      return (
        <>
          <EditCalendarIcon className='icon' onClick = {(e: any) => onButtonClick(e, params.row)}>Delete</EditCalendarIcon>
          <DeleteIcon className='icon' onClick = {(e: any) => onButtonClick(e, params.row)}>Delete</DeleteIcon>
        </>

      );
    }
  }
];

const onButtonClick = (e: any, row: any) => {
  e.stopPropagation();
};

const rows: UserType[] = [
  {
    id: 1,
    name: 'Michael Scott',
    emailId: 'michael.scott@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: ''
  },
  {
    id: 2,
    name: 'Jane M',
    emailId: 'jane.m@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: ''
  },
  {
    id: 3,
    name: 'Michael Scott',
    emailId: 'michael.scott@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: ''
  },
  {
    id: 4,
    name: 'Jane Dave',
    emailId: 'jane.d@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: 'Edit/ Delete'
  },
  {
    id: 5,
    name: 'Michael Scott',
    emailId: 'michael.scott@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: ''
  },
  {
    id: 6,
    name: 'Jane M',
    emailId: 'jane.m@gmail.com',
    role: 'admin',
    status: 'Active',
    action: ''
  },
  {
    id: 7,
    name: 'Michael Scott',
    emailId: 'michael.scott@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: ''
  },
  {
    id: 8,
    name: 'Jane M',
    emailId: 'jane.m@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: ''
  },
  {
    id: 9,
    name: 'John Dave',
    emailId: 'john.dave@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: ''
  },
  {
    id: 10,
    name: 'Michael Scott',
    emailId: 'michael.scott@gmail.com',
    role: 'Admin',
    status: 'Active',
    action: ''
  },

];

const UserList = () => {
  return (
    <>
<div className="list">
    <List listHeader={'User Management'} rows={rows} columns={columns} />
</div>
    </>
  )
}

export default UserList