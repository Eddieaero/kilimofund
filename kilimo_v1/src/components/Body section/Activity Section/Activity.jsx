// import React from "react";
import './activity.scss';



// imported icons========>
import {BsArrowRightShort} from "react-icons/bs";

// imported images================>
import user1 from "../../../assets/8380015.jpg";

const Activity = () => {
    return(
        <div className="activitySection">
            <div className="heading flex">
                <h1>Recent Activity</h1>
                <button className="btn flex">
                    See All
                    <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer grid">
                <div className="singleCustomer flex">
                    <img src={user1} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user1} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user1} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user1} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

                <div className="singleCustomer flex">
                    <img src={user1} alt="Customer Image"/>
                    <div className="customerDetails">
                        <span className="name">Ola Martha</span>
                        <small>Ordered a new plant</small>
                    </div>
                    <div className="duration">
                        2 min ago
                    </div>
                </div>

            </div>
        </div>
    )
}




export default Activity