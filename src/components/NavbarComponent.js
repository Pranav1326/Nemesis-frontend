import React from 'react';
import { Link, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import '../App.css';
import Home from "../Pages/Home";
import Register from "../Pages/Register";

const NavbarComponent = () => {

    const navigate = useNavigate();

    function handleReg() {
        navigate("/register");
    }
    function handleHome() {
        navigate("/home");
    }

    return (
        <nav>
            <h1>Namasis</h1>
            <div className="links">
                <button className='btn' onClick={handleHome}> Home </button>
                <button className='btn' onClick={handleReg}> Register </button>
            </div>
        </nav>
    )
}

export default NavbarComponent;
