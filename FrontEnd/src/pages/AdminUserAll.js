import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminUserAll extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
        AllScholar: [],
    };
}
async getScholar() {
    try {
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
        var res = await fetch('https://localhost:7156/api/AdminScholar/GetListScholar', { method: 'get',headers:myHeaders });
        var data = await res.json();
        this.setState({
            AllScholar: data,
        });
    } catch (err) {
        console.log(err);
    }
}
studentDashBoard() {
    const result = this.state.AllScholar.map((e,index) => {
        const min = 1;
        const max = 90;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        const status =
            e.status === 1 ? (
                <span className="label label-success">Active</span>
            ) : (
                <span className="label label-danger">UnActive</span>
            );
        return (
            <tr key={index}>
                <td>
                    <span className="list-img">
                        <img src={`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`} alt="" />
                    </span>
                </td>
                <td>
                    <Link to="../#">
                        <span className="list-enq-name">{e.name}</span>
                        <span className="list-enq-city">{e.address}</span>
                    </Link>
                </td>
                <td>{e.phoneNumber}</td>
                <td>{e.email}</td>
                <td>{e.address}</td>
                <td>{e.id}</td>
                <td>{new Date(e.dateOfbirth).toLocaleDateString()}</td>
                <td>{status}</td>
                <td>
                    <Link to={`../AdminScholarView/${e.id}`} className="label label-info text-white">
                        View
                    </Link>
                </td>
            </tr>
        );
    });
    return result;
}
componentDidMount() {
    this.getScholar();
}
render() {
    return (
        <div>
            <HeaderAdmin />
            {/*== BODY CONTNAINER ==*/}
            <div className="container-fluid sb2">
                <div className="row">
                    {/*== BODY INNER CONTAINER ==*/}
                    <SidebarAdmin />
                    {/*== BODY INNER CONTAINER ==*/}
                    <div className="sb2-2" style={{height:1500}}>
                        {/*== breadcrumbs ==*/}
                        <div className="sb2-2-2">
                            <ul>
                                <li>
                                    <Link to="../index">
                                        <i className="fa fa-home" aria-hidden="true" /> Home
                                    </Link>
                                </li>
                                <li className="active-bre">
                                    <Link to="../#"> Users(Students)</Link>
                                </li>
                                <li className="page-back">
                                    <Link to="../index">
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
                                            <h4>Student Details</h4>
                                            <p>
                                                All about students like name, student id, phone, email, country,
                                                city and more
                                            </p>
                                        </div>
                                        <div className="tab-inn">
                                            <div className="table-responsive table-desi">
                                                <table className="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th>User</th>
                                                            <th>Name</th>
                                                            <th>Phone</th>
                                                            <th>Email</th>
                                                            <th>Country</th>
                                                            <th>Id</th>
                                                            <th>Date of birth</th>
                                                            <th>Status</th>
                                                            <th>View</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>{this.studentDashBoard()}</tbody>
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