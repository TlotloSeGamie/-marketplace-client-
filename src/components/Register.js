import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        // Simple validation
        if (!email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="main-login">
            <h3>Logo</h3>
            <div className="container-login">
                <h1>Sign Up</h1>
                <form className="logins" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Email :"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password :"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password :"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {error && <div className="error">{error}</div>}
                    <div className="bust">
                        <button type="submit">Sign Up</button>
                        <Link to="/login">Already have an account? Login</Link> {/* Updated text */}
                    </div>
                </form>
                <div className="terms">
                    <h5>By continuing, you agree to our Terms of Use and Privacy Policy</h5>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
