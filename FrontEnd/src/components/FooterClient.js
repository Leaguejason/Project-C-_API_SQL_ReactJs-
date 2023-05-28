import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class FooterClient extends Component {
    render() {
        return (
            <div>
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
                                    <li>
                                        <Link to="../course-details">Accounting/Finance</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">civil engineering</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Art/Design</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Marine Engineering</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Business Management</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Journalism/Writing</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Physical Education</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Political Science</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>New Courses</h4>
                                <ul>
                                    <li>
                                        <Link to="../course-details">Sciences</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Statistics</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Web Design/Development</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">SEO</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Google Business</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Graphics Design</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Networking Courses</Link>
                                    </li>
                                    <li>
                                        <Link to="../course-details">Information technology</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>HELP &amp; SUPPORT</h4>
                                <ul>
                                    <li>
                                        <Link to="../#">24x7 Live help</Link>
                                    </li>
                                    <li>
                                        <Link to="../#">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link to="../#">Feedback</Link>
                                    </li>
                                    <li>
                                        <Link to="../#">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link to="../#">Safety Tips</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row wed-foot-link-1">
                            <div className="col-md-4 foot-tc-mar-t-o">
                                <h4>Get In Touch</h4>
                                <p>Address: 28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                                <p>
                                    Phone: <Link to="../#!">+101-1231-4321</Link>
                                </p>
                                <p>
                                    Email: <Link to="../#!">info@educationmaster.com</Link>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <h4>DOWNLOAD OUR FREE MOBILE APPS</h4>
                                <ul>
                                    <li>
                                        <Link to="../#">
                                            <span className="sprite sprite-android" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <span className="sprite sprite-ios" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h4>SOCIAL MEDIA</h4>
                                <ul>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-facebook" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-twitter" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-google-plus" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-youtube" aria-hidden="true" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-whatsapp" aria-hidden="true" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/*END HEADER SECTION*/}
                {/*HEADER SECTION*/}

                {/*END HEADER SECTION*/}
                {/*SECTION LOGIN, REGISTER AND FORGOT PASSWORD*/}
            </div>
        );
    }
}
