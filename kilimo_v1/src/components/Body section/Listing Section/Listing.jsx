// import React from "react";
import './listing.scss';


// imported icons=======>
import {BsArrowRightShort,BsFillHeartFill} from "react-icons/bs";
import {HiOutlineHeart}  from "react-icons/hi";

//  imported images====>
import user1 from "../../../assets/8380015.jpg";
import img1 from "../../../assets/tadb logo.jpeg";
// import img2 from "../../../assets/pexels-pixabay-52738.jpg";
import img3 from "../../../assets/pexels-thomas-brenac-599757.jpg";
// import img4 from "../../../assets/pexels-matthis-volquardsen-3793930.jpg";




const Listing = () => {
    return(
        <div className="listingSection">

            <div className="heading flex">
                {/* <h1>My listing</h1> */}
                <h1>Finance Cooperates</h1>
                <button className="btn flex">
                    See all <BsArrowRightShort className="icon"/>
                </button>
            </div>

            <div className="secContainer flex">

                <div className="singleItem">
                    <BsFillHeartFill className="icon"/>
                    <img src={img1} alt="Image Name"/>
                    {/* <h3>Annual Vince</h3> */}
                    <h3>TADB BANK</h3>
                </div>

                {/* <div className="singleItem">
                    <HiOutlineHeart className="icon"/>
                    <img src={img2} alt="Image Name"/>
                    <h3>Coffee Plant</h3>
                </div> */}

                <div className="singleItem">
                    <HiOutlineHeart className="icon"/>
                    <img src={img3} alt="Image Name"/>
                    <h3>Button Fern</h3>
                </div>

                {/* <div className="singleItem">
                    <BsFillHeartFill className="icon"/>
                    <img src={img4} alt="Image Name"/>
                    <h3>Spider Plant</h3>
                </div> */}
            </div>

            <div className="sellers flex">
                <div className="topSellers">
                    <div className="heading flex">
                        <h3>Top Suppliers</h3>
                        <button className='btn flex'>
                            See All <BsArrowRightShort className="icon"/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt='User Image'/>
                            <img src={user1} alt='User Image'/>
                            <img src={user1} alt='User Image'/>
                            <img src={user1} alt='User Image'/>
                        </div>
                        <div className="cardText">
                            <span>
                                14.556 Deals sold <br/>
                                <small>
                                    21 Suppliers <span className='date'>7 days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="featuredSellers">
                    <div className="heading flex">
                        <h3>Featured </h3>
                        <button className='btn flex'>
                            See All <BsArrowRightShort className="icon"/>
                        </button>
                    </div>

                    <div className="card flex">
                        <div className="users">
                            <img src={user1} alt='User Image'/>
                            <img src={user1} alt='User Image'/>
                            <img src={user1} alt='User Image'/>
                            <img src={user1} alt='User Image'/>
                        </div>
                        <div className="cardText">
                            <span>
                                26,556 Deals sold <br/>
                                <small>
                                    26 Sellers <span className='date'>31 days</span>
                                </small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




export default Listing