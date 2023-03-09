import React, { useState } from 'react';
import Footer from './Footer';

const Login = () => {
    const [longin, setLongindata] = useState({
        uname: "", password: " "
    })
    return (
        <div>
            <div className='container-fluid'>

                <div className=' row'>
                    <div className=' col-md-6 '>
                        <div className=' q'> </div>
                    </div>
                    <div className=' col-md-6 '>
                        <div className=' l'></div>
                        <div>
                            <form>
                                <div >
                                    <label className=''> userName</label>
                                    <input className='form-control' onChange={(e) => setLongindata({ uname: e.target.value })} />
                                    <h1>{longin.uname}</h1>
                                </div>
                                <div>
                                    <label> password</label>
                                    <input className='form-control' onChange={(e) => setLongindata({ password: e.target.value })} />
                                    <h1>{longin.password}</h1>
                                </div>
                            </form>
                            <a href='/dashboard'>Dashboard</a></div>
                    </div>
                </div>



                <Footer />
            </div>
        </div>
    )
}
export default Login;