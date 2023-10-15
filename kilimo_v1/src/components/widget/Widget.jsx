import React from "react";
import  "./widget.scss";
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded';



const Widget = ({type}) => {
    let data;
    const amount = 100
    const diff = 20





    switch(type){
        case "user":
            data = {
                title: "USERS",
                // counter: "201",
                isMoney: false,
                link: "See all users",
                // percentage: "20%",
                icon: <PersonRoundedIcon className="icon"/>
            }
            break;

            case "order":
            data = {
                title: "ORDERS",
                // counter: "201",
                isMoney: false,
                link: "View all orders",
                // percentage: "20%",
                icon: <ShoppingCartRoundedIcon className="icon"/>
            }
            break;

            case "earning":
            data = {
                title: "EARNINGS",
                // counter: "201",
                isMoney: false,
                link: "View all orders",
                // percentage: "20%",
                icon: <MonetizationOnRoundedIcon className="icon"/>
            }
            break;

            case "balance":
            data = {
                title: "BALANCE",
                // counter: "201",
                isMoney: true,
                link: "See details  ",
                // percentage: "20%",
                icon: <AccountBalanceWalletRoundedIcon className="icon"/>
            }
            break;
            
            default:
                break;
        }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"} {amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpRoundedIcon/>
                    {diff} %
                </div>
                    {data.icon}
            </div>
        </div>
    )

}





export default Widget