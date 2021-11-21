// import React from 'react'
import { useEffect, useState } from 'react';

const AxiosTester = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("/hello").then((res) => res.json()).then((data) => setData(data.message))
        console.log(data)
      }, [])

    return (
        <div>
            <p>{data ? {data}: "TESTING"}</p>
        </div>
    )
}

export default AxiosTester
