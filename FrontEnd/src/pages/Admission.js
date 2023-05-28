import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class Admission extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/*END HEADER SECTION*/}
          {/*SECTION START*/}
          <section className="c-all h-quote">
            <div className="container">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="all-title quote-title qu-new">
                  <h2>Request an Admission</h2>
                  <p>Fusce purus mauris, blandit vitae purus eget, viverra volutpat nibh. Nam in elementum nisi, a placerat nisi. Quisque ullamcorper magna in odio rhoncus semper.Sed nec ultricies velit. Aliquam non massa id enim ultrices aliquet a ac
                    tortor.</p>
                  <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                  <p className="help-line">Help Line <span>+010 4561 32145</span> </p> <span className="help-arrow pulse"><i className="fa fa-angle-right" aria-hidden="true" /></span> </div>
              </div>
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="n-form-com admiss-form">
                  <div className="col s12">
                    <form className="form-horizontal">
                      <div className="form-group">
                        <label className="control-label col-sm-3">Full Name:</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" placeholder="Enter your name" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-3">Phone:</label>
                        <div className="col-sm-9">
                          <input type="number" className="form-control" placeholder="Enter your phone number" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-3">Email Id:</label>
                        <div className="col-sm-9">
                          <input type="email" className="form-control" placeholder="Enter email" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-3">Your City:</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" placeholder="Enter your city" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-3">Education:</label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" placeholder="Enter your education" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="control-label col-sm-3">Course:</label>
                        <div className="col-sm-9">
                          <select>
                            <option>-- Select course --</option>
                            <option>Aerospace Engineering</option>
                            <option>Agriculture Courses</option>							
                            <option>Fashion Technology</option>
                            <option>Marine Engineering</option>
                            <option>Building, Construction Management</option>
                            <option>Web Development</option>
                            <option>Accountant course</option>
                            <option>Dot Net Development</option>
                            <option>Java Development</option>
                            <option>Chemical Engineering</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group mar-bot-0">
                        <div className="col-sm-offset-3 col-sm-9">
                          <i className="waves-effect waves-light light-btn waves-input-wrapper" style={{}}><input type="submit" defaultValue="APPLY NOW" className="waves-button-input" /></i>
                        </div>
                      </div>
                    </form>
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
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                  </div>
                  <div className="col-md-3 bb-link">
                    <Link to="../CousrseDetails">Book This Course</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
          <FooterClient/>
            {/*Import jQuery before materialize.js*/}
            </div>
          );
  }
};
         