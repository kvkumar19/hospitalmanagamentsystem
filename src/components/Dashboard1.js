
import React from 'react'
import new1 from '../components/new1.css';
import Footer from './Footer';
import { useState, useEffect } from 'react'
import HospitalMServices from '../Srevies/HospitalMServices';



const Dashboard1 = () => {
    const [doctorlist, setDoctorList] = useState([]);
    const [pateintlist, setpateintlist] = useState([]);
    const [nonurse, setNoNurse] = useState([]);
    useEffect(() => {
        HospitalMServices.getALLDOCTORData()
            .then((res) =>
                setDoctorList(res.data));
        HospitalMServices.getALLPATIENTData()
            .then((res) => setpateintlist(res.data));
        HospitalMServices.getALLNURSEData()
            .then((res) => setNoNurse(res.data));
    }, [])

    console.log(doctorlist["length"], "susses");
    console.log(pateintlist["length"], "susses");
    console.log(nonurse["length"],"susses")
    return (
        <div>
            <div className='heder'>
            </div>
            <div className="main-container">
                <div className="navcontainer">
                    <nav className="nav">
                        <div className="nav-upper-options">
                            <div className="nav-option option1">
                                <a className='a' href='/'><img src=
                                    "https://media.geeksforgeeks.org/wp-content/uploads/20221210182148/Untitled-design-(29).png"
                                    className="nav-img"
                                    alt="dashboard" />
                                    <h3> Dashboard</h3> </a>
                            </div>

                            <div className="option2 nav-option">
                                <img src=
                                    "https://img.freepik.com/premium-vector/cartoon-male-doctor-holding-clipboard_29190-4660.jpg?w=900"
                                    className="nav-img"
                                    alt="articles" />
                                <a className='a' href='/registion'> <h3> Docter</h3> </a>
                            </div>

                            <div className="nav-option option3">
                                <img src=
                                    "https://www.researchgate.net/profile/Tahir-Turk/publication/305402203/figure/fig1/AS:613946650288169@1523387696615/mages-from-the-Mukesh-Television-announcement-outdoor-and-print-materials-The-public.png"
                                    className="nav-img"
                                    alt="report" />
                                <h3> Patients</h3>
                            </div>

                            <div className="nav-option option4">
                                <img src=
                                    "https://www.hollilander.ie/wp-content/uploads/elementor/thumbs/banner-pgto14cgk2t5fmsbq5ag1gs4pbv4joypu5yzv0u4u8.png"
                                    className="nav-img"
                                    alt="institution" />
                                <h3> Nurse</h3>
                            </div>

                            <div className="nav-option option5">
                                <img src=
                                    "https://www.sjvc.edu/wp-content/uploads/2020/04/Pharmacy-technician-at-shelf-1.jpg"
                                    className="nav-img"
                                    alt="blog" />
                                <h3> Pharmacist </h3>
                            </div>

                            <div className="nav-option option6">
                                <img src=
                                    "https://www.investopedia.com/thmb/ZxoNFe3QEichLAUsMECPuwP8HWQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-500028549-5c04c1c846e0fb0001e05815.jpg"
                                    className="nav-img"
                                    alt="settings" />
                                <h3> PayMents</h3>
                            </div>

                            <div className="nav-option logout">
                                <img src=
                                    "https://www.pngitem.com/pimgs/m/252-2523180_transparent-clipart-windows-logout-icon-png-red-png.png"
                                    className="nav-img"
                                    alt="logout" />
                                <h3>Logout</h3>
                            </div>

                        </div>
                    </nav>
                </div>
                <div className="main">

                    <div className="searchbar2">
                        <input type="text"
                            name=""
                            id=""
                            placeholder="Search" />
                        <div className="searchbtn">
                            <img src=
                                "https://media.geeksforgeeks.org/wp-content/uploads/20221210180758/Untitled-design-(28).png"
                                className="icn srchicn"
                                alt="search-button" />
                        </div>
                    </div>

                    <div className="box-container">

                        <div className="box box1">
                            <div className="text">

                                <a className='a' href='/displayDoctors'>  <h1 className="topic-heading">Doctors {doctorlist["length"]}</h1></a>

                            </div>

                            <img src=
                                "https://www.uclahealth.org/sites/default/files/styles/portrait_3x4_016000_480x640/public/images/female-doc-with-other-docs.jpg?h=dd028d5a&itok=SJItHRgC"
                                className="nav-img"
                                alt="articles" />
                        </div>

                        <div className="box box2">
                            <div className="text">

                                <a className='a' href='/displayPatients'> <h1 className="topic-heading"> Patient {pateintlist["length"]}</h1></a>
                            </div>

                            <img src=
                                "https://www.researchgate.net/profile/Tahir-Turk/publication/305402203/figure/fig1/AS:613946650288169@1523387696615/mages-from-the-Mukesh-Television-announcement-outdoor-and-print-materials-The-public.png"
                                className="nav-img"
                                alt="report" />

                        </div>

                        <div className="box box3">
                            <div className="text">
                                <a className='a' href='/displayNurses'><h1>Nurse</h1> </a>
                                <h2>4353</h2>
                            </div>

                            <img src=
                                "https://img.freepik.com/free-photo/confident-female-doctor-with-reports-clipboard-standing-against-male-patient-hospital_662251-3027.jpg?w=360&t=st=1678352242~exp=1678352842~hmac=e1a345e1228fefdfa5ec346a187e16132a972d0f046b7e40e4a56b1ce6b18e4c"
                                alt="comments" />
                        </div>

                        <div className="box box4">
                            <div className="text">
                                <h2 className="topic-heading">70</h2>
                                <h2 className="topic">Published</h2>
                            </div>

                            <img src=
                                "https://media.geeksforgeeks.org/wp-content/uploads/20221210185029/13.png" alt="published" />
                        </div>
                    </div>

                    <div className="report-container">
                        <div className="report-header">
                            <h1 className="recent-Articles">Recent Articles</h1>
                            <button className="view">View All</button>
                        </div>

                        <div className="report-body">
                            <div className="report-topic-heading">
                                <h3 className="t-op">Article</h3>
                                <h3 className="t-op">Views</h3>
                                <h3 className="t-op">Comments</h3>
                                <h3 className="t-op">Status</h3>
                            </div>

                            <div className="items">
                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 73</h3>
                                    <h3 className="t-op-nextlvl">2.9k</h3>
                                    <h3 className="t-op-nextlvl">210</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 72</h3>
                                    <h3 className="t-op-nextlvl">1.5k</h3>
                                    <h3 className="t-op-nextlvl">360</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 71</h3>
                                    <h3 className="t-op-nextlvl">1.1k</h3>
                                    <h3 className="t-op-nextlvl">150</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 70</h3>
                                    <h3 className="t-op-nextlvl">1.2k</h3>
                                    <h3 className="t-op-nextlvl">420</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 69</h3>
                                    <h3 className="t-op-nextlvl">2.6k</h3>
                                    <h3 className="t-op-nextlvl">190</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 68</h3>
                                    <h3 className="t-op-nextlvl">1.9k</h3>
                                    <h3 className="t-op-nextlvl">390</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 67</h3>
                                    <h3 className="t-op-nextlvl">1.2k</h3>
                                    <h3 className="t-op-nextlvl">580</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 66</h3>
                                    <h3 className="t-op-nextlvl">3.6k</h3>
                                    <h3 className="t-op-nextlvl">160</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                                <div className="item1">
                                    <h3 className="t-op-nextlvl">Article 65</h3>
                                    <h3 className="t-op-nextlvl">1.3k</h3>
                                    <h3 className="t-op-nextlvl">220</h3>
                                    <h3 className="t-op-nextlvl label-tag">Published</h3>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />

        </div>
    )
}

export default Dashboard1


