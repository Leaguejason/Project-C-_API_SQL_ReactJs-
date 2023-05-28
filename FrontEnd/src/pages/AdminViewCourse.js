import React,{useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminViewCourse = () => {
  const id = useParams().id;
  
  var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
    
  const [formData, setFormData] = useState({
    courseCode: '',
    name: '',
    tuitionFees: '',
    courseType: '',
    description: '',
    image: '',
  });
  
  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const response = await fetch(`https://localhost:7156/api/AdminCourse/GetDetail/${id}`,
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
        <div className="sb2-2">
          {/*== breadcrumbs ==*/}
          <div className="sb2-2-2">
            <ul>
              <li><Link to="../Admin"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
              </li>
              <li className="active-bre"><span> Add new course</span>
              </li>
              <li className="page-back"><Link to="../AdminAllCourse"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
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
                        <label htmlFor="courseCode" className="form-label">Course Code:</label>
                        <input type="text" className="form-control" disabled id="courseCode" name="courseCode" value={formData.courseCode} placeholder="Enter course code"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control" disabled id="name" name="name" value={formData.name} placeholder="Enter name"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="tuitionFees" className="form-label">Tuition Fees:</label>
                        <input type="text" className="form-control" disabled id="tuitionFees" name="tuitionFees" value={formData.tuitionFees} placeholder="Enter tuition fees"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="courseType" className="form-label">Course Type:</label>
                        <input type="text" className="form-control" disabled id="courseType" name="courseType" value={formData.courseType} placeholder="Enter course type"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description:</label>
                        <input type="text" className="form-control" disabled id="description" name="description" value={formData.description} placeholder="Enter description"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="image" className="form-label">Image:</label>
                        <input type="text" className="form-control" disabled id="image" name="image" value={formData.image} placeholder="Enter image URL"/>
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

export default AdminViewCourse;