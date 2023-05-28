import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderAdmin } from '../components/HeaderAdmin';
import { SidebarAdmin } from '../components/SidebarAdmin';
export class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AllCouses: [],
            AllScholar: [],
            AllCourseRegister: [],
            AllFeedback: [],
        };
    }
    async getCouses() {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            var res = await fetch('https://localhost:7156/api/AdminCourse/GetListCourse', {
                method: 'get',
                headers: myHeaders,
            });
            var data = await res.json();
            this.setState({
                AllCouses: data,
            });
        } catch (err) {
            console.log(err);
        }
    }
    async getScholar() {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            var res = await fetch('https://localhost:7156/api/AdminScholar/GetListScholar', {
                method: 'get',
                headers: myHeaders,
            });
            var data = await res.json();
            this.setState({
                AllScholar: data,
            });
        } catch (err) {
            console.log(err);
        }
    }
    async getRegisterPending() {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            var res = await fetch('https://localhost:7156/api/AdminCourse/GetListCourseRegister', {
                method: 'get',
                headers: myHeaders,
            });
            var data = await res.json();
            this.setState({
                AllCourseRegister: data,
            });
        } catch (err) {
            console.log(err);
        }
    }
    async getFeedback() {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            var res = await fetch('https://localhost:7156/api/AdminFeedBack/GetList', {
                method: 'get',
                headers: myHeaders,
            });
            var data = await res.json();
            this.setState({
                AllFeedback: data,
            });
        } catch (err) {
            console.log(err);
        }
    }

    studentDashBoard() {
        const result = this.state.AllScholar.map((e, index) => {
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
                    <td>+01 8574 6854</td>
                    <td>{e.email}</td>
                    <td>Illinois</td>
                    <td>ST10231</td>
                    <td>16 Feb 1987</td>
                    <td>{status}</td>
                    <td>
                        <Link to="../admin-student-details" className="label label-info text-white">
                            View
                        </Link>
                    </td>
                </tr>
            );
        });
        return result;
    }
    CourseDashnoard() {
        const resultCourse = this.state.AllCouses.map((e, index) => {
            const min = 1;
            const max = 90;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return (
                <tr key={index}>
                    <td>
                        <span className="list-img">
                            <img src={`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`} alt="" />
                        </span>
                    </td>
                    <td>
                        <Link to="../admin-student-details">
                            <span className="list-enq-name">{e.name}</span>
                            <span className="list-enq-city">{e.courseType}</span>
                        </Link>
                    </td>
                    <td>{e.courseCode}</td>
                    <td>60 Days(420hrs)</td>
                    <td>03 Jun 2023</td>
                    <td>12 Aug 2023</td>
                    <td>{e.tuitionFees}</td>
                    <td>
                        <span className="label label-success">Active</span>
                    </td>
                    <td>
                        <Link to="../admin-student-details" className="label label-info text-white">
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
        this.getScholar();
        this.getRegisterPending();
        this.getFeedback();
    }
    componentDidUpdate() {
        console.log(this.state.AllCouses);
        console.log(this.state.AllScholar);
        console.log(this.state.AllFeedback);
        console.log(this.state.AllCourseRegister);
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
                        <div className="sb2-2">
                            {/*== breadcrumbs ==*/}
                            <div className="sb2-2-2">
                                <ul>
                                    <li>
                                        <span>
                                            <i className="fa fa-home" aria-hidden="true" /> Admin
                                        </span>
                                    </li>
                                    <li className="active-bre">
                                        <span> Dashboard</span>
                                    </li>
                                </ul>
                            </div>
                            {/*== DASHBOARD INFO ==*/}
                            <div className="sb2-2-1">
                                <h2>Admin Dashboard</h2>
                                <div className="db-2">
                                    <ul>
                                        <li>
                                            <div className="dash-book dash-b-1">
                                                <h5>All Courses</h5>
                                                <h4>{this.state.AllCouses.length} </h4>
                                                <Link to="../AdminAllCourses">View more</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dash-book dash-b-2">
                                                <h5>Register</h5>
                                                <h4>{parseInt(this.state.AllCourseRegister.length)}</h4>
                                                <Link to="../AdminCourseRegister">View more</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dash-book dash-b-3">
                                                <h5>Scholars</h5>
                                                <h4>{this.state.AllScholar.length}</h4>
                                                <Link to="../AdminUserAll">View more</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dash-book dash-b-4">
                                                <h5>Feedbacks</h5>
                                                <h4>{this.state.AllFeedback.length}</h4>
                                                <Link to="../AdminCourseEnquiry">View more</Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
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
                            {/*== User Details ==*/}
                            <div className="sb2-2-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="box-inn-sp">
                                            <div className="inn-title">
                                                <h4>Course Details</h4>
                                                <p>
                                                    All about courses, program structure, fees, best course lists
                                                    (ranking), syllabus, teaching techniques and other details.
                                                </p>
                                            </div>
                                            <div className="tab-inn">
                                                <div className="table-responsive table-desi">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Image</th>
                                                                <th>Course Name</th>
                                                                <th>Category</th>
                                                                <th>Durations</th>
                                                                <th>Start Date</th>
                                                                <th>End Date</th>
                                                                <th>Total Seats</th>
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
                            {/*== Latest Activity ==*/}
                            <div className="sb2-2-3">
                                <div className="row">
                                    {/*== Latest Activity ==*/}
                                    <div className="col-md-6">
                                        <div className="box-inn-sp">
                                            <div className="inn-title">
                                                <h4>Latest Activity</h4>
                                                <p>Education is about teaching, learning skills and knowledge.</p>
                                            </div>
                                            <div className="tab-inn list-act-hom">
                                                <ul>
                                                    <li className="list-act-hom-con">
                                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                                        <h4>
                                                            <span>12 may, 2017</span> Welcome to Academy
                                                        </h4>
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour.
                                                        </p>
                                                    </li>
                                                    <li className="list-act-hom-con">
                                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                                        <h4>
                                                            <span>08 Jun, 2017</span> Academy Leadership
                                                        </h4>
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour.
                                                        </p>
                                                    </li>
                                                    <li className="list-act-hom-con">
                                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                                        <h4>
                                                            <span>27 July, 2017</span> Awards and Achievement
                                                        </h4>
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour.
                                                        </p>
                                                    </li>
                                                    <li className="list-act-hom-con">
                                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                                        <h4>
                                                            <span>14 Aug, 2017</span> Facilities and Management
                                                        </h4>
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour.
                                                        </p>
                                                    </li>
                                                    <li className="list-act-hom-con">
                                                        <i className="fa fa-clock-o" aria-hidden="true" />
                                                        <h4>
                                                            <span>24 Sep, 2017</span> Nation award winning 2017
                                                        </h4>
                                                        <p>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour.
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/*== Social Media ==*/}
                                    <div className="col-md-6">
                                        <div className="box-inn-sp">
                                            <div className="inn-title">
                                                <h4>Social Media</h4>
                                                <p>Education is about teaching, learning skills and knowledge.</p>
                                            </div>
                                            <div className="tab-inn">
                                                <div className="table-responsive table-desi">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Media</th>
                                                                <th>Name</th>
                                                                <th>Share</th>
                                                                <th>Like</th>
                                                                <th>Members</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <span className="list-img">
                                                                        <img
                                                                            src={require('../assets/images/sm/1.png')}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="list-enq-name">Linked In</span>
                                                                    <span className="list-enq-city">
                                                                        Illunois, United States
                                                                    </span>
                                                                </td>
                                                                <td>15K</td>
                                                                <td>18K</td>
                                                                <td>
                                                                    <span className="label label-success">263</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="list-img">
                                                                        <img
                                                                            src={require('../assets/images/sm/2.png')}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="list-enq-name">Twitter</span>
                                                                    <span className="list-enq-city">
                                                                        Illunois, United States
                                                                    </span>
                                                                </td>
                                                                <td>15K</td>
                                                                <td>18K</td>
                                                                <td>
                                                                    <span className="label label-success">263</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="list-img">
                                                                        <img
                                                                            src={require('../assets/images/sm/3.png')}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="list-enq-name">Facebook</span>
                                                                    <span className="list-enq-city">
                                                                        Illunois, United States
                                                                    </span>
                                                                </td>
                                                                <td>15K</td>
                                                                <td>18K</td>
                                                                <td>
                                                                    <span className="label label-success">263</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="list-img">
                                                                        <img
                                                                            src={require('../assets/images/sm/4.png')}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="list-enq-name">Google Plus</span>
                                                                    <span className="list-enq-city">
                                                                        Illunois, United States
                                                                    </span>
                                                                </td>
                                                                <td>15K</td>
                                                                <td>18K</td>
                                                                <td>
                                                                    <span className="label label-success">263</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="list-img">
                                                                        <img
                                                                            src={require('../assets/images/sm/5.png')}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="list-enq-name">YouTube</span>
                                                                    <span className="list-enq-city">
                                                                        Illunois, United States
                                                                    </span>
                                                                </td>
                                                                <td>15K</td>
                                                                <td>18K</td>
                                                                <td>
                                                                    <span className="label label-success">263</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="list-img">
                                                                        <img
                                                                            src={require('../assets/images/sm/6.png')}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="list-enq-name">WhatsApp</span>
                                                                    <span className="list-enq-city">
                                                                        Illunois, United States
                                                                    </span>
                                                                </td>
                                                                <td>15K</td>
                                                                <td>18K</td>
                                                                <td>
                                                                    <span className="label label-success">263</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="list-img">
                                                                        <img
                                                                            src={require('../assets/images/sm/7.png')}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="list-enq-name">VK</span>
                                                                    <span className="list-enq-city">
                                                                        Illunois, United States
                                                                    </span>
                                                                </td>
                                                                <td>15K</td>
                                                                <td>18K</td>
                                                                <td>
                                                                    <span className="label label-success">263</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <span className="list-img">
                                                                        <img
                                                                            src={require('../assets/images/sm/2.png')}
                                                                            alt=""
                                                                        />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <span className="list-enq-name">Twitter</span>
                                                                    <span className="list-enq-city">
                                                                        Illunois, United States
                                                                    </span>
                                                                </td>
                                                                <td>15K</td>
                                                                <td>18K</td>
                                                                <td>
                                                                    <span className="label label-success">263</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*== User Details ==*/}
                            <div className="sb2-2-3">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="box-inn-sp">
                                            <div className="inn-title">
                                                <h4>Google Map</h4>
                                                <p>Education is about teaching, learning skills and knowledge.</p>
                                            </div>
                                            <div className="tab-inn">
                                                <div className="table-responsive table-desi tab-map">
                                                    <iframe
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005"
                                                        title={'Google map'}
                                                        allowFullScreen
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
