import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmpireService from "../service/EmpireService";

export const ListParts = (props) => {
    // const [missiles, setMissiles] = useState([])

    // useEffect(() => {
    //     getAllEmployees();
    //
    // }, [])
    //
    // const getAllEmployees = () => {
    //
    //     EmpireService.readMissiles().then((response) => {
    //         setMissiles(response.data)
    //         console.log(response.data);
    //     }).catch(error => {
    //         console.log(error)
    //     })
    //
    // }

    const deleteEmployee = () => {

    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Missiles</h2>
            <Link to = "/" className='btn btn-primary mb-2'>Home</Link>
            <table className='table table-bordered table-striped border-dark'>
                <thead>
                <tr>
                <th>Missile Name</th>
                <th>Energy Requirements</th>
                <th>Damage Output</th>
                <th>combat speed</th>
                <th>Actions</th>
                </tr>

                </thead>
                <tbody>
                {props.allMissiles && Array.isArray(props.allMissiles) && props.allMissiles.length > 0
                    ? props.allMissiles.map(missilesVar =>
                        <tr className='border-success' key={missilesVar}>

                            <td>{missilesVar.missileName}</td>
                            <td>{missilesVar.energyRequirements}</td>
                            <td>{missilesVar.damageOutput}</td>
                            <td>{missilesVar.combatSpeed}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${missilesVar.id}`}>Update</Link>
                                <button className='btn btn-info' onClick={() => deleteEmployee(missilesVar.id)}
                                        style = {{marginLeft:"10px"}}>Delete </button>

                            </td>
                        </tr>
                    ): <tr><td colSpan="5">No data available</td></tr>
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListParts