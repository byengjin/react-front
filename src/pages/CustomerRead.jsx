import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "axios";


const CustomerForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [customer, setCustomer] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (id) {
      axios.get(`/customers/${id}`).then((response) => setCustomer(response.data));
    }
  }, [id]);

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await axios.put(`/customers/${id}`, customer);
    } else {
      await axios.post("/customers", customer);
    }
    navigate("/customers");
  };

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>{id ? "Edit Customer" : "Add Customer"}</h1>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={customer.name} onChange={handleChange} />
          {/* 다른 필드 추가 */}
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
