import React from 'react'
import { Box , Stack, Item, Link} from '@mui/material';
import './Navbar.css';
import {logo} from '../Assets/constants';
import SearchBar from './SearchBar'
export default function Navbar() {
  return (
    <div >
      <Stack direction="row" >
                <Link to='/'>
                <img src={logo} alt="logo"  height="45"/>
                </Link>
                <SearchBar/>
        </Stack>
    </div>
  )
}