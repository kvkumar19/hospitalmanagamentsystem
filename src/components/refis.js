import axios from "axios";
import React, { useState } from "react";
const Register = () => {
    const [id, setId] = useState("");
    const [uName, setUname] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const onCreate = (e) => {
        e.preventDefault();
        const user = {
            id: id,
            uname: uName,
            password: password,
            type: type,
        };
        axios.post("http://localhost:3001/users", user);
        console.log("success");
    };
    return (
        <div>
            <form className="col-lg-4 col-md-5 col-sm-12">
                <div className="mb-3">
                    <label className="form-label">Id</label>
                    <input
                        type={"text"}
                        className="form-control"
                        onChange={(e) => {
                            setId(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">type</label>
                    <select
                        className="form-select"
                        onChange={(e) => {
                            setType(e.target.value);
                        }}
                    >
                        <option>doctor</option>
                        <option>nurse</option>
                        <option>patient</option>
                    </select>
                </div>
                {type === "patient" ? (
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Patient Name</label>
                            <input
                                type={"text"}
                                className="form-control"
                                onChange={(e) => {
                                    setUname(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Type of Problem</label>
                            <input
                                type={"text"}
                                className="form-control"
                                onChange={(e) => {
                                    setUname(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                ) : type === "nurse" ? (
                    <div>
                        <div className="mb-3">
                            <label className="form-label">Nurse Name</label>
                            <input
                                type={"text"}
                                className="form-control"
                                onChange={(e) => {
                                    setUname(e.target.value);
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
                                    setUname(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                )}
                {/* <div className="mb-3">
 <label className="form-label">User name</label>
 <input
 type={"text"}
 className="form-control"
 onChange={(e) => {
 setUname(e.target.value);
 }}
 />
 </div>
 <div className="mb-3">
 <label className="form-label">password</label>
 <input
 type={"text"}
 className="form-control"
 onChange={(e) => {
 setPassword(e.target.value);
 }}
 />
 </div> */}
                <button
                    onClick={(e) => {
                        onCreate(e);
                    }}
                >
                    Create
                </button>
            </form>
        </div>
    );
};
export default Register;