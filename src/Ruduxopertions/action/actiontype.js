import { SHOW_ALL_ADMINS, SHOW_ALL_DOCTORS, SHOW_ALL_NURSES, SHOW_ALL_PATIENTS } from "./action"

const showAllAdmins = (admin) => {
    return {
        type: SHOW_ALL_ADMINS,
        payloade: admin,
    }

};

const showallDoctors = (doctor) => {
  return{  type: SHOW_ALL_DOCTORS, payloade: doctor,}
};

const showallPatient = (patient) => {
    return {
        type: SHOW_ALL_PATIENTS, payloade: patient,
    }
};
const showallNurses = (nurse) => {
    return {
        type: SHOW_ALL_NURSES, payloade: nurse,
    }
}
export { showAllAdmins, showallDoctors, showallNurses, showallPatient }