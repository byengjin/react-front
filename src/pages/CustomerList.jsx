import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/customers").then((response) => setCustomers(response.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>Customer List</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Total Purchases</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.username}</td>
                <td>{customer.totalPurchases}원</td>
                <td>/* 등급 표시 로직 추가 */</td>
                <td>
                  <button onClick={() => navigate(`/customers/${customer.id}`)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={() => navigate("/customers/add")}>Add Customer</button>
      </div>
    </div>
  );
};

export default CustomerList;
