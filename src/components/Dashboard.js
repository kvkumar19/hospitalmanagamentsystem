import { faDashboard, faHospitalUser, faMedkit, faMoneyBill, faUserDoctor, faUserNurse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'

import HospitalMServices from '../Srevies/HospitalMServices';

export const Dashboard = () => {

    const [doctorlist, setDoctorList] = useState([]);
    const [pateintlist, setpateintlist] = useState([]);

    useEffect(() => {
        HospitalMServices.getALLDOCTORData()
            .then((res) =>
                setDoctorList(res.data));
        HospitalMServices.getALLPATIENTData()
            .then((res) => setpateintlist(res.data))
    }, [])

    console.log(doctorlist["length"], "susses");
    console.log(pateintlist["length"], "susses");
    return (
        <div >
            <div className='row ' style={{ boxSizing: "content-box" }}>
                <div className='col-md-4' style={{ background: 'black', width: "200px", height: "640px" }}>
                    <ul className="nav  nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav o" href=''> <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon> <samp></samp>DashBord</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav o" href='/registion'><FontAwesomeIcon icon={faUserDoctor}></FontAwesomeIcon> Docter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav o" href='#'><FontAwesomeIcon icon={faHospitalUser}></FontAwesomeIcon> Patient</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav o" href='#'><FontAwesomeIcon icon={faUserNurse}></FontAwesomeIcon> Nurse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav o" href='#'><FontAwesomeIcon icon={faMedkit}></FontAwesomeIcon> Pharmacist</a>
                        </li>
                    </ul>
                    <hr style={{ size: "2px" }}></hr>
                    <ul className="nav  nav-pills flex-column">
                        <li className="nav-item">
                            <a className="nav o" href='#'> <FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon> <samp></samp>PayMents</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav o" href='#'><FontAwesomeIcon icon={faUserDoctor}></FontAwesomeIcon> Docter</a>
                        </li>



                    </ul>
                </div>
                <div className='col-md-9'>
                    <table>
                        <tbody>
                            <tr>
                                <td><div className='card' style={{ border: "1px solid ", width: " 320px", height: "150px", margin: "10px" }} >
                                    <div className='row'>
                                        <div className='col-md-6' ><h1> <a href='/displayDoctors'> Doctor</a> </h1>

                                            <h1>Doctors {doctorlist["length"]}</h1>
                                        </div>
                                        <div className='col-md-6' ><FontAwesomeIcon icon={faUserDoctor} size='7x'></FontAwesomeIcon> </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                    <div className='card' style={{ border: "1px solid ", width: " 320px", height: "150px", margin: "10px" }}  >
                                        <div className='row'>
                                            <div className='col-md-6' ><h1> <a href='/displayPatients'> pateint  </a>  </h1>
                                                <h1>{pateintlist["length"]}</h1>
                                            </div>
                                            <div className='col-md-6' ><FontAwesomeIcon icon={faHospitalUser} size='7x'></FontAwesomeIcon> </div>
                                        </div>
                                    </div>
                                </td>
                                <td>  <div className='card' style={{ border: "1px solid ", width: " 320px", height: "150px", margin: "10px" }}  >
                                    <div className='row'>
                                        <div className='col-md-6' ><h1> <a href='/displayPatients'>   </a> </h1></div>
                                        <div className='col-md-6' ><FontAwesomeIcon icon={faHospitalUser} size='7x'></FontAwesomeIcon> </div>
                                    </div>
                                </div></td>

                            </tr>
                            <tr>
                                <td><div className='card' style={{ border: "1px solid ", width: " 320px", height: "140px", margin: "10px" }} >
                                    <div className='row'>
                                        <div className='col-md-6' ><h1> <a href='/displayDoctors'> </a> </h1></div>
                                        <div className='col-md-6' ><FontAwesomeIcon icon={faUserDoctor} size='7x'></FontAwesomeIcon> </div>
                                    </div>
                                </div>
                                </td>
                                <td>
                                    <div className='card' style={{ border: "1px solid ", width: " 320px", height: "140px", margin: "10px" }}  >
                                        <div className='row'>
                                            <div className='col-md-6' ><h1> <a href='/displayPatients'>   </a> </h1></div>
                                            <div className='col-md-6' ><FontAwesomeIcon icon={faHospitalUser} size='7x'></FontAwesomeIcon> </div>
                                        </div>
                                    </div>
                                </td>
                                <td>  <div className='card' style={{ border: "1px solid ", width: " 320px", height: "140px", margin: "10px" }}  >
                                    <div className='row'>
                                        <div className='col-md-6' ><h1> <a href='/displayPatients'>   </a> </h1></div>
                                        <div className='col-md-6' ><FontAwesomeIcon icon={faHospitalUser} size='7x'></FontAwesomeIcon> </div>
                                    </div>
                                </div>
                                </td>

                            </tr>
                        </tbody>

                    </table>
                    <div className='card1 ' style={{ height: "314px", width: "1011px" }}>
                        <div className='row'>
                            <div className='col-md-6 d1'>
                                hai
                            </div>
                            <div className='col-md-6 '>
                                vinay
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
