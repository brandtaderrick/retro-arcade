//import React from 'react'
import { useState, useEffect } from 'react';
import Header from "./Header"
import UserStatsContainer from "./UserStatsContainer"
import GameTabs from "./GameTabs"

const UserStatsPage = () => {

    var [dataReceived, setDataReceived] = useState()
    var [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      fetch('/userhighscores', {
        method: "post",
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json())
      .then(json => setDataReceived(json))
      .then(() => setIsLoading(false))

      console.log("dataReceived:", dataReceived)
    }, []) 

    // useEffect is the only hook function that can cause re-render on variable change

      const WaitForData = (property) => {

        if(property.pageIsLoading){
          return <> <Header /> <div>Loading...</div></>
        }
        else if(!property.pageIsLoading){
        console.log("inIsLoading if statement", isLoading)
        return <> <Header /> <UserStatsContainer stats={dataReceived}/></>
        }
      }

    return (
        <div>
            <WaitForData pageIsLoading={isLoading}/>
        </div>
    )
}

export default UserStatsPage
