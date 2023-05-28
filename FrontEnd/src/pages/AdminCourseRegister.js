import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { HeaderAdmin } from '../components/HeaderAdmin';
import { SidebarAdmin } from '../components/SidebarAdmin';

const AdminCourseRegister = () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
    
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const GetData = async () => {
            const result = await fetch('https://localhost:7156/api/AdminCourse/GetListCourseRegister',
            {method: 'GET',headers: myHeaders});
            const response = await result.json();
            setData(response);
        }
        GetData();
    }, []);
    console.log(data);
    
    const ConfirmedOrRefused = (id,status) => {
        const PutData = async () => {
            await fetch('https://localhost:7156/api/AdminCourse/ConfirmedOrRefusedCreate',
            {method: 'PUT',
            headers: myHeaders,
            body: JSON.stringify({id : parseInt(id),status: parseInt(status)})})
            
            .then(response => {
                if(response.ok){
                  let navigate = window.confirm("SUCCESS!")
                  if(navigate===true){window.location.href="/AdminCourseRegister"};
                }else{
                    alert("FAILED!");
                }
              })
              .catch(error => {
                console.error('Error sending form data:', error);
              });;
        }
        PutData();
    };
    
    const DisplayAllPending = ()=>{
        const result = data.map((e,index)=>{
                return(  
                        <tr key={index}>
                        <th>{e.scholar.name}</th>
                        <th>{e.scholar.email}</th>
                        <th>{e.course.courseCode}</th>
                        <th>{e.course.name}</th>
                        <th>{e.tuitionFees}USD</th>
                        <th>
                            <button onClick={()=>ConfirmedOrRefused(e.id,1)} className="onclick label label-success">ACCEPTED</button>
                        </th>
                        <th>
                            <button onClick={()=>ConfirmedOrRefused(e.id,0)} className="onclick label label-danger">REJECTED</button>
                        </th>
                        </tr>
                )
              });
        return result;
    } 
    
    return (
        <div>
          {/*== MAIN CONTRAINER ==*/}
          <HeaderAdmin />
          {/*== BODY CONTNAINER ==*/}
          <div className="container-fluid sb2">
            <div className="row">
              <SidebarAdmin />
              {/*== BODY INNER CONTAINER ==*/}
              <div className="sb2-2" style={{height:1500}}>
                {/*== breadcrumbs ==*/}
                <div className="sb2-2-2">
                  <ul>
                    <li>
                      <Link to="../Admin">
                        <i className="fa fa-home" aria-hidden="true" /> Home
                      </Link>
                    </li>
                    <li className="active-bre">
                      <span>Course Register Management</span>
                    </li>
                    <li className="page-back">
                      <Link to="../Admin">
                        <i className="fa fa-backward" aria-hidden="true" /> Back
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*== User Details ==*/}
                <div className="sb2-2-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-inn-sp">
                        <div className="inn-title">
                          <h4>Course Register Management</h4>
                        </div>
                        <div className="tab-inn">
                          <div className="table-responsive table-desi">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Scholar Name</th>
                                  <th>Email</th>
                                  <th>Course Code</th>
                                  <th>Course Name</th>
                                  <th>tuitionFees</th>
                                  <th></th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                              {DisplayAllPending()}
                              </tbody>
                            </table>
                          </div>
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

export default AdminCourseRegister;