import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminAdmissionMenu extends Component{
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
                    <li className="active-bre"><Link to="/#"> About Menu</Link>
                    </li>
                    <li className="page-back"><Link to="/index"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                    </li>
                  </ul>
                </div>
                <div className="sb2-2-3">
                  <div className="row">
                    {/*== Listing Enquiry ==*/}
                    <div className="col-md-12">
                      <div className="box-inn-sp admin-form">
                        <div className="inn-title">
                          <h4>Mega Menu(max select 16 pages)</h4>
                          <p>Education is about teaching, learning skills and knowledge.</p>
                        </div>
                        <div className="bor ad-cou-deta-h4">
                          <form>
                            <h4>Mega Menu 1:</h4>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" className="validate" required />
                                <label>Title:</label>
                              </div>
                              <div className="input-field col s12">
                                <textarea className="materialize-textarea" defaultValue={""} />
                                <label>Descriptions:</label>
                              </div>
                              <div className="input-field col s12">
                                <input type="text" className="validate" required />
                                <label>Page target link:</label>
                              </div>
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="mega menu background image" />
                                </div>
                              </div>
                            </div> 
                            <h4>Mega Menu 2:</h4>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" className="validate" required />
                                <label>Title:</label>
                              </div>
                              <div className="input-field col s12">
                                <textarea className="materialize-textarea" defaultValue={""} />
                                <label>Descriptions:</label>
                              </div>
                              <div className="input-field col s12">
                                <input type="text" className="validate" required />
                                <label>Page target link:</label>
                              </div>
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="mega menu background image" />
                                </div>
                              </div>
                            </div> 
                            <h4>Mega Menu 3:</h4>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" className="validate" required />
                                <label>Title:</label>
                              </div>
                              <div className="input-field col s12">
                                <textarea className="materialize-textarea" defaultValue={""} />
                                <label>Descriptions:</label>
                              </div>
                              <div className="input-field col s12">
                                <input type="text" className="validate" required />
                                <label>Page target link:</label>
                              </div>
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="mega menu background image" />
                                </div>
                              </div>
                            </div> 
                            <h4>Mega Menu 4:</h4>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" className="validate" required />
                                <label>Title:</label>
                              </div>
                              <div className="input-field col s12">
                                <textarea className="materialize-textarea" defaultValue={""} />
                                <label>Descriptions:</label>
                              </div>
                              <div className="input-field col s12">
                                <input type="text" className="validate" required />
                                <label>Page target link:</label>
                              </div>
                              <div className="file-field input-field col s12">
                                <div className="btn admin-upload-btn">
                                  <span>File</span>
                                  <input type="file" />
                                </div>
                                <div className="file-path-wrapper">
                                  <input className="file-path validate" type="text" placeholder="mega menu background image" />
                                </div>
                              </div>
                            </div> 
                            <div className="row">
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