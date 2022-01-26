import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { AuthContext } from "../Auth";

const NavbarComponent = () => {

    const { setLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const [isMobile, setIsMobile] = useState(false);

    const handleReg = () => {
        navigate("/register");
    }
    const handleHome = () => {
        navigate("/home");
    }
    const handleLogout = () => {
        setLogout();
    }

    return (
        <nav className={isMobile ? "mobile-nav" : "nav"}>
            <h1>Namasis</h1>
            <div className={isMobile ? "mobile-links" : "links"}>
                <button className='btn' onClick={handleHome}> Home </button>
                <button className='btn' onClick={handleReg}> Register </button>
                <button className='btn' onClick={handleLogout}> Logout </button>
            </div>
            <div className="hamburger-menu" onClick={() => {setIsMobile(!(isMobile));}}>
                <svg height="32px" id="menu" version="1.1" viewBox="0 0 32 32" width="32px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/>
                </svg>
            </div>
        </nav>
    )
}

export default NavbarComponent;
