import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import axios from "../services/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/api/user").then((response) => setUsers(response.data));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />
        <h1>User Management</h1>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.username}</td>
                <td>{user.role}</td>
                <td>
                  <button>Change Role</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
