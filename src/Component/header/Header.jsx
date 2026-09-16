import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


export const Header = () => {
  return (
    <div className="header_OuterContainer">
        <div className="header_container">
            <div className="header_left">
                <ul>
                    <li><img 
                    className="img" 
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                    alt="Netflix Logo"
                    /></li>
                    <li>Home</li>
                    <li>Tvshow</li>
                    <li>Movie</li>
                    <li>Latest</li>
                    <li>Mylist</li>
                    <li>Browse by languages</li>
                </ul>
            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon /></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxIcon /></li>
                    <li><ArrowDropDownIcon /></li>
                </ul> 
            </div>
        </div>
    </div>
)
}


