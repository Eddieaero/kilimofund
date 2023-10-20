import React from "react";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import CardBoard from "../../components/card-body/CardBoard";




const Home = () => {
    return (
        <div className="home">
           <Sidebar/>
           <div className="homeContainer">
             <Navbar/>
           
             <div className="widgets">
                  {/* <div className="cardboard">
                    <CardBoard/>
                  </div> */}
                <Widget type="totalLoans" />
                <Widget type="Balance" />
                <Widget type="Applications" />
                <Widget type="Approved" />
             </div>
           </div>
        </div>
    )
}

export default Home






































