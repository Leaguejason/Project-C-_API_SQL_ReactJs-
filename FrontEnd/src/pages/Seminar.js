import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class Seminar extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
        {/*END HEADER SECTION*/}
        {/*SECTION START*/}
        <section className="c-all p-semi">
          <div className="semi-inn">
            <div className="semi-com semi-left">
              <div className="all-title quote-title qu-new semi-text">
                <h2>Seminar 2023</h2>
                <p>Fusce purus mauris, blandit vitae purus eget, viverra volutpat nibh. Nam in elementum nisi, a placerat nisi. Quisque ullamcorper magna in odio rhoncus semper.Sed nec ultricies velit. Aliquam non massa id enim ultrices aliquet a ac
                  tortor.</p>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                <div className="semi-deta">
                  <ul>
                    <li>DATE:<span>Jan 08, 2023</span></li>
                    <li>Time:<span>02:00 PM GMT</span></li>
                    <li>Topic:<span>Feature Technology</span></li>
                    <li>Location:<span>illinois, united states</span></li>
                  </ul>
                </div>
                <p className="help-line">Join this for free!</p>
              </div>
            </div>
            <div className="semi-com semi-right">
              <div className="n-form-com semi-form">
                <div className="col s12">
                  <form className="form-horizontal">
                    <div className="form-group">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Name" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <input type="number" className="form-control" placeholder="Phone number" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <input type="email" className="form-control" placeholder="Email id" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="City" />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-12">
                        <input type="text" className="form-control" placeholder="Country" />
                      </div>
                    </div>
                    <div className="form-group mar-bot-0">
                      <div className="col-md-12">
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
        {/*SECTION END*/}
        {/*HEADER SECTION*/}
        <FooterClient/>
        {/*Import jQuery before materialize.js*/}
        </div>
);
}
}; 