import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class Research extends Component{
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
                  <h1>Top Trending Research</h1>
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
                              <div className="ed-rsear-img">
                                <img src={require('../assets/images/course/sm-1.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec">
                                <h4><Link onClick={e=>{e.preventDefault()}} to="../#">Space Research with Nasa</Link></h4>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Status <span>Success</span></Link>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Duration <span>120 Days</span></Link>
                                <div className="ed-flag"><img src={require('../assets/images/icon/flag-1.png')} alt="" /></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img">
                                <img src={require('../assets/images/course/sm-2.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec">
                                <h4><Link onClick={e=>{e.preventDefault()}} to="../#">Attention deficit disorder</Link></h4>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Status <span>Success</span></Link>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Duration <span>120 Days</span></Link>
                                <div className="ed-flag"><img src={require('../assets/images/icon/flag-2.png')} alt="" /></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img">
                                <img src={require('../assets/images/course/sm-4.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec">
                                <h4><Link onClick={e=>{e.preventDefault()}} to="../#">Anorexia Nervosa</Link></h4>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Status <span>Success</span></Link>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Duration <span>120 Days</span></Link>
                                <div className="ed-flag"><img src={require('../assets/images/icon/flag-3.png')} alt="" /></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img">
                                <img src={require('../assets/images/course/sm-5.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec">
                                <h4><Link onClick={e=>{e.preventDefault()}} to="../#">Internet Speed</Link></h4>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Status <span>Success</span></Link>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Duration <span>120 Days</span></Link>
                                <div className="ed-flag"><img src={require('../assets/images/icon/flag-4.png')} alt="" /></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img">
                                <img src={require('../assets/images/course/sm-6.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec">
                                <h4><Link onClick={e=>{e.preventDefault()}} to="../#">Mobile Communications</Link></h4>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Status <span>Success</span></Link>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Duration <span>120 Days</span></Link>
                                <div className="ed-flag"><img src={require('../assets/images/icon/flag-5.png')} alt="" /></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img">
                                <img src={require('../assets/images/course/sm-7.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec">
                                <h4><Link onClick={e=>{e.preventDefault()}} to="../#">Learning disabilities</Link></h4>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Status <span>Success</span></Link>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Duration <span>120 Days</span></Link>
                                <div className="ed-flag"><img src={require('../assets/images/icon/flag-6.png')} alt="" /></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img">
                                <img src={require('../assets/images/course/sm-8.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec">
                                <h4><Link onClick={e=>{e.preventDefault()}} to="../#">Anorexia Nervosa</Link></h4>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Status <span>Success</span></Link>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Duration <span>120 Days</span></Link>
                                <div className="ed-flag"><img src={require('../assets/images/icon/flag-7.png')} alt="" /></div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="ed-rese-grid">
                              <div className="ed-rsear-img">
                                <img src={require('../assets/images/course/sm-3.jpg')} alt="" />
                              </div>
                              <div className="ed-rsear-dec">
                                <h4><Link onClick={e=>{e.preventDefault()}} to="../#">Internet Speed</Link></h4>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Status <span>Success</span></Link>
                                <Link onClick={e=>{e.preventDefault()}} to="../#">Duration <span>120 Days</span></Link>
                                <div className="ed-flag"><img src={require('../assets/images/icon/flag-8.png')} alt="" /></div>
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
                      <Link onClick={e=>{e.preventDefault()}} to="../course-details">Book This Course</Link>
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