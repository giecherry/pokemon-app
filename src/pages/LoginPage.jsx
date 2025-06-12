import { Link, useNavigate } from 'react-router-dom';
import HomeBtn from '../components/HomeBtn';
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); 
        alert("Login successful! Redirecting to home page...");
        navigate("/");
      } else {
        alert(data.error || "Login failed.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleLogin}>
        <h1>Welcome to PokeKari</h1>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <span>New here? <Link to="/signup">Sign up!</Link></span>
        <button type="submit">Login</button>
      </form>
      <HomeBtn />
    </div>
  );
}
export default LoginPage;
