import React, {useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminEditBatch = ()=>{
  const id = useParams().id;
  
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
  myHeaders.append('Content-Type', 'application/json');
    
  const [formData, setFormData] = useState({
    name: '',
    batchCode: '',
    fromDate: '',
    toDate: '',
  });
  
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const response = await fetch(`https://localhost:7156/api/AdminBatch/Detail/${id}`,
            {method: 'GET',headers:myHeaders});
            if(response.ok)
            {
              const jsonData = await response.json();
              setFormData(jsonData);
            }else{
              console.log('Error occurred:', response.status);
            }
          }catch (error) {
            console.log('Error occurred:', error.message);
          }
    };
    fetchData();
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
        name: formData.name,
        batchCode: formData.batchCode,
        fromDate: formData.fromDate,
        toDate: formData.toDate,
    };
    console.log(requestBody);
    
    // Send the data to the API
    fetch(`https://localhost:7156/api/AdminBatch/Edit/${id}`, {
      method: 'PUT',
      headers:myHeaders,
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if(response.ok)
        {
          let navigate = window.confirm("EDIT SUCCESS!")
          if(navigate===true){window.location.href="/AdminBatchAll"};
        }else{
          alert("EDIT FAILED!");
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
                <li className="active-bre"><span> Edit Batch</span>
                </li>
                <li className="page-back"><Link to="../AdminBatchAll"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                </li>
              </ul>
            </div>
            {/*== User Details ==*/}
            <div className="sb2-2-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-inn-sp admin-form">
                    <div className="inn-title">
                      <h4>Edit Batch</h4>
                    </div>
                    <div className="tab-inn">
                      <form onSubmit={e=>handleSubmit(e)}>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name:</label>
                          <input type="text" className="form-control" required id="name" name="name" value={formData.name} placeholder="Enter name" onChange={e=>handleChange(e)}/>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="facultyCode" className="form-label">Batch Code:</label>
                          <input type="text" className="form-control" required id="facultyCode" name="facultyCode" value={formData.batchCode} placeholder="Enter faculty code" onChange={e=>handleChange(e)}/>
                        </div>
                            <div className="mb-3">
                            <label htmlFor="fromDate" className="form-label">From Date:</label>
                            <input type="datetime-local" className="form-control" required id="fromDate" name="fromDate" value={formData.fromDate} placeholder="Enter starting date" onChange={e=>handleChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="toDate" className="form-label">To Date:</label>
                            <input type="datetime-local" className="form-control" required id="toDate" name="toDate" value={formData.toDate} placeholder="Enter ending date" onChange={e=>handleChange(e)}/>
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

export default AdminEditBatch;
