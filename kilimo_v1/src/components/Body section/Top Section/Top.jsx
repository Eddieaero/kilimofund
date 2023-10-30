// import React from "react";
import './top.scss';

// imported icons========>
import {BiSearchAlt} from "react-icons/bi";
import {TbMessageCircle2} from "react-icons/tb";
import {IoIosNotificationsOutline} from "react-icons/io";
import {BsArrowRightShort, BsQuestionCircle} from "react-icons/bs";


// imported images and videos=========>
import userImage from "../../../assets/8380015.jpg"
import img1 from "../../../assets/pexels-min-an-740584.jpg";
import VideoBanner from "../../../assets/VideoBanner.mp4";





const Top = () => {
    return(
        <div className="topSection">
            <div className="headerSection flex">
                <div className="title">
                    <h1>Welcome to kilimoFund</h1>
                    <p>Hello Edson, Welcome back!</p>
                </div>

                <div className="searchBar flex">
                    <input type='text' placeholder='Search Dashboard'/>
                    <BiSearchAlt className='icon'/>
                </div>

                <div className="adminDiv flex">
                    <TbMessageCircle2 className="icon"/>
                    <IoIosNotificationsOutline className="icon"/>
                    <div className="adminImage">
                        <img src={userImage} alt='Admin Image'/>
                    </div>
                </div>
            </div>

            <div className="cardSection flex">


              <div className='rightCard flex'>
                {/* <h1>create and sell extraordinary products</h1> */}
                <h1>Elevate your Agricultural productivity</h1>
                {/* <p>The world's fast growing industry today are natural made products</p> */}
                <p>The world's fast growing industry today are natural made products</p>

                <div className='buttons flex'>
                    {/* <button className='btn'>Explore More</button> */}
                    <button className='btn'>Apply now</button>
                    {/* <button className='btn transparent'>Top Sellers</button> */}
                    <button className='btn transparent'>Top Suppliers</button>
                </div>

                <div className='videoDiv'>
                    <video src={VideoBanner} autoPlay loop muted></video>
                </div>
              </div>

              <div className="leftCard flex">
                <div className="main flex">
                    <div className="textDiv">
                        <h1>My Stats</h1>
                        
                        <div className="flex">
                            {/* <span>
                                Today <br/> <small>4 Orders</small>
                            </span> */}

                            <span>
                                This Month <br/> <small>3 Requests</small>
                            </span>
                        </div>

                        <span className='flex link'>
                            Go to my Loan <BsArrowRightShort className='icon'/>
                        </span>

                    </div>
                    
                    <div className="imgDiv">
                        <img src={img1} alt='image name'/>
                    </div>


                    {/* we will use this card later */}
                                    
                    <div className="sideBarCard">
                        <BsQuestionCircle className="icon"/>
                            <div className="cardContent">
                            <div className="circle1"></div>
                            <div className="circle2"></div>

                            <h3>Help Center</h3>
                            <p>having trouble in kilimoFund, please contact us for more questions</p>
                            <button className='btn'>Go to help center</button>
                        </div>
                    </div>
                </div>
              </div>


            </div>
        </div>
    )
}




export default Top