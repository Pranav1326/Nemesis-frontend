import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { AuthContext } from "../Auth";

const NavbarComponent = () => {

    const { setLogout } = useContext(AuthContext);
    const navigate = useNavigate();

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
        <nav>
            <h1>Namasis</h1>
            <div className="links">
                <button className='btn' onClick={handleHome}> Home </button>
                <button className='btn' onClick={handleReg}> Register </button>
                <button className='btn' 
                    onClick={handleLogout}
                > Logout </button>
            </div>
        </nav>
    )
}

export default NavbarComponent;
