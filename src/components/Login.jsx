import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Send login request to the server with the given username and password
        // If successful, redirect to the desired page

        // If not, set an error message
        setError("Incorrect username or password. Please try again.");
    };

    return (
        <div className="container my-5">
            <div className="row">
                <div className="card col-md-6 offset-md-3 border-success">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group mb-2">
                                <label htmlFor="username" className="form-label">
                                    Username:
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter username"
                                    name="username"
                                    className="form-control border-success"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group mb-2">
                                <label htmlFor="password" className="form-label">
                                    Password:
                                </label>
                                <input
                                    type="password"
                                    placeholder="Enter password"
                                    name="password"
                                    className="form-control border-success"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && (
                                <div className="alert alert-danger" role="alert">
                                    {error}
                                </div>
                            )}
                            <button className="btn btn-success mr-2">Login</button>
                            <Link to="/register">
                                <button className="btn btn-link">Register</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
