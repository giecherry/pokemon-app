import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react"
import Button from '../components/Button';

function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3001/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                alert("Signup successful! Redirecting to login page...");
                navigate("/login"); 
            } else {
                alert(data.error || "Signup failed.");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    return (
        <div className="signup-page">
            <form onSubmit={handleSignup}>
                <h1>Welcome!</h1>
                <h3>Become a member to track favorites, wishlist what you want and organize your collection</h3>
                <div>
                    <label htmlFor="email">E-mail:</label>
                    <input type="email" id="Email" name="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <span>Already a member? <Link to="/login">Log in!</Link></span>
                <Button type="submit">Register</Button>
            </form>
            <Link to="/">
                <Button className="home-button" icon="https://i.imgur.com/Rh1obTr.png">
                </Button>
            </Link>
        </div>
    );
}
export default SignUp;
