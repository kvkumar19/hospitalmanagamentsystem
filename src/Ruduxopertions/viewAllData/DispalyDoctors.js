import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import HospitalMServices from '../../Srevies/HospitalMServices';
import { showallDoctors } from '../action/actiontype';


const DispalyDoctors = () => {

    const [doctorlist, setDoctorList] = useState();
    const state = useSelector((state) => state.doctor);
    const dispatch = useDispatch();
    
    useEffect(() => {
        /*   fetch("http://localhost:4201/doctor")
                    .then((res) => res.json())
                     .then((res) => setDoctorList(res))
                    .catch((err) => console.log(err));
                    */
        HospitalMServices.getALLDOCTORData()
            .then((res) => setDoctorList(res.data));

    }, []);

    dispatch(showallDoctors(doctorlist))
    const showADoctor = (id) => {
       alert("this is doctor isd is : " + id);
       window.location.href ='/viewADoctor/'+id;
    }
    console.log("the dataxzcvxzc  ", doctorlist);
    console.log("ASDFASD state", state)
    
    // console.log("view a doctor s", oneData)

    return (
        <div>
                <Header/>
            <table className="table" >
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>phone</th>
                        <th>email</th>
                        <th>password</th>
                        <th>add</th>
                        <th colSpan={2}>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        
                        state &&
                        state.map((doctor, index) =>
                        (
                            <tr key={index}>
                             <th>{index}</th>
                                <th>{doctor.id}</th>
                                <th>{doctor.name}</th>
                                <th>{doctor.phno}</th>
                                <th>{doctor.email}</th>
                                <th>{doctor.password}</th>
                                <th>{doctor.add}</th>
                                <th>                            
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => showADoctor(doctor.id)} data-bs-target="#staticBackdrop">
                                    View
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => showADoctor(doctor.id)} data-bs-target="#staticBackdrop">
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

export default DispalyDoctors
