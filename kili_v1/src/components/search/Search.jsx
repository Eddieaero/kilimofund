import React from "react";

// imported icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'




const Search = () => {
    return(
        <div className="search container section">
            <div className="sectionContainer grid">

                <div className="btns flex">

                    <div className="singleBtn">
                        <span>economy</span>
                    </div>

                    <div className="singleBtn">
                        <span>Business Class</span>
                    </div>

                    <div className="singleBtn">
                        <span>First Class</span>
                    </div>


                    {/* single input to the user */}
                    <div className="searchInputs flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <HiOutlineLocationMarker className='icon'/>
                            </div>
                            <div className="texts">
                                <h4>location</h4>
                                <input type="text" placeholder="where do you want to go?"/>
                            </div>
                        </div>
                    </div>

                    <div className="searchInputs flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RiAccountPinCircleLine className='icon'/>
                            </div>
                            <div className="texts">
                                <h4>Travelers</h4>
                                <input type="text" placeholder="add guests"/>
                            </div>
                        </div>
                    </div>

                    <div className="searchInputs flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalender className='icon'/>
                            </div>
                            <div className="texts">
                                <h4>Check in</h4>
                                <input type="text" placeholder="add date"/>
                            </div>
                        </div>
                    </div>

                    <div className="searchInputs flex">
                        <div className="singleInput flex">
                            <div className="iconDiv">
                                <RxCalender className='icon'/>
                            </div>
                            <div className="texts">
                                <h4>Check out</h4>
                                <input type="text" placeholder="add date"/>
                            </div>
                        </div>
                    </div>

                    <button className="btn btnBlock flex ">search flight</button>
                </div>
            </div>
            
        </div>
    )
}

export default Search;