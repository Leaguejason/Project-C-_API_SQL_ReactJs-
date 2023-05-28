import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class Facilities extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/*END HEADER SECTION*/}
          <section>
            <div className="head-2">
              <div className="container">
                <div className="head-2-inn head-2-inn-padd-top">
                  <h1>List of College Facilities</h1>
                  <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                  <div className="event-head-sub">
                    <ul>
                      <li>Topic: Global warming</li>
                      <li>Time: 09:15 am – 5:00 pm</li>
                      <li>Location: Illunois</li>
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
                        <ul>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/1.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Design and Technology Suite</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/2.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Science Laboratories</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/3.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Multi-Purpose Sports Hall</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/4.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Design and Technology Suite</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/5.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Music Suites and En-suite Practice Rooms</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/6.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Workshop Technology Suite</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/7.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Medical Room</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/8.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Indoor and Outdoor Eating Areas</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/9.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Recreational Areas</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img ed-faci-full-top">
                                <img src={require('../assets/images/facilities/10.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec ed-faci-full-bot">
                                <h4><Link to="../facilities-detail">Drama Studio</Link></h4>
                                <p>The Design and Technology Suite is an ensemble of various specialist areas and rooms which offer students the potential to explore a variety of design </p>
                                <Link to="../facilities-detail" className="read-line-btn">Read more</Link>
                              </div>
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