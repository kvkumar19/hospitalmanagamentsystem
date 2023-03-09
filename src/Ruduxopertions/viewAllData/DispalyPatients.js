
import React, { Component } from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import HospitalMServices from '../../Srevies/HospitalMServices';
import { showallPatient } from '../action/actiontype';
const Dispalypatients = () => {
       const [patientList, setPatientList] = useState();
    const state = useSelector((state) => state.patient);
    const dispatch = useDispatch();

    useEffect(() => {
        /*   fetch("http://localhost:4201/patient")
        
        .then((res) => res.json())
        .then((res) => setpatientList(res))
        .catch((err) => console.log(err));
        */
        HospitalMServices.getALLPATIENTData()
        .then((res) => setPatientList(res.data));
        }, []);
    dispatch(showallPatient(patientList))
    const showApatient = (id) => {
        alert("this is patient isd is : " + id);
        window.location.href = '/viewApatient/' + id;
    }
    const updateData = (id) => {

    }
    return (
        <div>
                <Header />
            <table className="table table-bordered" id="example" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Patient-Name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>add</th>
                        <th>TypeofHealth_Ishou</th>
                        <th>DocterName</th>
                        <th>NurseName</th>
                        <th colSpan={2}>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        state &&
                        state.map((patient, index) =>
                        (
                            <tr key={index}>
                                <th>{patient.id}</th>
                                <th>{patient.name}</th>
                                <th>{patient.phno}</th>
                                <th>{patient.email}</th>
                                <th>{patient.add}</th>
                                <th>{patient.typeofhealth_ishou}</th>
                                <th>{patient.doctor}</th>
                                <th>{patient.nurse}</th>
                                <th>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => showApatient(patient.id)} data-bs-target="#staticBackdrop">
                                        View
                                    </button>

                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => updateData(patient.id)} data-bs-target="#staticBackdrop" >

                                        Edit
                                    </button>
                                </th>
                            </tr>

                        )
                        )
                    }
                </tbody>




            </table>
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Dispalypatients
