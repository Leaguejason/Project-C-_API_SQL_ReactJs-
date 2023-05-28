import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderAdmin } from '../components/HeaderAdmin';
import { SidebarAdmin } from '../components/SidebarAdmin';

export class AdminFacultyAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllFaculty: [],
        };
    }
    async getFaculty() {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            var res = await fetch('https://localhost:7156/api/AdminFaculty/GetListFaculty', 
            { method: 'get',headers:myHeaders });
            var data = await res.json();
            this.setState({
                AllFaculty: data,
            });
        } catch (err) {
            console.log(err);
        }
    }
    
    FacultyDashnoard() {
        console.log(this.state.AllFaculty);
        const resultFaculty = this.state.AllFaculty.map((e,index) => {
            const status = ()=>{
                if(e.status===1){
                return(
                    <span className="label label-success">Active</span>
                )}else{
                    return(
                        <span className="label label-danger">Inactive</span>
                    )
                }
            }
            return (
                <tr key={index}>
                    <td>
                        <Link to={`../AdminViewFaculty/${e.id}`}>
                            <span className="list-enq-name">{e.name}</span>
                        </Link>
                    </td>
                    <td>{e.facultyCode}</td>
                    <td>{new Date(e.createDate).toLocaleDateString()}</td>
                    <td>{e.scholars.length}</td>
                    <td>
                        {status()}
                    </td>
                    <td>
                        <Link to={`../AdminViewFaculty/${e.id}`} className="label label-info text-white">
                            View
                        </Link>
                    </td>
                    <td>
                        <Link to={`../AdminEditFaculty/${e.id}`} className="label label-warning text-white">
                            Edit
                        </Link>
                    </td>
                </tr>
            );
        });
        return resultFaculty;
    }
    componentDidMount() {
        this.getFaculty();
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
                                        <Link to="../Admin">
                                            <i className="fa fa-home" aria-hidden="true" /> Home
                                        </Link>
                                    </li>
                                    <li className="active-bre">
                                        <span>Faculty</span>
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
                                                <h4>List of Faculties</h4>
                                            </div>
                                            <div className="tab-inn">
                                                <div className="table-responsive table-desi">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Faculty Name</th>
                                                                <th>Faculty Code</th>
                                                                <th>Establishment Date</th>
                                                                <th>Enrollment</th>
                                                                <th>Status</th>
                                                                <th>View</th>
                                                                <th>Edit</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>{this.FacultyDashnoard()}</tbody>
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
}
