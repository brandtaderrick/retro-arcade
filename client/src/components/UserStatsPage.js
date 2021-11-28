//import React from 'react'
import { useState, useEffect } from 'react';
import Header from "./Header"
import UserStatsContainer from "./UserStatsContainer"
import GameTabs from "./GameTabs"

const UserStatsPage = () => {

    var [globalStats, setGlobalStats] = useState(
        {
          Name: ["Derrick", "Ryan", "Sam"],
         
          Rank: ["1", "2", "3"],
    
          Score:["5", "4", "3"],
        }
      )

    return (
        <div>
            <Header />
            <UserStatsContainer stats={globalStats}/>
        </div>
    )
}

export default UserStatsPage
