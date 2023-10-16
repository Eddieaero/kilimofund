import React from "react";
import "./navbar.scss";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import FullscreenExitRoundedIcon from '@mui/icons-material/FullscreenExitRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import ListRoundedIcon from '@mui/icons-material/ListRounded';
import avatar from "../../assets/avatar.jpeg";






const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchRoundedIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageRoundedIcon className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeRoundedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitRoundedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneRoundedIcon className="icon"/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ListRoundedIcon className="icon"/>
                    </div>
                    <div className="item">
                        <img
                            src={avatar}
                            alt="profile"
                            className="avatar"/>
                    </div>

                </div>
            </div>
        </div>
    )
}


export default Navbar