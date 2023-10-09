import React from "react";
import "./sidebar.scss";
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';



const Sidebar = () => {
    return (
        <div className="sidebar"> 
            <div className="top">
                <span className="logo"> kilimoFund</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <li>
                        <SpaceDashboardRoundedIcon/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <PersonRoundedIcon/>
                        <span>Users</span>
                    </li>
                    <li>
                        <CategoryRoundedIcon/>
                        <span>Products</span>
                    </li>
                    <li>
                        <GradingRoundedIcon/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingRoundedIcon/>
                        <span>Delivery</span>
                    </li>
                    <li>
                        <span>Stats</span>
                    </li>
                    <li>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <span>System Health</span>
                    </li>
                    <li>
                        <span>Logs</span>
                    </li>
                    <li>
                        <span>Settings</span>
                    </li>
                    <li>
                        <span>Profile</span>
                    </li>
                    <li>
                        <span>Log out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}


export default Sidebar