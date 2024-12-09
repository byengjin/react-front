import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate("/customers");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID</label>
          <input type="text" name="username" onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
