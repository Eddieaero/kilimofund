





import React from "react";
import "./widget.scss";
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import InsertChartRoundedIcon from '@mui/icons-material/InsertChartRounded';

const Widget = ({ type }) => {
    let data;
    const amount = 100; // Adjusted for the loan context
    const diff = 15; // Adjusted for the loan context

    switch(type) {
        case "totalLoans":
            data = {
                title: "Loans",
                isMoney: true,
                link: "View Details",
                icon: <MonetizationOnRoundedIcon className="icon" 
                style={{
                    color:"crimson", 
                    background: "rgba(255, 0, 0, 0.2)"}}/>
            }
            break;

        case "Balance":
            data = {
                title: "Balance",
                isMoney: true,
                link: "View Details",
                icon: <AccountBalanceRoundedIcon className="icon"
                style={{
                    color:"goldenrod", 
                    background: "rgba(218, 165, 32, 0.2)"}}/>
            }
            break;

        case "Applications":
            data = {
                title: "Applications",
                isMoney: false,
                link: "View All Applications",
                icon: <CreditCardRoundedIcon className="icon"
                style={{
                    color:"green", 
                    background: "rgba(0, 128, 0, 0.2)"}}/>
            }
            break;

        case "Approved":
            data = {
                title: "Approved",
                isMoney: false,
                link: "View Statistics",
                icon: <InsertChartRoundedIcon className="icon"
                style={{
                    color:"purple", 
                    background: "rgba(128, 0, 128, 0.2)"}}/>
            }
            break;

        default:
            break;
    }

    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className={`percentage ${diff >= 0 ? 'positive' : 'negative'}`}>
                    {diff >= 0 ? '+' : '-'}{Math.abs(diff)}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget;

