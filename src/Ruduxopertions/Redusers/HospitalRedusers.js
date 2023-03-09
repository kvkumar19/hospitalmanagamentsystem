import { SHOW_ALL_ADMINS, SHOW_ALL_DOCTORS, SHOW_ALL_NURSES, SHOW_ALL_PATIENTS } from "../action/action";

const instialData = {
    admin: [],
    doctor: [],
    patient: [],
    nurse: []

};
const HospitalRedusers = (state = instialData, { type, payloade }) => {
    switch (type) {
        case SHOW_ALL_ADMINS: {
            return { ...state, admin: payloade };

        };
        case SHOW_ALL_DOCTORS: {
            return { ...state, doctor: payloade };

        };
        case SHOW_ALL_PATIENTS: {
            return { ...state, patient:payloade };

        };
        case SHOW_ALL_NURSES: {
            return { ...state, nurse:payloade };

        };
        default:
            return state;



    }

}
export default HospitalRedusers;