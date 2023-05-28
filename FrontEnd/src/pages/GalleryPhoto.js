import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class GalleryPhoto extends Component{
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
                  <h1>Photo Gallery</h1>
                  <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                  <div className="event-head-sub">
                    <ul>
                      <li>Photos: College</li>
                      <li>Total photos: 500</li>
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
                  <div className="cor about-sp h-gal ed-pho-gal">
                    <ul>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/8.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/9.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/10.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/11.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/1.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/2.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/3.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/4.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/5.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/6.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/7.jpg')} alt="" />
                      </li>
                      <li><img className="materialboxed" data-caption="Education master image captions" src={require('../assets/images/ami/8.jpg')} alt="" />
                      </li>
                    </ul>
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