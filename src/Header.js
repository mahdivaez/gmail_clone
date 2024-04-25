import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';


const Header = () => {
  return (
    <div className='header'>
      <div className="header_left">
        <IconButton>
          <MenuIcon />  
        </IconButton>
        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png" alt="" />

      </div>
      <div className="header_middle">
          <SearchIcon/>
          <input placeholder='Search mail' type="text" />
          <ArrowDropDownIcon className='header__inputCaret'/>
      </div>
      <div className="header_right">
          <IconButton>
            <AppsIcon/>
          </IconButton>
          <IconButton>
            <SettingsIcon/>
          </IconButton>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <Avatar/>
      </div>
    </div>
  )
}

export default Header