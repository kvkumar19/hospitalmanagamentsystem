import React, { useEffect, useState, } from 'react'
import { useParams } from 'react-router-dom';
import HospitalMServices from '../../Srevies/HospitalMServices';
const ViewADoctor = () => {
    const [oneData, setDoctor] = useState(
        {
            id: '',
            name: "",
            phno: '',
            email: "",
            Add: "",

        },
    );
    const { id } = useParams();
    useEffect(() => {
        HospitalMServices.getADOCTORDataById(id)
            .then((res) => setDoctor(res.data))
    }, [])
    return (
        <div>
            <div className='card-body k1'>

                <h1>Docter id    :  {oneData.id}</h1>
                <h1>Docter Name  :  {oneData.name}</h1>
                <h1>Docter phno  :  {oneData.phno}</h1>
                <h1>Docter email :  {oneData.email}</h1>
                <h1>Docter Add   :  {oneData.Add}</h1>
            </div>
        </div>
    )
}

export default ViewADoctor
