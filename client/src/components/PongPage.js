// import React from 'react'
import Header from "./Header"
import PongContainer from "./PongContainer"
import {Helmet} from "react-helmet"

const PongPage = () => {
    return (
        <div>
            <Helmet>
                <script async src="./pong.js">TEST</script>
            </Helmet>
            <Header />
        </div>
    )
}

export default PongPage
