import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmpireService from "../service/EmpireService";

export const ListParts = () => {
    const [shields, setShields] = useState([])

    useEffect(() => {
        getAllEmployees();

    }, [])

    const getAllEmployees = () => {

        EmpireService.readShields().then((response) => {
            setShields(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })

    }

    const deleteEmployee = () => {

    }

    return (
        <div className='container'>
            <h2 className='text-center'>List shields</h2>
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
                    shields.map(shieldVar =>
                        <tr className='border-success' key={shieldVar}>

                            <td>{shieldVar.shieldType}</td>
                            <td>{shieldVar.energyRequirements}</td>
                            <td>{shieldVar.damageMitigation}</td>
                            <td>{shieldVar.parsecks}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${shieldVar.id}`}>Update</Link>
                                <button className='btn btn-info' onClick={() => deleteEmployee(shieldVar.id)}
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