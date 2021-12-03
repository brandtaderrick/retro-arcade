
// import React from 'react'
import { useState, useEffect } from 'react'
import Logo from '../assets/Images/temp_logo.png'
import Button from './Button'

const Header = ({pLink, buttonText, displayButton}) => {

    const returnLink = "/"

    const [btnText, setBtnText] = useState(buttonText);

    useEffect(() => {
        
    }, [btnText])
   
    return (
    <>
        <header className="header">
            <a href={returnLink}>
            <img src={Logo} className='site_logo' alt='logo'/>
            </a>

            <div>
                <h1 className='homepage_title'>RETRO ARCADE
                    <nav className="headerButton"> 
                        {/* <ul>
                            <li> */}
                            {displayButton ? <Button pLink={pLink} buttonText={btnText}/> : <></> }
                            {/* </li>
                        </ul> */}
                    </nav>
                </h1>
            </div>
            
        </header>
    </>
        
    )
}

export default Header


// no routing included with defaualt library