import { SHOW_ALL_DOCTORS } from "../action/action";


const instialDoctorData={
    doctor: [],
}
const DcotorRedusers = (state =instialDoctorData ,{ type, payloade }) => {
    switch(type){
       
        case SHOW_ALL_DOCTORS: {
            return { ...state, doctor: payloade };

        }default:
        return state;
        
    }
  
}

export default DcotorRedusers;
