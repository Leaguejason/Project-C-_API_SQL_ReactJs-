import React,{useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminScholarView = ()=>{
    const id = useParams().id;
  
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
    
    const [formData, setFormData] = useState({
      id: '',
      name: '',
      age: '',
      gender: '',
      address: '',
      status: '',
      email: '',
      phoneNumber: '',
      descreption: '',
      dateOfbirth: '',
      batch: '',
      faculty: '',
    });
  
    useEffect(()=>{
        const fetchCourseDetail = async ()=>{
            try{
                await fetch(`https://localhost:7156/api/AdminScholar/GetDetail/${id}`,
                {method: 'GET',headers:myHeaders})
                .then(res=>res.json()).then(data=>setFormData(data));
              }catch (error) {
                console.log('Error occurred:', error.message);
              }
        };
        fetchCourseDetail();
      }, [])
    console.log(formData.gender);
    return (
      <div>
        <HeaderAdmin/>
    {/*== BODY CONTNAINER ==*/}
    <div className="container-fluid sb2">
      <div className="row">
        {/*== BODY INNER CONTAINER ==*/}
        <SidebarAdmin/>
            {/*== BODY INNER CONTAINER ==*/}
            <div className="sb2-2">
              {/*== breadcrumbs ==*/}
              <div className="sb2-2-2">
                <ul>
                  <li><Link to="../Admin"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                  </li>
                  <li className="active-bre"><span>Scholar Detail</span>
                  </li>
                  <li className="page-back"><Link to="../AdminUserAll"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                  </li>
                </ul>
              </div>
              {/*== User Details ==*/}
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp admin-form">
                      <div className="inn-title">
                        <h4>Add Teacher</h4>
                        <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p>
                      </div>
                      <div className="tab-inn">
                          <form>
                            <div className="mb-3">
                              <label htmlFor="id" className="form-label">ID</label>
                              <input type="number" disabled className="form-control" name="id" value={formData.id} id="id" placeholder="Enter ID"/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="name" className="form-label">Name</label>
                              <input type="text" disabled className="form-control" id="name" name="name" value={formData.name} placeholder="Enter name"/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="age" className="form-label">Age</label>
                              <input type="number" disabled min={0} max={100} className="form-control" id="age" name="age" value={formData.age} placeholder="Enter age"/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="gender" className="form-label">Gender</label>
                              <select className="form-select form-select-lg" disabled id="gender" name="gender" value={formData.gender}>
                                <option>Choose gender</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Others</option>
                              </select>                          
                            </div>
                            <div className="mb-3">
                              <label htmlFor="address" className="form-label">Address</label>
                              <input className="form-control" type="text" disabled id="address" name="address" rows="3" placeholder="Enter address" value={formData.address}/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="status" className="form-label">Status</label>
                              <select className="form-select form-select-lg" disabled id="status" name="status" value={formData.status}>
                                <option>Choose status</option>
                                <option value="1">Active</option>
                                <option value="0">Inactive</option>
                                <option value="2">Locked</option>
                              </select>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="email" className="form-label">Email</label>
                              <input type="email" disabled className="form-control" id="email" name="email" placeholder="Enter email" value={formData.email}/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                              <input className="form-control" type="tel" disabled id="phoneNumber" name="phoneNumber" rows="3" placeholder="Enter phone number" value={formData.phoneNumber}/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="descreption" className="form-label">Description</label>
                              <textarea disabled className="form-control" id="descreption" name="descreption" row="3" value={formData.descreption} placeholder="Enter description"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="dateOfbirth" className="form-label">Date Of Birth</label>
                                <input type="datetime-local" disabled className="form-control" name="dateOfbirth" id="dateOfbirth" value={formData.dateOfbirth}/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="batch" className="form-label">Batch</label>
                              <input className="form-control" type="text" disabled id="batch" name="batch" rows="3" placeholder="Enter batch" value={formData.batch}/>
                            </div>
                            <div className="mb-3">
                              <label htmlFor="faculty" className="form-label">Faculty</label>
                              <input className="form-control" type="text" disabled id="faculty" name="faculty" rows="3" placeholder="Enter faculty" value={formData.faculty}/>
                            </div>
                          </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Import jQuery before materialize.js*/}
      </div>
    );
  }
  
  export default AdminScholarView;
