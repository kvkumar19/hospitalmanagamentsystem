import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import HospitalMServices from '../../Srevies/HospitalMServices';
import {  showallNurses } from '../action/actiontype';


const DispalyNurses = () => {

    const [nurses, setNurses] = useState();
    const state = useSelector((state) => state.nurse);
    const dispatch = useDispatch();
    
    useEffect(() => {
        /*   fetch("http://localhost:4201/doctor")
                    .then((res) => res.json())
                     .then((res) => setDoctorList(res))
                    .catch((err) => console.log(err));
                    */
        HospitalMServices.getALLNURSEData()
            .then((res) => setNurses(res.data));

    }, []);

    dispatch(showallNurses(nurses))
    const showADoctor = (id) => {
       alert("this is doctor isd is : " + id);
       window.location.href ='/viewADoctor/'+id;
    }
    console.log("the dataxzcvxzc  ", nurses);
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
                        state.map((nurse, index) =>
                        (
                            <tr key={index}>
                             <th>{index}</th>
                             {/* {id: 1001, name: 'st', phno: 43985098, email: 'kkkk@gamil.com', password: 'SDAF', …}
length
: 
1 */}
                                <th>{nurse.id}</th>
                                <th>{nurse.name}</th>
                                <th>{nurse.phno}</th>
                                <th>{nurse.email}</th>
                                <th>{nurse.password}</th>
                                <th>{nurse.add}</th>
                                <th>                            
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => showADoctor(nurse.id)} data-bs-target="#staticBackdrop">
                                    View
                                </button>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => showADoctor(nurse.id)} data-bs-target="#staticBackdrop">
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

export default DispalyNurses
