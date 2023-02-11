import React, { useState, useEffect } from 'react';
import ListParts from './ListParts';
import EmpireService from "../service/EmpireService";
import data from "bootstrap/js/src/dom/data";
import ListMissiles from "./ListMissiles";

function ShipParts() {
    const [shields, setShields] = useState([]);
    const [missiles, setMissiles] = useState([]);

    // code to fetch the shields data
    useEffect(() => {
        getAllShieldParts();
        getAllMissileParts();

    }, [])

    const getAllShieldParts = () => {
        EmpireService.readShields().then((response) => {
            setShields(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error)
        })
    }
    const getAllMissileParts = () => {
        EmpireService.readMissiles().then((response) => {
            setMissiles(response.data)
        }).catch(error => {
            console.log(error)
        })
    }
    return (
        <>
            { window.location.pathname === "/dawn-parts/shields" && <ListParts allShields={shields} />}
            { window.location.pathname === "/dawn-parts/missiles" && <ListMissiles allMissiles={missiles} />}

        </>
    );
}

export default ShipParts;
