import React, { useState } from "react";
import axios from "axios";

const CustomerAddPage = () => {
    const [newCustomer, setNewCustomer] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
    });

const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("/customers", newCustomer);
    alert("Customer added!");
};

return (
    <div className="customer-add">
    <h1>Add Customer</h1>
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
        type="text"
        name="name"
        value={newCustomer.name}
        onChange={handleChange}
        />
        {/* 다른 필드 추가 */}
        <button type="submit">Add</button>
    </form>
    </div>
);
};

export default CustomerAddPage;
