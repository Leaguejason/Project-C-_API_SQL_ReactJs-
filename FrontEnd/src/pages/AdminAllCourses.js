import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderAdmin } from '../components/HeaderAdmin';
import { SidebarAdmin } from '../components/SidebarAdmin';
export class AdminAllCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllCouses: [],
        };
    }
    async getCouses() {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            var res = await fetch('https://localhost:7156/api/AdminCourse/GetListCourse', { method: 'get',headers:myHeaders });
            var data = await res.json();
            this.setState({
                AllCouses: data,
            });
        } catch (err) {
            console.log(err);
        }
    }
    CourseDashnoard() {
        console.log(this.state.AllCouses);
        const resultCourse = this.state.AllCouses.map((e,index) => {
            const min = 1;
            const max = 90;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            
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
                        <span className="list-img">
                            <img src={`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`} alt="" />
                        </span>
                    </td>
                    <td>
                        <Link to={`../AdminViewCourse/${e.id}`}>
                            <span className="list-enq-name">{e.name}</span>
                        </Link>
                    </td>
                    <td>{e.courseType}</td>
                    <td>{e.courseCode}</td>
                    <td>{e.scholarCourses.length}</td>
                    <td>{e.tuitionFees}USD</td>
                    <td>
                        {status()}
                    </td>
                    <td>
                        <Link to={`../AdminViewCourse/${e.id}`} className="label label-info text-white">
                            View
                        </Link>
                    </td>
                </tr>
            );
        });
        return resultCourse;
    }
    componentDidMount() {
        this.getCouses();
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
                                        <span>Courses</span>
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
                                                <h4>List of Courses</h4>
                                            </div>
                                            <div className="tab-inn">
                                                <div className="table-responsive table-desi">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Image</th>
                                                                <th>Course Name</th>
                                                                <th>Category</th>
                                                                <th>Course Code</th>
                                                                <th>Enrollment</th>
                                                                <th>Tuition Fees</th>
                                                                <th>Status</th>
                                                                <th>View</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>{this.CourseDashnoard()}</tbody>
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
