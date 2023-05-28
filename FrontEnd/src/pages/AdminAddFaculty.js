import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminAddFaculty = () => {
  const [formData, setFormData] = useState({
    name: '',
    facultyCode: '',
    descreption: '',
    status: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      name: formData.name,
      facultyCode: formData.facultyCode,
      descreption: formData.descreption,
      status: formData.status,
    };
    
    // Send the data to the API
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
    
    fetch('https://localhost:7156/api/AdminFaculty/Create', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if(response.ok)
        {
          let navigate = window.confirm("ADD SUCCESS!")
          if(navigate===true){window.location.href="/AdminFacultyAll"};}
        else{
          alert("ADD SUCCESS!");
        }
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });
  };

  return (
    <div>
    <HeaderAdmin/>
{/*== BODY CONTNAINER ==*/}
<div className="container-fluid sb2">
  <div className="row">
    {/*== BODY INNER CONTAINER ==*/}
    <SidebarAdmin/>
        {/*== BODY INNER CONTAINER ==*/}
        <div className="sb2-2" style={{height:1500}}>
          {/*== breadcrumbs ==*/}
          <div className="sb2-2-2">
            <ul>
              <li><Link to="../Admin"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
              </li>
              <li className="active-bre"><span> Add new faculty</span>
              </li>
              <li className="page-back"><Link to="../AdminFacultyAll"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
              </li>
            </ul>
          </div>
          {/*== User Details ==*/}
          <div className="sb2-2-3">
            <div className="row">
              <div className="col-md-12">
                <div className="box-inn-sp admin-form">
                  <div className="sb2-2-add-blog sb2-2-1">
                    <h2>Add New Faculty</h2>
                    <form onSubmit={e=>handleSubmit(e)}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" required id="name" name="name" placeholder="Enter name" onChange={e=>handleChange(e)}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="facultyCode" className="form-label">Faculty Code:</label>
                        <input type="text" className="form-control" required id="facultyCode" name="facultyCode" placeholder="Enter faculty code" onChange={e=>handleChange(e)}/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="descreption" className="form-label">Description:</label>
                        <input type="text" className="form-control" id="descreption" name="descreption" placeholder="Enter description" onChange={e=>handleChange(e)}/>
                      </div>
                      <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select className="form-select form-select-lg" required id="status" name="status" onChange={e=>handleChange(e)}>
                              <option>Choose status</option>
                              <option value="1">Active</option>
                              <option value="0">Inactive</option>
                              <option value="2">Locked</option>
                            </select>
                      </div>
                      <button type="submit" className="btn btn-primary">Submit</button>
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
};

export default AdminAddFaculty;