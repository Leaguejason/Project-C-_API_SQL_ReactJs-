import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class ContactUs extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/*END HEADER SECTION*/}
          {/*SECTION START*/}
          <section>
            <div className="container com-sp pad-bot-70">
              <div className="row">
                <div className="cor about-sp">
                  <div className="ed-about-tit">
                    <div className="con-title">
                      <h2>Contact <span> Us</span></h2>
                      <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                    </div>
                  </div>
                  <div className="pg-contact">
                    <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con1">
                      <h2>Educate <span>Master</span></h2>
                      <p>We Provide Outsourced Software Development Services To Over 50 Clients From 21 Countries.</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con1"> <img src='../assets/img/contact/1.html' alt="" />
                      <h4>Address</h4>
                      <p>28800 Orchard Lake Road, Suite 180 Farmington Hills, U.S.A.
                        <br />Landmark : Next To Airport</p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con3"> <img src='../assets/img/contact/2.html' alt="" />
                      <h4>CONTACT INFO:</h4>
                      <p> <Link to="../tel://0099999999" className="contact-icon">Phone: 01 234874 965478</Link>
                        <br /> <Link to="../tel://0099999999" className="contact-icon">Mobile: 01 654874 965478</Link>
                        <br /> <Link to="../mailto:mytestmail@gmail.com" className="contact-icon">Email: info@company.com</Link> </p>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12 new-con new-con4"> <img src='../assets/img/contact/3.html' alt="" />
                      <h4>Website</h4>
                      <p> <Link to="../#">Website: www.mycompany.com</Link>
                        <br /> <Link to="../#">Facebook: www.facebook/my</Link>
                        <br /> <Link to="../#">Blog: www.blog.mycompany.com</Link> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*SECTION END*/}
          <section id="map">
            <div className="row contact-map">
              {/* IFRAME: GET YOUR LOCATION FROM GOOGLE MAP */}
              <iframe title="Map Zeal Education" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.7719976966973!2d73.82256591157412!3d18.448658521292792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2953b7b878c49%3A0x81b2448774346377!2sZeal%20Education%20Society!5e0!3m2!1svi!2s!4v1684061457672!5m2!1svi!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              <div className="container">
                <div className="overlay-contact footer-part footer-part-form">
                  <div className="map-head">
                    <p>Send Us Now</p>
                    <h2>GetIn Touch</h2> <span className="footer-ser-re">Service Request Form</span> </div>
                  {/* ENQUIRY FORM */}
                  <form id="contact_form" name="contact_form" action="https://rn53themes.net/themes/demo/education-master/send.php">
                    <ul>
                      <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                        <input type="text" id="f1" defaultValue name="f1" placeholder="Name" required value=""/> </li>
                      <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                        <input type="text" id="f2" defaultValue name="f2" placeholder="Phone" required value=""/> </li>
                      <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                        <input type="text" id="f3" defaultValue name="f3" placeholder="City" required value=""/> </li>
                      <li className="col-md-6 col-sm-6 col-xs-12 contact-input-spac">
                        <input type="text" id="f4" defaultValue name="f4" placeholder="Country" required value="" /> </li>
                      <li className="col-md-12 col-sm-12 col-xs-12 contact-input-spac">
                        <textarea id="f5" name="f5" required defaultValue={""} />
                      </li>
                      <li className="col-md-6">
                        <input type="submit" defaultValue="SUBMIT" /> </li>
                    </ul>
                  </form>
                </div>
              </div>
            </div>
          </section>
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