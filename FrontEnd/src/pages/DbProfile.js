import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderClient } from '../components/HeaderClient';
import { FooterClient } from '../components/FooterClient';
export class DbProfile extends Component {
    constructor() {
        super();
        this.state = {
            Scholar: JSON.parse(localStorage.getItem('Account')),
        };
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
                                            <img src={require('../assets/images/icon/db1.png')} alt="" /> My Profile
                                        </h4>
                                        <p>
                                            It is a long established fact that a reader will be distracted by the
                                            readable content of a page when looking at its components. The point of
                                            using Lorem Ipsum is that it has a more-or-less normal distribution of
                                            letters, as opposed to using 'Content here, content here', making it look
                                            like readable English.
                                        </p>
                                        <div className="sdb-tabl-com sdb-pro-table">
                                            <table className="responsive-table bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Student Name</td>
                                                        <td>:</td>
                                                        <td> {this.state.Scholar.name} </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Student Id</td>
                                                        <td>:</td>
                                                        <td> {this.state.Scholar.id} </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Email</td>
                                                        <td>:</td>
                                                        <td> {this.state.Scholar.email} </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone</td>
                                                        <td>:</td>
                                                        <td> {this.state.Scholar.phoneNumber} </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date of birth</td>
                                                        <td>:</td>
                                                        <td> {this.state.Scholar.dateOfbirth} </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Address</td>
                                                        <td>:</td>
                                                        <td> {this.state.Scholar.address} </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Status</td>
                                                        <td>:</td>
                                                        <td>
                                                            <span className="db-done">Active</span>{' '}
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className="sdb-bot-edit">
                                                <p>
                                                    It is a long established fact that a reader will be distracted by
                                                    the readable content of a page when looking at its components. The
                                                    point of using Lorem Ipsum is that it has a more-or-less normal
                                                    distribution of letters
                                                </p>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
                {/*SECTION END*/}
                {/*SECTION START*/}
                <FooterClient />
                {/*Import jQuery before materialize.js*/}
            </div>
        );
    }
}
