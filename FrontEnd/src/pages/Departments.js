import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class Departments extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/* MOBILE MENU */}
   
          {/*HEADER SECTION*/}
          <section>
            {/* TOP BAR */}
            <div className="ed-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="ed-com-t1-left">
                      <ul>
                        <li><Link to="../#">Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.</Link>
                        </li>
                        <li><Link to="../#">Phone: +101-1231-1231</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="ed-com-t1-right">
                      <ul>
                        <li><Link to="../#!" data-toggle="modal" data-target="#modal1">Sign In</Link>
                        </li>
                        <li><Link to="../#!" data-toggle="modal" data-target="#modal2">Sign Up</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="ed-com-t1-social">
                      <ul>
                        <li><Link to="../#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                        </li>
                        <li><Link to="../#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                        </li>
                        <li><Link to="../#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* LOGO AND MENU SECTION */}
            <div className="top-logo" data-spy="affix" data-offset-top={250}>
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="wed-logo">
                      <Link to="../"><img src={require('../assets/images/logo.png')} alt="" />
                      </Link>
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li><Link to="../">Home</Link>
                        </li>
                        <li className="about-menu">
                          <Link to="../about" className="mm-arr">About us</Link>
                          {/* MEGA MENU 1 */}
                          <div className="mm-pos">
                            <div className="about-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay menu-about" href="admission">
                                      <img src={require('../assets/images/h-about.jpg')} alt="" />
                                      <span>Academics</span>
                                    </Link>
                                  </div>
                                </div>
                                <div className="mm1-com mm1-s2">
                                  <p>Want to change the world? At Berkeley we’re doing just that. When you join the Golden Bear community, you’re part of an institution that shifts the global conversation every single day.</p>
                                  <Link to="../about" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm1-com mm1-s3">
                                  <ul>
                                    <li><Link to="../all-courses">All Courses</Link></li>
                                    <li><Link to="../course-details">Course details</Link></li>
                                    <li><Link to="../about">About</Link></li>
                                    <li><Link to="../admission">Admission</Link></li>
                                    <li><Link to="../awards">Awards</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-s4">
                                  <ul>
                                    <li><Link to="../dashboard">Student profile</Link></li>
                                    <li><Link to="../db-courses">Dashboard courses</Link></li>
                                    <li><Link to="../db-exams">Dashboard exams</Link></li>
                                    <li><Link to="../db-profile">Dashboard profile</Link></li>
                                    <li><Link to="../db-time-line">Dashboard timeline</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="admi-menu">
                          <Link to="../#" className="mm-arr">Admission</Link>
                          {/* MEGA MENU 1 */}
                          <div className="mm-pos">
                            <div className="admi-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="about">
                                      <img src={require('../assets/images/h-about1.jpg')} alt="" />
                                      <span>Academics</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="../about" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="admission">
                                      <img src={require('../assets/images/h-adm1.jpg')} alt="" />
                                      <span>Admission</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="../admission" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="awards">
                                      <img src={require('../assets/images/h-cam1.jpg')} alt="" />
                                      <span>History &amp; awards</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="../awards" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s4">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="seminar">
                                      <img src={require('../assets/images/h-res1.jpg')} alt="" />
                                      <span>Seminar 2023</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="../seminar" className="mm-r-m-btn">Read more</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li><Link to="../all-courses">All Courses</Link></li>
                        {/*<li><Link class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</Link></li>*/}
                        <li className="cour-menu">
                          <Link to="../#!" className="mm-arr">All Pages</Link>
                          {/* MEGA MENU 1 */}
                          <div className="mm-pos">
                            <div className="cour-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Frontend pages:1</h4>
                                  <ul>
                                    <li><Link to="../">Home</Link></li>
                                    <li><Link to="../-1">Home - 1</Link></li>
                                    <li><Link to="../all-courses">All Courses</Link></li>
                                    <li><Link to="../course-details">Course Details</Link></li>
                                    <li><Link to="../about">About us</Link></li>
                                    <li><Link to="../admission">admission</Link></li>
                                    <li><Link to="../awards">awards</Link></li>
                                    <li><Link to="../blog">blog</Link></li>
                                    <li><Link to="../blog-details">blog details</Link></li>
                                    <li><Link to="../contact-us">contact us</Link></li>
                                    <li><Link to="../departments">Departments</Link></li>
                                    <li><Link to="../events">events</Link></li>
                                    <li><Link to="../event-details">event details</Link></li>
                                    <li><Link to="../event-register">event register</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Frontend pages:2</h4>
                                  <ul>
                                    <li><Link to="../facilities">facilities</Link></li>
                                    <li><Link to="../facilities-detail">facilities detail</Link></li>
                                    <li><Link to="../research">research</Link></li>
                                    <li><Link to="../seminar">seminar</Link></li>
                                    <li><Link to="../gallery-photo">gallery photo</Link></li>
                                  </ul>
                                  <h4 className="ed-dr-men-mar-top">User Dashboard</h4>
                                  <ul>
                                    <li><Link to="../dashboard">Student profile</Link></li>
                                    <li><Link to="../db-courses">Dashboard courses</Link></li>
                                    <li><Link to="../db-exams">Dashboard exams</Link></li>
                                    <li><Link to="../db-profile">Dashboard profile</Link></li>
                                    <li><Link to="../db-time-line">Dashboard timeline</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Admin panel:1</h4>
                                  <ul>
                                    <li><Link to="../admin">admin</Link></li>
                                    <li><Link to="../admin-add-courses">Add new course</Link></li>
                                    <li><Link to="../admin-all-courses">All courses</Link></li>
                                    <li><Link to="../admin-student-details">Student details</Link></li>
                                    <li><Link to="../admin-user-add">Add new user</Link></li>
                                    <li><Link to="../admin-user-all">All users</Link></li>
                                    <li><Link to="../admin-panel-setting">Admin setting</Link></li>
                                    <li><Link to="../admin-event-add">event add</Link></li>
                                    <li><Link to="../admin-event-all">event all</Link></li>
                                    <li><Link to="../admin-setting">Admin Setting</Link></li>
                                    <li><Link to="../admin-slider">Slider setting</Link></li>
                                    <li><Link to="../admin-slider-edit">Slider edit</Link></li>
                                    <li><Link to="../admin-course-details">course details</Link></li>
                                    <li><Link to="../admin-login">admin login</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Admin panel:2</h4>
                                  <ul>
                                    <li><Link to="../admin-event-edit">event edit</Link></li>
                                    <li><Link to="../admin-exam-add">exam add</Link></li>
                                    <li><Link to="../admin-exam-all">exam all</Link></li>
                                    <li><Link to="../admin-exam-edit">exam edit</Link></li>
                                    <li><Link to="../admin-export-data">export data</Link></li>
                                    <li><Link to="../admin-import-data">import data</Link></li>
                                    <li><Link to="../admin-job-add">Add new jobs</Link></li>
                                    <li><Link to="../admin-job-all">All jobs</Link></li>
                                    <li><Link to="../admin-job-edit">Edit job</Link></li>
                                    <li><Link to="../admin-main-menu">main menu</Link></li>
                                    <li><Link to="../admin-page-add">Add new page</Link></li>
                                    <li><Link to="../admin-page-all">All pages</Link></li>
                                    <li><Link to="../admin-page-edit">Edit page</Link></li>
                                    <li><Link to="../admin-forgot">forgot password</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s4">
                                  <h4>Admin panel:3</h4>
                                  <ul>
                                    <li><Link to="../admin-quick-link">quick link</Link></li>
                                    <li><Link to="../admin-seminar-add">Add new seminar</Link></li>
                                    <li><Link to="../admin-seminar-all">All seminar</Link></li>
                                    <li><Link to="../admin-seminar-edit">Edit seminar</Link></li>
                                    <li><Link to="../admin-seminar-enquiry">Semester enquiry</Link></li>
                                    <li><Link to="../admin-all-enquiry">All enquiry</Link></li>
                                    <li><Link to="../admin-view-enquiry">All enquiry view</Link></li>
                                    <li><Link to="../admin-event-enquiry">event enquiry</Link></li>
                                    <li><Link to="../admin-admission-enquiry">Admission enquiry</Link></li>
                                    <li><Link to="../admin-common-enquiry">common enquiry</Link></li>
                                    <li><Link to="../admin-course-enquiry">course enquiry</Link></li>
                                    <li><Link to="../admin-all-menu">menu all</Link></li>
                                    <li><Link to="../admin-about-menu">Menu - About</Link></li>
                                    <li><Link to="../admin-admission-menu">Menu - admission</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li><Link to="../events">Events</Link>
                        </li>
                        <li><Link to="../dashboard">Student</Link>
                        </li>
                        <li><Link to="../contact-us">Contact us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="all-drop-down-menu">
                  </div>
                </div>
              </div>
            </div>
            <div className="search-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="search-form">
                      <form>
                        <div className="sf-type">
                          <div className="sf-input">
                            <input type="text" id="sf-box" placeholder="Search course and discount courses" />
                          </div>
                          <div className="sf-list">
                            <ul>
                              <li><Link to="../course-details">Accounting/Finance</Link></li>
                              <li><Link to="../course-details">civil engineering</Link></li>
                              <li><Link to="../course-details">Art/Design</Link></li>
                              <li><Link to="../course-details">Marine Engineering</Link></li>
                              <li><Link to="../course-details">Business Management</Link></li>
                              <li><Link to="../course-details">Journalism/Writing</Link></li>
                              <li><Link to="../course-details">Physical Education</Link></li>
                              <li><Link to="../course-details">Political Science</Link></li>
                              <li><Link to="../course-details">Sciences</Link></li>
                              <li><Link to="../course-details">Statistics</Link></li>
                              <li><Link to="../course-details">Web Design/Development</Link></li>
                              <li><Link to="../course-details">SEO</Link></li>
                              <li><Link to="../course-details">Google Business</Link></li>
                              <li><Link to="../course-details">Graphics Design</Link></li>
                              <li><Link to="../course-details">Networking Courses</Link></li>
                              <li><Link to="../course-details">Information technology</Link></li>
                            </ul>
                          </div>
                        </div>
                        <div className="sf-submit">
                          <input type="submit" defaultValue="Search Course" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*END HEADER SECTION*/}
          <section>
            <div className="head-2">
              <div className="container">
                <div className="head-2-inn head-2-inn-padd-top">
                  <h1>List of College Departments</h1>
                  <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                  <div className="event-head-sub">
                    <ul>
                      <li>Total Departments: 42</li>
                      <li>Students: 10,000</li>
                      <li>All Courses: 242</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>	
          {/*SECTION START*/}
          <section>
            <div className="ed-res-bg">
              <div className="container com-sp pad-bot-70 ed-res-bg">
                <div className="row">
                  <div className="cor about-sp">
                    <div className="ed-rsear">
                      <div className="ed-rsear-in">
                        <div className="col-md-6">
                        </div>
                      </div>
                    </div>
                    <div className="ed-about-sec1">
                      <div className="col-md-6">
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img ed-faci-full-top">
                            <img src={require('../assets/images/facilities/1.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec ed-faci-full-bot">
                            <h4><Link to="../facilities-detail">Design and Technology Suite</Link></h4>
                            <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                            <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img ed-faci-full-top">
                            <img src={require('../assets/images/facilities/2.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec ed-faci-full-bot">
                            <h4><Link to="../facilities-detail">Science Laboratories</Link></h4>
                            <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                            <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img ed-faci-full-top">
                            <img src={require('../assets/images/facilities/9.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec ed-faci-full-bot">
                            <h4><Link to="../facilities-detail">Recreational Areas</Link></h4>
                            <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                            <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-6.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Mobile Communications</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-5.png')} alt="" /></div>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-1.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Space Research with Nasa</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-1.png')} alt="" /></div>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-2.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Attention deficit disorder</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-2.png')} alt="" /></div>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-4.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Anorexia Nervosa</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-3.png')} alt="" /></div>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-5.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Internet Speed</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-4.png')} alt="" /></div>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-6.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Mobile Communications</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-5.png')} alt="" /></div>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-7.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Learning disabilities</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-6.png')} alt="" /></div>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-8.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Anorexia Nervosa</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-7.png')} alt="" /></div>
                          </div>
                        </div>
                        <div className="ed-rese-grid ed-rese-grid-mar-bot-30">
                          <div className="ed-rsear-img">
                            <img src={require('../assets/images/course/sm-3.jpg')} alt="" />
                          </div>
                          <div className="ed-rsear-dec">
                            <h4><Link to="../#">Internet Speed</Link></h4>
                            <Link to="../#">Status <span>Success</span></Link>
                            <Link to="../#">Duration <span>120 Days</span></Link>
                            <div className="ed-flag"><img src={require('../assets/images/icon/flag-8.png')} alt="" /></div>
                          </div>
                        </div>
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
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                    </div>
                    <div className="col-md-3 bb-link">
                      <Link to="../course-details">Book This Course</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          {/*HEADER SECTION*/}
          
          {/*Import jQuery before materialize.js*/}
        
          <FooterClient/>
          {/*Import jQuery before materialize.js*/}
          </div>
  );
}
};