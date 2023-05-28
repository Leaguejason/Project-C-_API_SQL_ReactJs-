import React, {useState} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminEventAdd = ()=>{
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endTime: '',
    location: '',
    status: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      name : formData.name,
      startDate: formData.startDate,
      endTime: formData.endTime,
      location: formData.location,
      status: formData.status,
      description: formData.description,
    };
    console.log(requestBody.startDate);
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
    // Send the data to the API
    fetch('https://localhost:7156/api/AdminEvent/Create', {
      method: 'POST',
      headers:myHeaders,
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if(response.ok)
          {let navigate = window.confirm("ADD SUCCESS!")
          if(navigate===true){window.location.href="/AdminEventAll"};
        }else{
          alert("ADD FAILED!");
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
          <div className="sb2-2">
            {/*== breadcrumbs ==*/}
            <div className="sb2-2-2">
              <ul>
                <li><Link to="../Admin"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                </li>
                <li className="active-bre"><span> Add New Event</span>
                </li>
                <li className="page-back"><Link to="../AdminEventAll"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                </li>
              </ul>
            </div>
            {/*== User Details ==*/}
            <div className="sb2-2-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-inn-sp admin-form">
                    <div className="inn-title">
                      <h4>Add Event</h4>
                      {/* <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p> */}
                    </div>
                    <div className="tab-inn">
                        <form onSubmit={e=>handleSubmit(e)}>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" required className="form-control" id="name" name="name" placeholder="Enter name" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="startDate" className="form-label">Start Date</label>
                            <input type="datetime-local" required className="form-control" name="startDate" id="startDate" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="endTime" className="form-label">End Date</label>
                            <input type="datetime-local" required className="form-control" name="endTime" id="endTime" onChange={e=>handleChange(e)}/>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="location" className="form-label">Location</label>
                            <input type="text" required className="form-control" id="location" name="location" placeholder="Enter location" onChange={e=>handleChange(e)}/>
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
                          <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description</label>
                            <textarea className="form-control" id="description" name="description" rows="3" placeholder="Enter description" onChange={e=>handleChange(e)}></textarea>
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
}

export default AdminEventAdd;