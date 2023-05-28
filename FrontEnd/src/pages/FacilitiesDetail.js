import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class FacilitiesDetail extends Component{
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/*SECTION START*/}
          <section>
            <div className="container com-sp">
              <div className="row">
                <div className="cor about-sp">
                  <div className="ed-about-tit">
                    <div>
                      <div className="ho-event pg-eve-main pg-blog">
                        <ul>
                          <li>
                            <div className="ho-ev-date pg-eve-date"><span>07</span><span>jan,2023</span>
                            </div>
                            <div className="pg-eve-desc pg-blog-desc">
                              <Link to="../event-register">
                                <h4>Design and Technology Suite</h4>
                              </Link>
                              <div className="share-btn blog-share-btn">
                                <ul>
                                  <li><Link to="../#"><i className="fa fa-facebook fb1" /> Share On Facebook</Link>
                                  </li>
                                  <li><Link to="../#"><i className="fa fa-twitter tw1" /> Share On Twitter</Link>
                                  </li>
                                  <li><Link to="../#"><i className="fa fa-google-plus gp1" /> Share On Google Plus</Link>
                                  </li>
                                </ul>
                              </div>
                              <img src={require('../assets/images/facilities/9.jpg')} alt="" />
                              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its components. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                              <p>Aenean sed ornare augue. Duis eget ipsum ultricies, interdum velit at, posuere felis. Nunc eget efficitur risus. Etiam ornare felis ipsum, vel bibendum velit elementum eu. Proin lobortis est eget mauris fermentum volutpat. Aliquam quis eros nisi. Sed posuere justo a ligula aliquet, eu sagittis ligula porttitor. Donec placerat, ex eu semper tempus, velit ante placerat turpis, vel interdum metus est eu purus. Nunc tincidunt arcu id orci cursus posuere. Ut interdum posuere felis sit amet feugiat. Donec dui quam, dignissim sit amet gravida ac, vestibulum ac felis. Curabitur ligula urna, facilisis eget vulputate vitae, condimentum non sapien. Morbi bibendum dolor libero, ut tempor dolor lacinia ut. Phasellus hendrerit et ex et congue. Phasellus blandit, magna eu dignissim dapibus, nisi urna interdum felis, maximus tristique mauris ex ac elit. Etiam et purus finibus, consequat nunc quis, mollis ex.</p>
                              <p>Maecenas ut nisi consequat, fringilla risus id, fermentum tortor. Morbi venenatis mollis rutrum. Ut eleifend nisl vel libero imperdiet ornare. Phasellus tincidunt velit dui. Cras convallis orci sed ipsum suscipi</p>
                              <span>9:15 am – 5:00 pm</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="pg-pagina">
                      <ul className="pagination">
                        <li className="disabled"><Link to="../#!"><i className="fa fa-angle-left" aria-hidden="true" /></Link></li>
                        <li className="active"><Link to="../#!">1</Link></li>
                        <li className="waves-effect"><Link to="../#!">2</Link></li>
                        <li className="waves-effect"><Link to="../#!">3</Link></li>
                        <li className="waves-effect"><Link to="../#!">4</Link></li>
                        <li className="waves-effect"><Link to="../#!">5</Link></li>
                        <li className="waves-effect"><Link to="../#!"><i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
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