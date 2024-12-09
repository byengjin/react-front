import React from "react";
import './Modal.css';
import './Sidebar.css';
import './Navbar.css';


const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
    <div className="modal-backdrop">
        <div className="modal">
        <button className="close-btn" onClick={onClose}>
            Close
        </button>
        {children}
        </div>
    </div>
    );
};

export default Modal;
