

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Dashboard } from './components/Dashboard';
import Dashboard1 from './components/Dashboard1';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Registion from './components/Registion';
import store from './Ruduxopertions/Redusers/store';
import DispalyDoctors from './Ruduxopertions/viewAllData/DispalyDoctors';
import Dispalypatients from './Ruduxopertions/viewAllData/DispalyPatients'; 
import DispalyNurses from './Ruduxopertions/viewAllData/DisplayNurses';
import ViewADoctor from './Ruduxopertions/viewAllData/ViewADoctor';



function App() {
  return (
    <div className="App" >


       <Provider store={store}>

        <BrowserRouter>
          <Routes>
            <Route path='/header' exact element={<Header />} />
            <Route path='/dashboard' exact element={<Dashboard1 />} />
            <Route path='/' exact element={<Login />} />
            <Route path='/displayDoctors' exact element={<DispalyDoctors />} />
            <Route path='/displayPatients' exact element={<Dispalypatients />} />
            <Route path='/viewADoctor/:id' exact element={<ViewADoctor />} />
            <Route path='/displayNurses' exact element={<DispalyNurses />} />
            <Route path='/registion' exact element={<Registion />} />
          </Routes>
        </BrowserRouter>
      </Provider> 
    </div>
  );
}

export default App;
