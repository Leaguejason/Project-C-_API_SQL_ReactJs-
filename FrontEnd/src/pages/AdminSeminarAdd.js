import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminSeminarAdd extends Component{
    render() {

      return (
        <div>
          <HeaderAdmin/>
      {/*== BODY CONTNAINER ==*/}
      <div className="container-fluid sb2">
        <div className="row">
          {/*== BODY INNER CONTAINER ==*/}
          <SidebarAdmin/>
              {/*== BODY INNER CONTAINER ==*/}
              <div className="sb2-2">
                {/*== breadcrumbs ==*/}
                <div className="sb2-2-2">
                  <ul>
                    <li><Link to="/index"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                    </li>
                    <li className="active-bre"><Link to="/#"> Add New Seminar</Link>
                    </li>
                    <li className="page-back"><Link to="/index"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                    </li>
                  </ul>
                </div>
                {/*== User Details ==*/}
                <div className="sb2-2-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-inn-sp admin-form">
                        <div className="inn-title">
                          <h4>Add Seminar</h4>
                          <p>Here you can edit your website basic details URL, Phone, Email, Address, User and password and more</p>
                        </div>
                        <div className="tab-inn">
                          <form>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" defaultValue className="validate" required />
                                <label className>Seminar name</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <textarea defaultValue={""} />
                                <label className>Seminar Descriptions</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s6">
                                <input type="text" defaultValue className="validate" required />
                                <label className>Date</label>
                              </div>
                              <div className="input-field col s6">
                                <input type="text" className="validate" defaultValue required />
                                <label className>Time</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s6">
                                <input type="text" defaultValue className="validate" />
                                <label className>City</label>
                              </div>
                              <div className="input-field col s6">
                                <input type="text" defaultValue className="validate" />
                                <label className>Country</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="Event image" />
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" /></i>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Import jQuery before materialize.js*/}
        </div>
      );
    }
  };