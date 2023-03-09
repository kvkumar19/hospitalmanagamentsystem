import axios from "axios";

const BASICE_URL_ADDMI = " http://localhost:4201/Addmin";
const BASICE_URL_DOCTOR = " http://localhost:4201/doctor";
const BASICE_URL_PATIENT = "http://localhost:4201/patient";
const BASICE_URL_NURSE = "http://localhost:4201/Nurse";
class HospitalMServices {
    getALLADMinData() {
        return axios.get(BASICE_URL_ADDMI);
    }
    getALLDOCTORData() {
        return axios.get(BASICE_URL_DOCTOR);
    }
    getADOCTORDataById(id) {
        return axios.get(BASICE_URL_DOCTOR+"/"+id);
    }
    getALLPATIENTData() {
        return axios.get(BASICE_URL_PATIENT);
    }
    getALLNURSEData() {
        return axios.get(BASICE_URL_NURSE);
    }
}

export  default new HospitalMServices();