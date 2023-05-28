import React,{useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";

const AdminViewEnquiry = () => {
  
  const id = useParams().id;
  
  var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
  
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const GetData = async () => {
      const result = await fetch(`https://localhost:7156/api/AdminFeedBack/GetDetail/${id}`,
      {method: 'GET',headers: myHeaders});
      const response = await result.json();
      setData(response);
    }
    GetData();
  }, []);
  
  const DisplayAllFeedback = ()=>{
    const result = data.map((e,index)=>{
            return(  
              <tr key={index}>
                <td>{e.account.name}</td>
                <td>{e.account.email}</td>
                <td>{e.account.phoneNumber}</td>
                <td>{new Date(e.createDate).toLocaleString()}</td>
                <td>{e.message}</td>
              </tr>
            )
          });
    return result;
  } 
  console.log(data);
  
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
                <li className="active-bre"><span> View Enquiry</span>
                </li>
                <li className="page-back"><Link to="../AdminCourseEnquiry"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                </li>
              </ul>
            </div>
            {/*== User Details ==*/}
            <div className="sb2-2-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-inn-sp">
                    <div className="inn-title">
                      <h4>View Feedback</h4>
                    </div>
                    <div className="tab-inn">
                      <div className="table-responsive table-desi">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Scholar</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th>Feedback Date</th>
                              <th>Message</th>
                            </tr>
                          </thead>
                          <tbody>
                            {DisplayAllFeedback()}
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

export default AdminViewEnquiry;