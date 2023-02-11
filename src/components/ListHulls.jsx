 import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmpireService from "../service/EmpireService";

export const ListParts = () => {
    const [hulls, setHulls] = useState([])

    useEffect(() => {
        getAllEmployees();

    }, [])

    const getAllEmployees = () => {

        EmpireService.readHulls().then((response) => {
            setHulls(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })

    }

    const deleteEmployee = () => {

    }

    return (
        <div className='container'>
            <h2 className='text-center'>List Hulls</h2>
            <Link to = "/" className='btn btn-primary mb-2'>Home</Link>
            <table className='table table-bordered table-striped border-dark'>
                <thead>

                <th>Shield Name</th>
                <th>Energy Requirements</th>
                <th>Damage Mitigation</th>
                <th>Parsecks</th>
                <th>Actions</th>

                </thead>
                <tbody>
                {
                    hulls.map(hullVar =>
                        <tr className='border-success' key={hullVar}>

                            <td>{hullVar.shieldType}</td>
                            <td>{hullVar.energyRequirements}</td>
                            <td>{hullVar.damageMitigation}</td>
                            <td>{hullVar.parsecks}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${hullVar.id}`}>Update</Link>
                                <button className='btn btn-info' onClick={() => deleteEmployee(hullVar.id)}
                                        style = {{marginLeft:"10px"}}>Delete </button>

                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}

export default ListParts