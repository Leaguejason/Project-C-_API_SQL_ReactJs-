import React,{useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminViewFaculty = () => {
  const id = useParams().id;
  
  var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
    
  const [formData, setFormData] = useState({
    name: '',
    facultyCode: '',
    descreption: '',
    status: '',
    descreption: '',
  });
  
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const response = await fetch(`https://localhost:7156/api/AdminFaculty/Detail/${id}`,
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
              <li className="active-bre"><span> View faculty details</span>
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
                    <h2>View Course Details</h2>
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" disable id="name" name="name" value={formData.name} placeholder="Enter name"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="facultyCode" className="form-label">Faculty Code:</label>
                        <input type="text" className="form-control" disable id="facultyCode" name="facultyCode" value={formData.facultyCode} placeholder="Enter faculty code"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="descreption" className="form-label">Description:</label>
                        <input type="text" className="form-control" disable id="descreption" name="descreption" value={formData.descreption} placeholder="Enter description"/>
                      </div>
                      <div className="mb-3">
                            <label htmlFor="status" className="form-label">Status</label>
                            <select className="form-select form-select-lg" disable id="status" name="status" value={formData.status}>
                              <option>Choose status</option>
                              <option value="1">Active</option>
                              <option value="0">Inactive</option>
                              <option value="2">Locked</option>
                            </select>
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
};

export default AdminViewFaculty;