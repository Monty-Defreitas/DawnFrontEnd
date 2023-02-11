import { Link } from 'react-router-dom'

export const ListParts = (props) => {
    const deleteParts = (id) => {
        // Add your logic for deleting a part here
    }

    return (
        <div className='container'>
            <h2 className='text-center'>List shields</h2>
            <Link to = "/" className='btn btn-primary mb-2'>Home</Link>
            <table className='table table-bordered table-striped border-dark'>
                <thead>
                <tr>
                <th>Shield Name</th>
                <th>Energy Requirements</th>
                <th>Damage Mitigation</th>
                <th>Parsecks</th>
                <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {props.allShields && Array.isArray(props.allShields) && props.allShields.length > 0
                    ? props.allShields.map((shieldVar, index) =>
                        <tr className='border-success' key={index}>

                            <td>{shieldVar.shieldType}</td>
                            <td>{shieldVar.energyRequirements}</td>
                            <td>{shieldVar.damageMitigation}</td>
                            <td>{shieldVar.parsecks}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${shieldVar.id}`}>Update</Link>
                                <button className='btn btn-info' onClick={() => deleteParts(shieldVar.id)}
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
