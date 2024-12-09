import React from "react";
import './Sidebar.css';
import './Navbar.css';


const Navbar = () => {
    return (
    <div className="navbar">
        <h1>고객 관리</h1>
        <div className="user-info">
        <span>관리자</span>
        <button onClick={() => alert("Logout functionality here")}>Logout</button>
        </div>
    </div>
    );
};

export default Navbar;
