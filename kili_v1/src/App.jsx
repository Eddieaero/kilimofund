import React from "react";
import home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import footer from "./components/footer/Footer";
import Search from "./components/search/Search";
import Lounge from "./components/lounge/Lounge";
import Travelers from "./components/travelers/Travelers";
import Support from "./components/support/Support";
import info from "./components/info/Info";
import Subscribers from "./components/subscribers/Subscribers";




const App = () => {

    return(
        <div>
            <Navbar/>
            <Home/>
            <Search/>
            <Support />
            <Info/>
            <Lounge/>
            <Travelers />
            <Subscribers/>
            <Footer/>    
        </div>
    ) 
}





export default App;
