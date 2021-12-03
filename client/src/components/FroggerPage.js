// import React from 'react'
import { useState } from "react"
import Header from "./Header"
import AxiosTester from "./AxiosTester"
const FroggerPage = ({buttonText}) => {

    const userStatsLink = "/userStats"
    const loginLink = "/login"
    var  [btnText, setBtnText] = useState(buttonText)

    return (
        <div>
            <Header displayButton={true} pLink={localStorage.getItem("userName") ? userStatsLink : loginLink} buttonText={btnText} />
        </div>
    )
}

export default FroggerPage
