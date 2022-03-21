import React, {useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import EmpireService from "../service/EmpireService";



const CreateEmpire = () => {
    const [empireName, setEmpireName] = useState("")
    const [sector, setSector] = useState("")
    const [alliance, setAlliance] = useState("")
    const navigate = useNavigate();
    const empires ={empireName,sector,alliance};

        const saveEmpire = () => {

        EmpireService.createEmpire(empires).then((response)=> {

            if (response.data) {
                throw new DOMException(`${response.data}`);
            }
        }).catch(error => {
            console.log(error);
        })
        }


    return <div>
        <br></br>
        <div className = "container">
            <div className = "row">
                <div className = "card col-md-6 offset-md-3 offset-md-3 border-success">
                    <div className = "card-body ">
                        <form>
                            <div className = "form-group mb-2">
                                <label className = "form-label">Empire Name: </label>
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
                                <label className = "form-label">Sector Name: </label>
                                <input type = "text"
                                       placeholder='Enter Sector name'
                                       name = "sector"
                                       className='form-control border-success'
                                       value = {sector}
                                       onChange = {(e) => setSector(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className = "form-group mb-2 ">
                                <label className = "form-label">Alliance: </label>
                                <input type = "text"
                                       placeholder='Enter desired Alliance'
                                       name = "alliance"
                                       className='form-control border-success'
                                       value = {alliance}
                                       onChange = {(e) => setAlliance(e.target.value)}
                                >

                                </input>
                            </div>
                            <button className='btn btn-success ' onClick={(e) => saveEmpire()} >Submit</button>
                            <Link to = "/dawn-parts"  className='btn btn-danger'>Cancel</Link>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    </div>
}
export default CreateEmpire