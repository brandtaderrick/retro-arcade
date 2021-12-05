//import React from 'react'
import { useState, useEffect } from 'react';
import Header from "./Header"
import UserStatsContainer from "./UserStatsContainer"
import GameTabs from "./GameTabs"

const UserStatsPage = () => {

    var [globalStats, setGlobalStats] = useState(null)
    var [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      fetch('/userhighscores', {
        method: "post",
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then((json) => setGlobalStats(json))
    }, []) 

    
    useEffect(()=> {
      setIsLoading(false)
    }, [globalStats])

      const WaitForData = (property) => {

        if(property.pageIsLoading){
          return <> <Header /> <div>Loading...</div></>
        }
        else if(!property.pageIsLoading){
          return <> <Header /> <UserStatsContainer stats={globalStats}/> </>
        }
      }

    return (
        <div>
            {/* <Header />
            <UserStatsContainer stats={globalStats}/> */}
            <WaitForData pageIsLoading={isLoading && globalStats} />
        </div>
    )
}

export default UserStatsPage
