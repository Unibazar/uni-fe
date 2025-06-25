'use client'
import React, { useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import userImage from "/images/userImage.png"
// import { useDispatch } from 'react-redux';
// import { loadUser } from '@/redux/slice/userSlice'
import { useLocation } from 'react-router-dom';


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useLocation();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  // const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    // localStorage.removeItem('jwtToken');
    // router.push('/');
    // dispatch(loadUser());
  };

  const handleManageAccount= ()=>{
    // if(router.pathname.startsWith('/dashboard')){
    //   router.push('/dashboard/accountsettings?q=profileManage');
    // }
    // else{
    //   router.push('/dashboard');
    // }
    
  };

  return (
    <div>
        <div className='rounded-full w-8 md:w-12 h-8 md:h-12 cursor-pointer' id="basic-button" onClick={handleClick}>
          <img height={40} width={40} className='rounded-full w-full h-full object-cover' src={userImage} alt="user Image" />
        </div>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose} >
        <MenuItem onClick={()=>{handleClose(); handleManageAccount();}}>{router.pathname.startsWith('/dashboard') ? "Manage Account":"Dashboard"}</MenuItem>
        <MenuItem onClick={()=>{handleClose(); handleLogout();}}>Logout</MenuItem>
      </Menu>
    </div>
  );
}