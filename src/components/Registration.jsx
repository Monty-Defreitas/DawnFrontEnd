import React, {useState} from "react";
import EmpireService from "../service/EmpireService";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const  registrar = {username,password}
    const handleSubmit = (event) => {
        //event.preventDefault();
        EmpireService.registerUser(registrar).then((response)=> {
        })
    };

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 border-success">
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Username:</label>
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
                                    <label className="form-label">Password:</label>
                                    <input
                                        type="password"
                                        placeholder="Enter password"
                                        name="password"
                                        className="form-control border-success"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button className="btn btn-success" onClick={(event)=> handleSubmit()}>Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Register;