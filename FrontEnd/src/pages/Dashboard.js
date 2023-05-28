import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderClient } from '../components/HeaderClient';
import { FooterClient } from '../components/FooterClient';
export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            Scholar: JSON.parse(localStorage.getItem('Account')),
        };
    }

    showRegisterCourse() {
        var list = this.state.Scholar.courseList === null ? [] : this.state.Scholar.courseList;
        const result = list.map((e) => {
            return (
                <li>
                    <Link to={`../CourseDetails/${e.id}`}>
                        <div className="list-mig-like-com com-mar-bot-30">
                            <div className="list-mig-lc-img">
                                {' '}
                                <img src={`${e.image}`} alt="" />{' '}
                                <span className="home-list-pop-rat list-mi-pr">Duration:150 Days</span>
                            </div>
                            <div className="list-mig-lc-con">
                                <h5>{e.name}</h5>
                                <p>{e.courseType}</p>
                            </div>
                        </div>
                    </Link>
                </li>
            );
        });
        return result;
    }
    showCourseStatus() {
        var list = this.state.Scholar.courseList === null ? [] : this.state.Scholar.courseList;
        const result = list.map((e) => {
            var status =
                e.status === 1 ? (
                    <span className="pro-user-act">Active</span>
                ) : (
                    <span className="bg-danger">Non-Active</span>
                );
            var poinAss =
                e.assignmetPoint === null ? (
                    <span className="text-info">Future</span>
                ) : (
                    <span className="text-success"> {e.assignmetPoint} </span>
                );
            var poinExam =
                e.testPoint === null ? (
                    <span className="text-info">Future</span>
                ) : (
                    <span className="text-success"> {e.testPoint} </span>
                );
            var btnUnsub =
                e.status === 1 ? (
                    <button className="btn btn-danger  text-capitalize btn-xs" disabled="true">
                        UnSubribe
                    </button>
                ) : (
                    <button className="btn btn-danger  text-capitalize btn-xs">UnSubribe</button>
                );
            return (
                <tr>
                    <td> {e.courseCode} </td>
                    <td> {e.name} </td>

                    <td>{status}</td>
                    <td>{poinAss}</td>
                    <td>{poinExam}</td>
                    <td>{btnUnsub}</td>
                </tr>
            );
        });
        return result;
    }
    render() {
        return (
            <div>
                {/* MOBILE MENU */}
                <HeaderClient />
                {/*END HEADER SECTION*/}
                {/*SECTION START*/}
                <section>
                    <div className="pro-cover"></div>
                    <div className="pro-menu">
                        <div className="container">
                            <div className="col-md-9 col-md-offset-3">
                                <ul>
                                    <li>
                                        <Link to="../dashboard" className="pro-act">
                                            My Dashboard
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../dbprofile">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="../dbcourses">Courses</Link>
                                    </li>
                                    <li>
                                        <Link to="../dbexams">Exams</Link>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="stu-db">
                        <div className="container pg-inn">
                            <div className="col-md-3">
                                <div className="pro-user">
                                    <img src={require('../assets/images/user.jpg')} alt="user" />
                                </div>
                                <div className="pro-user-bio">
                                    <ul>
                                        <li>
                                            <h4>{this.state.Scholar.name}</h4>
                                        </li>
                                        <li>Student Id: ST{this.state.Scholar.id}</li>
                                        <li>
                                            <Link to="../#!">
                                                <i className="fa fa-facebook" /> Facebook: Facebook.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="../#!">
                                                <i className="fa fa-google-plus" /> Google: Google.com
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="../#!">
                                                <i className="fa fa-twitter" /> Twitter: Twitter.com
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="udb">
                                    <div className="udb-sec udb-prof">
                                        <h4>
                                            <img src={require('../assets/images/icon/db1.png')} alt="" /> My Description
                                        </h4>
                                        <p>{this.state.Scholar.descreption}</p>
                                    </div>
                                    <div className="udb-sec udb-cour">
                                        <h4>
                                            <img src={require('../assets/images/icon/db2.png')} alt="" /> Register
                                            Courses
                                        </h4>
                                        <p>
                                            Many desktop publishing packages and web page editors now use Lorem Ipsum as
                                            their default model text.The point of using Lorem Ipsummaking it look like
                                            readable English.
                                        </p>
                                        <div className="sdb-cours">
                                            <ul>{this.showRegisterCourse()}</ul>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*SECTION END*/}
                {/*SECTION START*/}
                {/*SECTION END*/}
                {/*SECTION START*/}
                <section>
                    <div className="full-bot-book">
                        <div className="container">
                            <div className="row">
                                <div className="bot-book">
                                    <div className="col-md-2 bb-img">
                                        <img src={require('../assets/images/3.png')} alt="" />
                                    </div>
                                    <div className="col-md-7 bb-text">
                                        <h4>therefore always free from repetition</h4>
                                        <p>
                                            There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour
                                        </p>
                                    </div>
                                    <div className="col-md-3 bb-link">
                                        <Link to="../CousrseDetails">Book This Course</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterClient />
                {/*Import jQuery before materialize.js*/}
            </div>
        );
    }
}
