import React,{Component} from "react";
import { Link } from 'react-router-dom';
export class Blog extends Component{
    render() {

      return (
        <div>
          {/* MOBILE MENU */}
          <section>
            <div className="ed-mob-menu">
              <div className="ed-mob-menu-con">
                <div className="ed-mm-left">
                  <div className="wed-logo">
                    <Link to="/Home"><img src={require('../assets/images/logo.png')} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="ed-mm-right">
                  <div className="ed-mm-menu">
                    <Link to="/#!" className="ed-micon"><i className="fa fa-bars" /></Link>
                    <div className="ed-mm-inn">
                      <Link to="/#!" className="ed-mi-close"><i className="fa fa-times" /></Link>
                      <h4>All Courses</h4>
                      <ul>
                        <li><Link to="/course-details">Accounting/Finance</Link></li>
                        <li><Link to="/course-details">civil engineering</Link></li>
                        <li><Link to="/course-details">Art/Design</Link></li>
                        <li><Link to="/course-details">Marine Engineering</Link></li>
                        <li><Link to="/course-details">Business Management</Link></li>
                        <li><Link to="/course-details">Journalism/Writing</Link></li>
                        <li><Link to="/course-details">Physical Education</Link></li>
                        <li><Link to="/course-details">Political Science</Link></li>
                        <li><Link to="/course-details">Sciences</Link></li>
                        <li><Link to="/course-details">Statistics</Link></li>
                        <li><Link to="/course-details">Web Design/Development</Link></li>
                        <li><Link to="/course-details">SEO</Link></li>
                        <li><Link to="/course-details">Google Business</Link></li>
                        <li><Link to="/course-details">Graphics Design</Link></li>
                        <li><Link to="/course-details">Networking Courses</Link></li>
                        <li><Link to="/course-details">Information technology</Link></li>
                      </ul>
                      <h4>User Account</h4>
                      <ul>
                        <li><Link to="/#!" data-toggle="modal" data-target="#modal1">Sign In</Link></li>
                        <li><Link to="/#!" data-toggle="modal" data-target="#modal2">Register</Link></li>
                      </ul>
                      <h4>All Pages</h4>
                      <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/admission">Admission</Link></li>
                        <li><Link to="/all-courses">All courses</Link></li>
                        <li><Link to="/course-details">Course details</Link></li>
                        <li><Link to="/awards">Awards</Link></li>
                        <li><Link to="/seminar">Seminar</Link></li>
                        <li><Link to="/events">Events</Link></li>
                        <li><Link to="/event-details">Event details</Link></li>
                        <li><Link to="/event-register">Event register</Link></li>
                        <li><Link to="/contact-us">Contact us</Link></li>
                      </ul>
                      <h4>User Profile</h4>
                      <ul>
                        <li><Link to="/dashboard">User profile</Link></li>
                        <li><Link to="/db-courses">Courses</Link></li>
                        <li><Link to="/db-exams">Exams</Link></li>
                        <li><Link to="/db-profile">Prfile</Link></li>
                        <li><Link to="/db-time-line">Time line</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*HEADER SECTION*/}
          <section>
            {/* TOP BAR */}
            <div className="ed-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="ed-com-t1-left">
                      <ul>
                        <li><Link to="/#">Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.</Link>
                        </li>
                        <li><Link to="/#">Phone: +101-1231-1231</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="ed-com-t1-right">
                      <ul>
                        <li><Link to="/#!" data-toggle="modal" data-target="#modal1">Sign In</Link>
                        </li>
                        <li><Link to="/#!" data-toggle="modal" data-target="#modal2">Sign Up</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="ed-com-t1-social">
                      <ul>
                        <li><Link to="/#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                        </li>
                        <li><Link to="/#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                        </li>
                        <li><Link to="/#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
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
                      <Link to="/"><img src={require('../assets/images/logo.png')} alt="" />
                      </Link>
                    </div>
                    <div className="main-menu">
                      <ul>
                        <li><Link to="/">Home</Link>
                        </li>
                        <li className="about-menu">
                          <Link to="/about" className="mm-arr">About us</Link>
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
                                  <Link to="/about" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm1-com mm1-s3">
                                  <ul>
                                    <li><Link to="/all-courses">All Courses</Link></li>
                                    <li><Link to="/course-details">Course details</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/admission">Admission</Link></li>
                                    <li><Link to="/awards">Awards</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-s4">
                                  <ul>
                                    <li><Link to="/dashboard">Student profile</Link></li>
                                    <li><Link to="/db-courses">Dashboard courses</Link></li>
                                    <li><Link to="/db-exams">Dashboard exams</Link></li>
                                    <li><Link to="/db-profile">Dashboard profile</Link></li>
                                    <li><Link to="/db-time-line">Dashboard timeline</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="admi-menu">
                          <Link to="/#" className="mm-arr">Admission</Link>
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
                                  <Link to="/about" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="admission">
                                      <img src={require('../assets/images/h-adm1.jpg')} alt="" />
                                      <span>Admission</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="/admission" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s1">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="awards">
                                      <img src={require('../assets/images/h-cam1.jpg')} alt="" />
                                      <span>History &amp; awards</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="/awards" className="mm-r-m-btn">Read more</Link>
                                </div>
                                <div className="mm2-com mm1-com mm1-s4">
                                  <div className="ed-course-in">
                                    <Link className="course-overlay" href="seminar">
                                      <img src={require('../assets/images/h-res1.jpg')} alt="" />
                                      <span>Seminar 2023</span>
                                    </Link>
                                  </div>
                                  <p>Donec lacus libero, rutrum ac sollicitudin sed, mattis non eros. Vestibulum congue nec eros quis lacinia. Mauris non tincidunt lectus. Nulla mollis, orci vitae accumsan rhoncus.</p>
                                  <Link to="/seminar" className="mm-r-m-btn">Read more</Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li><Link to="/all-courses">All Courses</Link></li>
                        {/*<li><Link class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</Link></li>*/}
                        <li className="cour-menu">
                          <Link to="/#!" className="mm-arr">All Pages</Link>
                          {/* MEGA MENU 1 */}
                          <div className="mm-pos">
                            <div className="cour-mm m-menu">
                              <div className="m-menu-inn">
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Frontend pages:1</h4>
                                  <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/-1">Home - 1</Link></li>
                                    <li><Link to="/all-courses">All Courses</Link></li>
                                    <li><Link to="/course-details">Course Details</Link></li>
                                    <li><Link to="/about">About us</Link></li>
                                    <li><Link to="/admission">admission</Link></li>
                                    <li><Link to="/awards">awards</Link></li>
                                    <li><Link to="/blog">blog</Link></li>
                                    <li><Link to="/blog-details">blog details</Link></li>
                                    <li><Link to="/contact-us">contact us</Link></li>
                                    <li><Link to="/departments">Departments</Link></li>
                                    <li><Link to="/events">events</Link></li>
                                    <li><Link to="/event-details">event details</Link></li>
                                    <li><Link to="/event-register">event register</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Frontend pages:2</h4>
                                  <ul>
                                    <li><Link to="/facilities">facilities</Link></li>
                                    <li><Link to="/facilities-detail">facilities detail</Link></li>
                                    <li><Link to="/research">research</Link></li>
                                    <li><Link to="/seminar">seminar</Link></li>
                                    <li><Link to="/gallery-photo">gallery photo</Link></li>
                                  </ul>
                                  <h4 className="ed-dr-men-mar-top">User Dashboard</h4>
                                  <ul>
                                    <li><Link to="/dashboard">Student profile</Link></li>
                                    <li><Link to="/db-courses">Dashboard courses</Link></li>
                                    <li><Link to="/db-exams">Dashboard exams</Link></li>
                                    <li><Link to="/db-profile">Dashboard profile</Link></li>
                                    <li><Link to="/db-time-line">Dashboard timeline</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Admin panel:1</h4>
                                  <ul>
                                    <li><Link to="/admin">admin</Link></li>
                                    <li><Link to="/admin-add-courses">Add new course</Link></li>
                                    <li><Link to="/admin-all-courses">All courses</Link></li>
                                    <li><Link to="/admin-student-details">Student details</Link></li>
                                    <li><Link to="/admin-user-add">Add new user</Link></li>
                                    <li><Link to="/admin-user-all">All users</Link></li>
                                    <li><Link to="/admin-panel-setting">Admin setting</Link></li>
                                    <li><Link to="/admin-event-add">event add</Link></li>
                                    <li><Link to="/admin-event-all">event all</Link></li>
                                    <li><Link to="/admin-setting">Admin Setting</Link></li>
                                    <li><Link to="/admin-slider">Slider setting</Link></li>
                                    <li><Link to="/admin-slider-edit">Slider edit</Link></li>
                                    <li><Link to="/admin-course-details">course details</Link></li>
                                    <li><Link to="/admin-login">admin login</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s3">
                                  <h4>Admin panel:2</h4>
                                  <ul>
                                    <li><Link to="/admin-event-edit">event edit</Link></li>
                                    <li><Link to="/admin-exam-add">exam add</Link></li>
                                    <li><Link to="/admin-exam-all">exam all</Link></li>
                                    <li><Link to="/admin-exam-edit">exam edit</Link></li>
                                    <li><Link to="/admin-export-data">export data</Link></li>
                                    <li><Link to="/admin-import-data">import data</Link></li>
                                    <li><Link to="/admin-job-add">Add new jobs</Link></li>
                                    <li><Link to="/admin-job-all">All jobs</Link></li>
                                    <li><Link to="/admin-job-edit">Edit job</Link></li>
                                    <li><Link to="/admin-main-menu">main menu</Link></li>
                                    <li><Link to="/admin-page-add">Add new page</Link></li>
                                    <li><Link to="/admin-page-all">All pages</Link></li>
                                    <li><Link to="/admin-page-edit">Edit page</Link></li>
                                    <li><Link to="/admin-forgot">forgot password</Link></li>
                                  </ul>
                                </div>
                                <div className="mm1-com mm1-cour-com mm1-s4">
                                  <h4>Admin panel:3</h4>
                                  <ul>
                                    <li><Link to="/admin-quick-link">quick link</Link></li>
                                    <li><Link to="/admin-seminar-add">Add new seminar</Link></li>
                                    <li><Link to="/admin-seminar-all">All seminar</Link></li>
                                    <li><Link to="/admin-seminar-edit">Edit seminar</Link></li>
                                    <li><Link to="/admin-seminar-enquiry">Semester enquiry</Link></li>
                                    <li><Link to="/admin-all-enquiry">All enquiry</Link></li>
                                    <li><Link to="/admin-view-enquiry">All enquiry view</Link></li>
                                    <li><Link to="/admin-event-enquiry">event enquiry</Link></li>
                                    <li><Link to="/admin-admission-enquiry">Admission enquiry</Link></li>
                                    <li><Link to="/admin-common-enquiry">common enquiry</Link></li>
                                    <li><Link to="/admin-course-enquiry">course enquiry</Link></li>
                                    <li><Link to="/admin-all-menu">menu all</Link></li>
                                    <li><Link to="/admin-about-menu">Menu - About</Link></li>
                                    <li><Link to="/admin-admission-menu">Menu - admission</Link></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li><Link to="/events">Events</Link>
                        </li>
                        <li><Link to="/dashboard">Student</Link>
                        </li>
                        <li><Link to="/contact-us">Contact us</Link>
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
                              <li><Link to="/course-details">Accounting/Finance</Link></li>
                              <li><Link to="/course-details">civil engineering</Link></li>
                              <li><Link to="/course-details">Art/Design</Link></li>
                              <li><Link to="/course-details">Marine Engineering</Link></li>
                              <li><Link to="/course-details">Business Management</Link></li>
                              <li><Link to="/course-details">Journalism/Writing</Link></li>
                              <li><Link to="/course-details">Physical Education</Link></li>
                              <li><Link to="/course-details">Political Science</Link></li>
                              <li><Link to="/course-details">Sciences</Link></li>
                              <li><Link to="/course-details">Statistics</Link></li>
                              <li><Link to="/course-details">Web Design/Development</Link></li>
                              <li><Link to="/course-details">SEO</Link></li>
                              <li><Link to="/course-details">Google Business</Link></li>
                              <li><Link to="/course-details">Graphics Design</Link></li>
                              <li><Link to="/course-details">Networking Courses</Link></li>
                              <li><Link to="/course-details">Information technology</Link></li>
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
          {/*SECTION START*/}
          <section>
            <div className="container com-sp">
              <div className="row">
                <div className="cor about-sp">
                  <div className="ed-about-tit">
                    <div className="con-title">
                      <h2>Blog <span> Posts</span></h2>
                      <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                    </div>
                    <div>
                      <div className="ho-event pg-eve-main pg-blog">
                        <ul>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>jan,2023</span>
                            </div>
                            <div className="pg-eve-desc pg-blog-desc">
                              <Link to="/event-register">
                                <h4>Best Study Spots on Campus</h4>
                              </Link>
                              <img src={require('../assets/images/blog/6.jpg')} alt="" />
                              <div className="share-btn blog-share-btn">
                                <ul>
                                  <li><Link to="/#"><i className="fa fa-facebook fb1" /> Share On Facebook</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-twitter tw1" /> Share On Twitter</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-google-plus gp1" /> Share On Google Plus</Link>
                                  </li>
                                </ul>
                              </div>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg pg-blog-reg">
                              <Link to="/blog-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>jan,2023</span>
                            </div>
                            <div className="pg-eve-desc pg-blog-desc">
                              <Link to="/event-register">
                                <h4>Recaps of Student Events on Campus</h4>
                              </Link>
                              <img src={require('../assets/images/blog/2.jpg')} alt="" />
                              <div className="share-btn blog-share-btn">
                                <ul>
                                  <li><Link to="/#"><i className="fa fa-facebook fb1" /> Share On Facebook</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-twitter tw1" /> Share On Twitter</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-google-plus gp1" /> Share On Google Plus</Link>
                                  </li>
                                </ul>
                              </div>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg pg-blog-reg">
                              <Link to="/blog-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>jan,2023</span>
                            </div>
                            <div className="pg-eve-desc pg-blog-desc">
                              <Link to="/event-register">
                                <h4>School Project Highlights</h4>
                              </Link>
                              <img src={require('../assets/images/blog/3.jpg')} alt="" />
                              <div className="share-btn blog-share-btn">
                                <ul>
                                  <li><Link to="/#"><i className="fa fa-facebook fb1" /> Share On Facebook</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-twitter tw1" /> Share On Twitter</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-google-plus gp1" /> Share On Google Plus</Link>
                                  </li>
                                </ul>
                              </div>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg pg-blog-reg">
                              <Link to="/blog-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>jan,2023</span>
                            </div>
                            <div className="pg-eve-desc pg-blog-desc">
                              <Link to="/event-register">
                                <h4>Sample Semester Schedule</h4>
                              </Link>
                              <img src={require('../assets/images/blog/4.jpg')} alt="" />
                              <div className="share-btn blog-share-btn">
                                <ul>
                                  <li><Link to="/#"><i className="fa fa-facebook fb1" /> Share On Facebook</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-twitter tw1" /> Share On Twitter</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-google-plus gp1" /> Share On Google Plus</Link>
                                  </li>
                                </ul>
                              </div>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg pg-blog-reg">
                              <Link to="/blog-details">Read more</Link>
                            </div>
                          </li>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>jan,2023</span>
                            </div>
                            <div className="pg-eve-desc pg-blog-desc">
                              <Link to="/event-register">
                                <h4>Experience of Studying Abroad</h4>
                              </Link>
                              <img src={require('../assets/images/blog/5.jpg')} alt="" />
                              <div className="share-btn blog-share-btn">
                                <ul>
                                  <li><Link to="/#"><i className="fa fa-facebook fb1" /> Share On Facebook</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-twitter tw1" /> Share On Twitter</Link>
                                  </li>
                                  <li><Link to="/#"><i className="fa fa-google-plus gp1" /> Share On Google Plus</Link>
                                  </li>
                                </ul>
                              </div>
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                            <div className="pg-eve-reg pg-blog-reg">
                              <Link to="/blog-details">Read more</Link>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pg-pagina">
                      <ul className="pagination">
                        <li className="disabled"><Link to="/#!"><i className="fa fa-angle-left" aria-hidden="true" /></Link></li>
                        <li className="active"><Link to="/#!">1</Link></li>
                        <li className="waves-effect"><Link to="/#!">2</Link></li>
                        <li className="waves-effect"><Link to="/#!">3</Link></li>
                        <li className="waves-effect"><Link to="/#!">4</Link></li>
                        <li className="waves-effect"><Link to="/#!">5</Link></li>
                        <li className="waves-effect"><Link to="/#!"><i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                      </ul>
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
                      <Link to="/course-details">Book This Course</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          {/*HEADER SECTION*/}
          <section className="wed-hom-footer">
            <div className="container">
              {/*<div class="row">
                  <div class="col-md-12">
                  <h4>About Wedding Planner</h4>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                  <p>more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text</p>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                  <p></p>
                </div>
                </div>*/}
              <div className="row wed-foot-link">
                <div className="col-md-4 foot-tc-mar-t-o">
                  <h4>Top Courses</h4>
                  <ul>
                    <li><Link to="/course-details">Accounting/Finance</Link></li>
                    <li><Link to="/course-details">civil engineering</Link></li>
                    <li><Link to="/course-details">Art/Design</Link></li>
                    <li><Link to="/course-details">Marine Engineering</Link></li>
                    <li><Link to="/course-details">Business Management</Link></li>
                    <li><Link to="/course-details">Journalism/Writing</Link></li>
                    <li><Link to="/course-details">Physical Education</Link></li>
                    <li><Link to="/course-details">Political Science</Link></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>New Courses</h4>
                  <ul>
                    <li><Link to="/course-details">Sciences</Link></li>
                    <li><Link to="/course-details">Statistics</Link></li>
                    <li><Link to="/course-details">Web Design/Development</Link></li>
                    <li><Link to="/course-details">SEO</Link></li>
                    <li><Link to="/course-details">Google Business</Link></li>
                    <li><Link to="/course-details">Graphics Design</Link></li>
                    <li><Link to="/course-details">Networking Courses</Link></li>
                    <li><Link to="/course-details">Information technology</Link></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>HELP &amp; SUPPORT</h4>
                  <ul>
                    <li><Link to="/#">24x7 Live help</Link>
                    </li>
                    <li><Link to="/#">Contact us</Link>
                    </li>
                    <li><Link to="/#">Feedback</Link>
                    </li>
                    <li><Link to="/#">FAQs</Link>
                    </li>
                    <li><Link to="/#">Safety Tips</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row wed-foot-link-1">
                <div className="col-md-4 foot-tc-mar-t-o">
                  <h4>Get In Touch</h4>
                  <p>Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                  <p>Phone: <Link to="/#!">+101-1231-4321</Link></p>
                  <p>Email: <Link to="/#!">info@educationmaster.com</Link></p>
                </div>
                <div className="col-md-4">
                  <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
                  <ul>
                    <li><Link to="/#"><span className="sprite sprite-android" /></Link>
                    </li>
                    <li><Link to="/#"><span className="sprite sprite-ios" /></Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h4>SOCIAL MEDIA</h4>
                  <ul>
                    <li><Link to="/#"><i className="fa fa-facebook" aria-hidden="true" /></Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-twitter" aria-hidden="true" /></Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-google-plus" aria-hidden="true" /></Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-youtube" aria-hidden="true" /></Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-whatsapp" aria-hidden="true" /></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {/*END HEADER SECTION*/}
          {/*HEADER SECTION*/}
          <section className="wed-rights">
            <div className="container">
              <div className="row">
                <div className="copy-right">
                  <p>Copyrights © 2023 RN53Themes. All rights reserved.</p>
                </div>
              </div>
            </div>
          </section>
          {/*END HEADER SECTION*/}
          {/*SECTION LOGIN, REGISTER AND FORGOT PASSWORD*/}
          <section>
            {/* LOGIN SECTION */}
            <div id="modal1" className="modal fade" role="dialog">
              <div className="log-in-pop">
                <div className="log-in-pop-left">
                  <h1>Hello...</h1>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <h4>Login with social media</h4>
                  <ul>
                    <li><Link to="/#"><i className="fa fa-facebook" /> Facebook</Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-google" /> Google+</Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-twitter" /> Twitter</Link>
                    </li>
                  </ul>
                </div>
                <div className="log-in-pop-right">
                  <Link to="/#" className="pop-close" data-dismiss="modal"><img src={require('../assets/images/cancel.png')} alt="" />
                  </Link>
                  <h4>Login</h4>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <form className="s12">
                    <div>
                      <div className="input-field s12">
                        <input type="text" data-ng-model="name" className="validate" />
                        <label>User name</label>
                      </div>
                    </div>
                    <div>
                      <div className="input-field s12">
                        <input type="password" className="validate" />
                        <label>Password</label>
                      </div>
                    </div>
                    <div>
                      <div className="s12 log-ch-bx">
                        <p>
                          <input type="checkbox" id="test5" />
                          <label htmlFor="test5">Remember me</label>
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="input-field s4">
                        <input type="submit" defaultValue="Login" className="waves-effect waves-light log-in-btn" /> </div>
                    </div>
                    <div>
                      <div className="input-field s12"> <Link to="/#" data-dismiss="modal" data-toggle="modal" data-target="#modal3">Forgot password</Link> | <Link to="/#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</Link> </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* REGISTER SECTION */}
            <div id="modal2" className="modal fade" role="dialog">
              <div className="log-in-pop">
                <div className="log-in-pop-left">
                  <h1>Hello...</h1>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <h4>Login with social media</h4>
                  <ul>
                    <li><Link to="/#"><i className="fa fa-facebook" /> Facebook</Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-google" /> Google+</Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-twitter" /> Twitter</Link>
                    </li>
                  </ul>
                </div>
                <div className="log-in-pop-right">
                  <Link to="/#" className="pop-close" data-dismiss="modal"><img src={require('../assets/images/cancel.png')} alt="" />
                  </Link>
                  <h4>Create an Account</h4>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <form className="s12">
                    <div>
                      <div className="input-field s12">
                        <input type="text" data-ng-model="name1" className="validate" />
                        <label>User name</label>
                      </div>
                    </div>
                    <div>
                      <div className="input-field s12">
                        <input type="email" className="validate" />
                        <label>Email id</label>
                      </div>
                    </div>
                    <div>
                      <div className="input-field s12">
                        <input type="password" className="validate" />
                        <label>Password</label>
                      </div>
                    </div>
                    <div>
                      <div className="input-field s12">
                        <input type="password" className="validate" />
                        <label>Confirm password</label>
                      </div>
                    </div>
                    <div>
                      <div className="input-field s4">
                        <input type="submit" defaultValue="Register" className="waves-effect waves-light log-in-btn" /> </div>
                    </div>
                    <div>
                      <div className="input-field s12"> <Link to="/#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</Link> </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* FORGOT SECTION */}
            <div id="modal3" className="modal fade" role="dialog">
              <div className="log-in-pop">
                <div className="log-in-pop-left">
                  <h1>Hello... </h1>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <h4>Login with social media</h4>
                  <ul>
                    <li><Link to="/#"><i className="fa fa-facebook" /> Facebook</Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-google" /> Google+</Link>
                    </li>
                    <li><Link to="/#"><i className="fa fa-twitter" /> Twitter</Link>
                    </li>
                  </ul>
                </div>
                <div className="log-in-pop-right">
                  <Link to="/#" className="pop-close" data-dismiss="modal"><img src={require('../assets/images/cancel.png')} alt="" />
                  </Link>
                  <h4>Forgot password</h4>
                  <p>Don't have an account? Create your account. It's take less then a minutes</p>
                  <form className="s12">
                    <div>
                      <div className="input-field s12">
                        <input type="text" data-ng-model="name3" className="validate" />
                        <label>User name or email id</label>
                      </div>
                    </div>
                    <div>
                      <div className="input-field s4">
                        <input type="submit" defaultValue="Submit" className="waves-effect waves-light log-in-btn" /> </div>
                    </div>
                    <div>
                      <div className="input-field s12"> <Link to="/#" data-dismiss="modal" data-toggle="modal" data-target="#modal1">Are you a already member ? Login</Link> | <Link to="/#" data-dismiss="modal" data-toggle="modal" data-target="#modal2">Create a new account</Link> </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="icon-float">
              <ul>
                <li><Link to="/#" className="sh">1k <br /> Share</Link> </li>
                <li><Link to="/#" className="fb1"><i className="fa fa-facebook" aria-hidden="true" /></Link> </li>
                <li><Link to="/#" className="gp1"><i className="fa fa-google-plus" aria-hidden="true" /></Link> </li>
                <li><Link to="/#" className="tw1"><i className="fa fa-twitter" aria-hidden="true" /></Link> </li>
                <li><Link to="/#" className="li1"><i className="fa fa-linkedin" aria-hidden="true" /></Link> </li>
                <li><Link to="/#" className="wa1"><i className="fa fa-whatsapp" aria-hidden="true" /></Link> </li>
                <li><Link to="/#" className="sh1"><i className="fa fa-envelope-o" aria-hidden="true" /></Link> </li>
              </ul>
            </div>
          </section>
          {/*Import jQuery before materialize.js*/}
        </div>
     );
    }
  };