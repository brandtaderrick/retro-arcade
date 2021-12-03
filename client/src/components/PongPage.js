// import React from 'react'
import { useState } from "react"
import Header from "./Header"
import PongContainer from "./PongContainer"
import {Helmet} from "react-helmet"

const PongPage = ({buttonText}) => {

    const userStatsLink = "/userStats"
    const loginLink = "/login"
    var  [btnText, setBtnText] = useState(buttonText)

    return (
        <div>
            <Helmet>
                <script async src="./pong.js">TEST</script>
            </Helmet>
            <Header displayButton={true} pLink={localStorage.getItem("userName") ? userStatsLink : loginLink} buttonText={btnText} />
        </div>
    )
}

export default PongPage
