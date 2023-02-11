import React, { useState} from "react";
import {Link} from "react-router-dom";
import EmpireService from "../service/EmpireService";

const CreateOrder = () => {

    const [empireName, setEmpireName] = useState("");
    const [hullName, setHullName] = useState("");
    const [shieldType, setShieldType] = useState("");
    const [weaponType, setWeaponType] = useState("");
    const [missiles, setMissiles] = useState([]);
    const shipOrder = {empireName,hullName,shieldType,weaponType,missiles};


    const saveOrder = () => {EmpireService.createOrder(shipOrder).then((response)=> {
        console.log("You're in save data: " + response.data.missiles);

        }).catch(error => {
            console.log(error);
        })
    }
    console.log(shipOrder);
    return (
        <div>
            <br></br>
            <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3 border-success">
                        <div className = "card-body ">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">Username: </label>
                                    <input
                                        type = "text"
                                        placeholder='Enter Empire name'
                                        name = "empireName"
                                        className='form-control border-success'
                                        value = {empireName}
                                        onChange = {(e) => setEmpireName(e.target.value)}>

                                    </input>
                                </div>
                                <div className = "form-group mb-2">
                                    <label className = "form-label">Hull Name: </label>
                                    <input type = "text"
                                           placeholder='Enter Hullname'
                                           name = "hullName"
                                           className='form-control border-success'
                                           value = {hullName}
                                           onChange = {(e) => setHullName(e.target.value)}
                                    >

                                    </input>
                                </div>
                                <div className = "form-group mb-2 ">
                                    <label className = "form-label">Shield: </label>
                                    <input type = "text"
                                           placeholder='Enter Shield type'
                                           name = "shieldType"
                                           className='form-control border-success'
                                           value = {shieldType}
                                           onChange = {(e) => setShieldType(e.target.value)}
                                    >

                                    </input>
                                </div>
                                <div className = "form-group mb-2 ">
                                    <label className = "form-label">Weapon: </label>
                                    <input type = "text"
                                           placeholder='Enter desired weapon'
                                           name = "weaponType"
                                           className='form-control border-success'
                                           value = {weaponType}
                                           onChange = {(e) => setWeaponType(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className = "form-group mb-2 ">
                                    <label className = "form-label">Missiles: </label>
                                    <input type = "text"
                                           placeholder='Enter desired missile'
                                           name = "missiles"
                                           className='form-control border-success'
                                           value = {missiles}
                                           onChange = {(e) => setMissiles([e.target.value])}
                                    >
                                    </input>
                                </div>
                                <button className='btn btn-success ' onClick={(e) => saveOrder()} >Submit</button>
                                <Link to = "/dawn-parts"  className='btn btn-danger'>Cancel</Link>
                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default CreateOrder;