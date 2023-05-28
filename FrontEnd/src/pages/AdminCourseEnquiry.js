import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminCourseEnquiry extends Component{
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      courseFeedbacks: [],
    };
  }
  
  async DeleteCourseFeedback(id) {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
    const response = await fetch(`https://localhost:7156/api/AdminFeedBack/Delete/${id}`, {
      method: "DELETE",
      headers: myHeaders
    });
    if(response.ok){
      let navigate = window.confirm("SUCCESS!")
      if(navigate===true){window.location.href="/AdminCourseEnquiry"};
    }else{
        alert("FAILED!");
    }
  };
  
  async GetListCourseFeedbacks() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    const response = await fetch("https://localhost:7156/api/AdminFeedBack/GetList", {
      method: "GET",
      headers: myHeaders,
    });
    const courseFeedbacks = await response.json();
    this.setState({ courseFeedbacks: courseFeedbacks });
  }
  
  DisplayCourseFeedbacks() {
    const result = this.state.courseFeedbacks;
    const arrayDisplay = result.map((e,index) => {
      return (
        <tr key={index}>
          <td className="align-middle">{e.account.name}</td>
          <td className="align-middle">{e.course.name}</td>
          <td className="align-middle">{e.message}</td>
          <td className="align-middle text-center"><button className="btn btn-success btn-sm text-capitalize" onClick={()=>window.location.href=`/AdminViewEnquiry/${e.id}`}>View</button></td>
          <td className="align-middle text-center"><button className="btn btn-danger btn-sm text-capitalize" onClick={()=>this.DeleteCourseFeedback(e.id)}>Delete</button></td>
        </tr>
      );
    });
    return arrayDisplay;
  }
  
  componentDidMount() {
    this.GetListCourseFeedbacks();
  }
  
    render() {

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
                    <li className="active-bre"><span>Course Feedback</span>
                    </li>
                    <li className="page-back"><Link to="../Admin"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                    </li>
                  </ul>
                </div>
                {/*== User Details ==*/}
                <div className="sb2-2-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-inn-sp">
                        <div className="inn-title">
                          <h4>Course Feedback</h4>
                        </div>
                        <div className="tab-inn">
                          <div className="table-responsive table-desi">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Scholar</th>
                                  <th>Course</th>
                                  <th>Message</th>
                                  <th className="text-center">View</th>
                                  <th className="text-center">Delete</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.DisplayCourseFeedbacks()}
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
    }
  };
