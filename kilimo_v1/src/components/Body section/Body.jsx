// import React from "react";
import "./body.scss";
import Top from './Top section/Top.jsx';
import Listing from './Listing section/Listing.jsx';
import Activity from './Activity section/Activity.jsx';

const Body = () => {
    return(
        <div className="mainContent">
            <Top/>

            <div className="bottom flex">
                <Listing/>
                <Activity/>
            </div>
        </div>
    )
}




export default Body