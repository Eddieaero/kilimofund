// import React from "react";
import './top.scss';


import {BiSearchAlt} from "react-icons/bi";

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
            </div>
        </div>
    )
}




export default Top