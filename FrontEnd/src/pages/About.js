import React ,{Component} from "react";
import { Link } from "react-router-dom";
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class About extends Component{
    render() {
      return (
    <div>
    <HeaderClient/>
    <section>
        <div className="container com-sp pad-bot-70">
            <div className="row">
                <div className="cor about-sp">
                    <div className="ed-about-tit">
                        <div className="con-title">
                            <h2>About <span> Academy</span></h2>
                            <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                        </div>
                    </div>
                    <div className="ed-about-sec1">
                        <div className="ed-advan">
                            <ul>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src={require('../assets/images/adv/1.png')} alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Awards</h4>
                                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi bibendum imperdiet bibendum.</p>
                                        <Link to="../awards">Read more</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src={require('../assets/images/adv/2.png')} alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Research</h4>
                                        <p>tiam eget enim non magna vestibulum malesuada ut et lectus. Curabitur egestas risus massa, a malesuada erat ultrices non.</p>
                                        <Link to="../research">Read more</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src={require('../assets/images/adv/3.png')} alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Educations</h4>
                                        <p>Maecenas venenatis, turpis ac tincidunt convallis, leo enim ultrices tortor, at faucibus neque sapien ac elit. Curabitur ut ipsum odio.</p>
                                        <Link to="../all-courses">Read more</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src={require('../assets/images/adv/4.png')} alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Alumni</h4>
                                        <p>Aliquam malesuada commodo lectus, at fermentum ligula finibus eu. Morbi nisi neque, suscipit non pulvinar vitae.</p>
                                        <Link to="../awards">Read more</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src={require('../assets/images/adv/5.png')} alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Facilities</h4>
                                        <p>Maecenas venenatis, turpis ac tincidunt convallis, leo enim ultrices tortor, at faucibus neque sapien ac elit. Curabitur ut ipsum odio.</p>
                                        <Link to="../facilities">Read more</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="ed-ad-img">
                                        <img src={require('../assets/images/adv/6.png')} alt="" />
                                    </div>
                                    <div className="ed-ad-dec">
                                        <h4>Departments</h4>
                                        <p>Maecenas venenatis, turpis ac tincidunt convallis, leo enim ultrices tortor, at faucibus neque sapien ac elit. Curabitur ut ipsum odio.</p>
                                        <Link to="../departments">Read more</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="ed-about-sec1">
                        <div className="col-md-6" />
                        <div className="col-md-6" />
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
     <FooterClient/>
    {/*Import jQuery before materialize.js*/}
</div>
    );
    }
  };