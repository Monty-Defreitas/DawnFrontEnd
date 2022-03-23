import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import EmpireService from "../service/EmpireService";

export const ListPartsWeapons = () => {
    const[weapons, setWeapons] = useState([]);

    useEffect(() => {
        getAllWeapons();

    }, [])


    const getAllWeapons = () => {
        EmpireService.readWeapons().then((response) => {
            setWeapons(response.data);
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })

    }
    return(
        <div className='container'>
            <h2 className='text-center'>List Weapons</h2>
            <Link to = "/" className='btn btn-primary mb-2'>Home</Link>
            <table className='table table-bordered table-striped border-dark'>
                <thead>
                <th>Weapon Name</th>
                <th>Energy Requirements</th>
                <th>Damage output</th>
                <th>Parsecks</th>


                </thead>
                <tbody>
                {
                    weapons.map(weaponVar =>
                        <tr className='border-success' key={weaponVar}>
                            <td>{weaponVar.weaponName}</td>
                            <td>{weaponVar.energyRequirements}</td>
                            <td>{weaponVar.weaponDamage}</td>
                            <td>{weaponVar.parsecks}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
        </div>
    )
}
export default ListPartsWeapons;;