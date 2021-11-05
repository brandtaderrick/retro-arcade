
// import React from 'react'
import Logo from '../assets/Images/temp_logo.png'
import Button from './Button'
const Header = () => {

    
    return (
    <>
        <header className="header">
            <img src={Logo} className='site_logo' alt='logo'/>
            
            <div>
                <h1 className='homepage_title'>RETRO ARCADE</h1>
            </div>
            
         <nav>
            <ul>
                <li>
                <Button />
                </li>
            </ul>
         </nav>

        </header>
    </>
        
    )
}

export default Header
