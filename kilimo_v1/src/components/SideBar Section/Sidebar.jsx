// import React from "react";
import './sidebar.scss';



// imported images
import logo from '../../assets/logo.png';


// imported icons

import { MdOutlineDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from "react-icons/md";
import { IoTrophyOutline } from "react-icons/io5";
import { VscPieChart } from "react-icons/vsc";
import { IoMdTrendingUp } from "react-icons/io";
import { BiCreditCardFront } from "react-icons/bi";
import { LiaQuestionCircle } from "react-icons/lia";
import { IoSpeedometerOutline } from "react-icons/io5";


const Sidebar = () => {
    return(
        <div className="sideBar grid">
            <div className="logoDiv flex">
                <img src={logo} alt="Image name"/>
                <h2>KilimoFund</h2>
            </div>

            <div className="menuDiv">
                <h3 className="divTitle">
                    QUICKMENU
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <IoSpeedometerOutline className="icon"/>
                            <span className="smallText">
                                Dash board
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdOutlineDeliveryDining className="icon"/>
                            <span className="smallText">
                                My orders
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdOutlineExplore className="icon"/>
                            <span className="smallText">
                                Explore
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <IoTrophyOutline className="icon"/>
                            <span className="smallText">
                                products
                            </span>
                        </a>
                    </li>



                </ul>
            </div>

            <div className="settingsDiv">
                <h3 className="divTitle">
                    SETTINGS
                </h3>
                <ul className="menuLists grid">

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <VscPieChart className="icon"/>
                            <span className="smallText">
                                charts
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <IoMdTrendingUp className="icon"/>
                            <span className="smallText">
                                Trends
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <MdOutlinePermContactCalendar className="icon"/>
                            <span className="smallText">
                                Contacts
                            </span>
                        </a>
                    </li>

                    <li className="listItem">
                        <a href="" className="menuLink flex">
                            <BiCreditCardFront className="icon"/>
                            <span className="smallText">
                                Billings
                            </span>
                        </a>
                    </li>



                </ul>
            </div>

            <div className="sideBarCard">
                <LiaQuestionCircle className="icon"/>
                <div className="cardContent">
                    <div className="circle1"></div>
                    <div className="circle2"></div>

                    <h3>Help Center</h3>
                    <p>having trouble in kilimoFund, please contact us for more questions</p>
                    <button className='btn'>Go to help center</button>
                </div>
            </div>
        </div>
        
    )
}




export default Sidebar