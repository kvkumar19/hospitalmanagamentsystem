import { createStore } from "redux";
import DcotorRedusers from "./DcotorRedusers";

 import HospitalRedusers from "./HospitalRedusers";

const store  = createStore(HospitalRedusers);
export default store;