import React from "react";
import "./sidebar.scss";
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import GradingRoundedIcon from '@mui/icons-material/GradingRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import MonitorHeartRoundedIcon from '@mui/icons-material/MonitorHeartRounded';
import ViewStreamRoundedIcon from '@mui/icons-material/ViewStreamRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';



const Sidebar = () => {
    return (
        <div className="sidebar"> 
            <div className="top">
                <span className="logo"> kilimoFund</span>
            </div>
            <hr/>
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <SpaceDashboardRoundedIcon/>
                        <span>Dashboard</span>
                    </li>

                    <p className="title">LISTS</p>
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

                    <p className="title">USEFUL</p>
                    <li>
                        <AssessmentRoundedIcon/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsRoundedIcon/>
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICES</p>
                    <li>
                        <MonitorHeartRoundedIcon/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <ViewStreamRoundedIcon/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsRoundedIcon/>
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <AccountBoxRoundedIcon/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutRoundedIcon/>
                        <span>Log out</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}


export default Sidebar