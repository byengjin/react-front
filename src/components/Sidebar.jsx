import React from "react";
import { Link } from "react-router-dom";
import './Sidebar.css';
import './Navbar.css';


const Sidebar = () => {
    return (
    <div className="sidebar">
        <h2>ERP Menu</h2>
        <ul>
        <li><Link to="/customers">고객 리스트</Link></li>
        <li><Link to="/customers/add">고객 추가</Link></li>
    </ul>
    </div>
    );
};

export default Sidebar;
