
import React, { useState } from 'react'

const Registion = () => {
    /*
    "id": 1001,
    "name": "vinay",
    "phno": 43985098,
    "email": "kkkk@gamil.com",
    "password": "sdaf",
    "add": "hyd",
    "type": "addmin"
    */
    const [type1, setType1] = useState("");
    const [doctor, setDoctor] = useState({
        id: '',
        name: "",
        phno: '',
        email: "",
        password: "",
        add: "",

    })
    const [pateint, setPatient] = useState({
        id: '',
        name: "",
        phno: '',
        email: "",
        password: "",
        add: "",

    })
    const [Nurse, setNurse] = useState({
        id: '',
        name: "",
        phno: '',
        email: "",
        password: "",
        add: "",

    })
    const onCreate = (e) => {
        e.preventDefault();
           
        console.log("success");
    };
    return (
        <div>
            <div >
                <label className='from-control' >Enter the id</label>
                <input className='from-control' onChange={(e) => setDoctor({ id: e.target.value })} />
                <h1>{doctor.id}</h1>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">State</label>
                <select class="form-select" id="validationCustom04" required onChange={(e) => setType1(e.target.value)}>
                    <option selected disabled value=" Choose.....">Choose...</option>
                    <option >Docter</option>
                    <option>pateint</option>
                    <option>Nurse</option>
                </select>
                <h1>asdfsa : {type1}</h1>
            </div> {type1 === "pateint" ? (
                <div>
                    <div className="mb-3">
                        <label className="form-label">Patient Name</label>
                        <input
                            type={"text"}
                            className="form-control"
                            onChange={(e) => {
                                setPatient({ add: e.target.value });
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Type of Problem</label>
                        <input
                            type={"text"}
                            className="form-control"
                            onChange={(e) => {
                                setPatient({ name: e.target.value });
                            }}
                        />
                    </div>
                </div>
            ) : type1 === "Nurse" ? (
                <div>
                    <div className="mb-3">
                        <label className="form-label">Nurse Name</label>
                        <input
                            type={"text"}
                            className="form-control"
                            onChange={(e) => {
                                setNurse({ name: e.target.value });
                            }}
                        />
                    </div>
                </div>
            ) : (
                <div>
                    <div className="mb-3">
                        <label className="form-label">Doctor Name</label>
                        <input
                            type={"text"}
                            className="form-control"
                            onChange={(e) => {
                                setNurse({ name: e.target.value });
                            }}
                        />
                    </div>
                </div>
            )}
            <button
                onClick={(e) => {
                    onCreate(e);
                }}
            >
                Create
            </button>

        </div>
    )
}

export default Registion
