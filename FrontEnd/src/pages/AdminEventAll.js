import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminEventAll extends Component{
  constructor(){
    super();
    this.state={
      AllEvent:[]
    }
  }
  async getAllEvent(){
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    var res= await fetch('https://localhost:7156/api/AdminEvent/GetListEvent',{method:'get',headers:myHeaders});
    var data= await res.json();
    this.setState({
      AllEvent:data
    })
  }
  displayEvent(){
    const result=this.state.AllEvent.map((e,index)=>{
      const status= e.status===1? (<span className="label label-success">Active</span> ) : (<span className="label label-danger">UnActive</span>);
      return(
      <tr key={index}>
        <td>{e.id}</td>
        <td><span className="list-img"><img src={require('../assets/images/course/sm-1.jpg')} alt="" /></span></td>
        <td>{e.name}</td>
        <td>{new Date(e.startDate).toLocaleString()}</td>
        <td>{new Date(e.endTime).toLocaleString()}</td>
        <td>{e.location}</td>
        <td>
          {status}
        </td>
        <td><Link to={`../AdminEventEdit/${e.id}`} className="label label-warning text-white">Edit</Link></td>
      </tr>
      )
    });
    return result;
  }
  componentDidMount(){
    this.getAllEvent();
  }
  componentDidUpdate(){
    console.log(this.state.AllEvent);
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
                    <li className="active-bre"><span> Events</span>
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
                          <h4>All Events</h4>
                          <p>All about students like name, student id, phone, email, country, city and more</p>
                        </div>
                        <div className="tab-inn">
                          <div className="table-responsive table-desi">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Image</th>
                                  <th>Name</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                  <th>Location</th>
                                  <th>Status</th>
                                  <th>Edit</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.displayEvent()}
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