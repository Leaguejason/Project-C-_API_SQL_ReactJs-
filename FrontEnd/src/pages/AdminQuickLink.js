import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminQuickLink extends Component{
  
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
                    <li className="active-bre"><Link to="/#"> Quick link</Link>
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
                          <h4>Quick link</h4>
                          <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        </div>
                        <div className="tab-inn">
                          <form>
                            <h4>Quick link 1:</h4>
                            <div className="row ad-p-lr ad-mar-bot-20">
                              <div className="input-field col s12">
                                <input type="text" defaultValue="Academy" className="validate" />
                                <label className>Text</label>
                              </div>
                              <div className="input-field col s12">
                                <input type="text" defaultValue="http://rn53themes.net/themes/demo/education-master/admission" className="validate" />
                                <label>Page URL</label>
                              </div>
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" multiple />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="Slider image" />
                                </div>
                              </div>
                              <div className="input-field col s12">
                                <select>
                                  <option value disabled selected>Select Status</option>
                                  <option value={1}>Active</option>
                                  <option value={2}>De-Active</option>
                                  <option value={3}>Delete</option>
                                </select>
                              </div>
                            </div>
                            <h4>Quick link 2:</h4>
                            <div className="row ad-p-lr ad-mar-bot-20">
                              <div className="input-field col s12">
                                <input type="text" defaultValue="Admission" className="validate" />
                                <label className>Text</label>
                              </div>
                              <div className="input-field col s12">
                                <input type="text" defaultValue="http://rn53themes.net/themes/demo/education-master/admission" className="validate" />
                                <label>Page URL</label>
                              </div>
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" multiple />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="Slider image" />
                                </div>
                              </div>
                              <div className="input-field col s12">
                                <select>
                                  <option value disabled selected>Select Status</option>
                                  <option value={1}>Active</option>
                                  <option value={2}>De-Active</option>
                                  <option value={3}>Delete</option>
                                </select>
                              </div>
                            </div>
                            <h4>Quick link 3:</h4>
                            <div className="row ad-p-lr ad-mar-bot-20">
                              <div className="input-field col s12">
                                <input type="text" defaultValue="Courses" className="validate" />
                                <label className>Text</label>
                              </div>
                              <div className="input-field col s12">
                                <input type="text" defaultValue="http://rn53themes.net/themes/demo/education-master/admission" className="validate" />
                                <label>Page URL</label>
                              </div>
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" multiple />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="Slider image" />
                                </div>
                              </div>
                              <div className="input-field col s12">
                                <select>
                                  <option value disabled selected>Select Status</option>
                                  <option value={1}>Active</option>
                                  <option value={2}>De-Active</option>
                                  <option value={3}>Delete</option>
                                </select>
                              </div>
                            </div>
                            <h4>Quick link 4:</h4>
                            <div className="row ad-p-lr ad-mar-bot-20">
                              <div className="input-field col s12">
                                <input type="text" defaultValue="Seminar" className="validate" />
                                <label className>Text</label>
                              </div>
                              <div className="input-field col s12">
                                <input type="text" defaultValue="http://rn53themes.net/themes/demo/education-master/admission" className="validate" />
                                <label>Page URL</label>
                              </div>
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" multiple />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="Slider image" />
                                </div>
                              </div>
                              <div className="input-field col s12">
                                <select>
                                  <option value disabled selected>Select Status</option>
                                  <option value={1}>Active</option>
                                  <option value={2}>De-Active</option>
                                  <option value={3}>Delete</option>
                                </select>
                              </div>
                              <div className="input-field col s12">
                                <i className="waves-effect waves-light btn-large waves-input-wrapper" style={{}}><input type="submit" className="waves-button-input" defaultValue="Submit" /></i>
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