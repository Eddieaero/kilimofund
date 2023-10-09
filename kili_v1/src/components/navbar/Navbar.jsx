import React, {useState} from "react";
// import Navbar from "./components/navbar/navbar.jsx";

// import { SiConsul } from "react-icons/si";
// import { BsPhoneVibrate } from "react-icons/bs";
// import { AiOutlineGlobal } from "react-icons/ai";
// import { CgMenuGridO } from "react-icons/cg";




const Navbar = () => {


    // this will remove the navbar in the small width screen

    const[active, setActive] = useState(navBarMenu)
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    }

    const removeNavBar = () => {
        setActive('navBarMenu')
    }


    // this will add a background on the second navbar

    const[noBg, addBg] = useState(navBarMenu)
    const addBgColor = () => {
        if(window.scrollY >= 10){
            addBg('navBarTwo navbar_With_Bg')
        }
        else{
            addBg('navBarTwo')
        }

        window.addEventListener('scroll', addBgColor )
   
    }


    return(
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className='icon'/>
                </div>
                <div className=" none flex" >
                    <li className="flex"> <BsPhoneVibrate 
                    className='icon'/> support</li>
                    <li className="flex"> <AiOutlineGlobal
                    className='icon'/>languages</li>
                </div>
                <div className="atb flex">
                    <span>sign in </span>
                    <span>sign out </span>
                </div>
            </div>

            <div className={noBg}>
                <div className="logoDiv">
                <img src={logo}  className='logo' alt=""/>
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">Home </li>
                        <li onClick={removeNavBar} className="listItem">About </li>
                        <li onClick={removeNavBar} className="listItem">Offers </li>
                        <li onClick={removeNavBar} className="listItem">Seats </li>
                        <li onClick={removeNavBar} className="listItem">Destinations </li>
                    </ul>

                    <button className="btn flex btnOne">
                        contact
                    </button>
                </div>
                <button className="btn flex btnTwo">
                        contact
                    </button>


                <div onClick={showNavBar} className="toggleIcon">
                        {/* <CgMenuGridO className="icon"/> */}
                    </div>


            </div>
            
        </div>
    )
}

export default Navbar;