import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { HeaderClient } from '../components/HeaderClient';
import { FooterClient } from '../components/FooterClient';
export class DbExams extends Component {
    constructor(){
        super();
        this.state = {
            Scholar: JSON.parse(localStorage.getItem('Account')),
        };
    }
    showExam(){
        var list =this.state.Scholar.exams===null?[]:this.state.Scholar.exams;
        if(list.length===0) return(
            <p>You don't have any Exam</p>
        )
        var result=list.map(e=>{
            
            var poinExam =
            e.point=== null ? (
                <span className="text-info">Future</span>
            ) : (
                <span className="text-success"> {e.point} </span>
            );
            var status=e.status===0?<span className='btn btn-primary text-center text-light pt-2' style={{marginTop:'10px',display:'block'}}>Not yet</span> : <span style={{marginTop:'10px',display:'block'}} className='btn btn-danger text-center text-light pt-3' >Happened</span>;
            return(
                <li className="l-info-pack-plac">
                {' '}
                <i className="fa fa-clock-o" aria-hidden="true" />
                <div className="sdb-cl-tim">
                    <div className="sdb-cl-day">
                        <h5> {e.examCode} </h5>
                        <span>Start date:   {e.startDate} </span>
                    </div>
                    <div className="sdb-cl-class">
                        <ul>
                            
                            <li>
                                <div className="sdb-cl-class-tim">
                                    <span> {e.startDate} </span>
                                    <span> {e.endDate} </span>
                                </div>
                                <div className="sdb-cl-class-name sdb-cl-class-name-lev">
                                    <h5>
                                        {e.examName}
                                      {status}
                                    </h5>
                                    <span className="text-bold text-warning">
                                       <b>Point: </b> {poinExam}
                                    </span>
                                </div>
                            </li>   
                        </ul>
                    </div>
                </div>
            </li>
            )
        })
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
                                    <div className="udb-sec udb-time">
                                        <h4>
                                            <img src={require('../assets/images/icon/db5.png')} alt="" /> Exam Details
                                        </h4>
                                        <p>
                                            The point of using Lorem Ipsum is that it has a more-or-less normal
                                            distribution of letters, as opposed to using 'Content here, content here',
                                            making it look like readable English.
                                        </p>
                                        <div className="tour_head1 udb-time-line days">
                                            <ul>
                                                {this.showExam()}
                                                <li className="l-info-pack-plac">
                                                    {' '}
                                                   
                                                 
                                                </li>
                                               
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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
