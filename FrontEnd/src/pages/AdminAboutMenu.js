import React,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
export class AdminAboutMenu extends Component{
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
                      <div className="box-inn-sp">
                        <div className="inn-title">
                          <h4>About Menu(max select 16 pages)</h4>
                          <p>Education is about teaching, learning skills and knowledge.</p>
                        </div>
                        <div className="tab-inn">
                          <div className="table-responsive table-desi">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Select</th>
                                  <th>Page</th>
                                  <th>Created Date</th>
                                  <th>Status</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-1" defaultChecked="checked" />
                                    <label htmlFor="filled-in-box-1" />
                                  </td>
                                  <td>index</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-2" />
                                    <label htmlFor="filled-in-box-2" />
                                  </td>
                                  <td>about</td>
                                  <td>05 June 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-3" />
                                    <label htmlFor="filled-in-box-3" />
                                  </td>
                                  <td>all-course</td>
                                  <td>18 December 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-4" />
                                    <label htmlFor="filled-in-box-4" />
                                  </td>
                                  <td>course-details</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-5" />
                                    <label htmlFor="filled-in-box-5" />
                                  </td>
                                  <td>events</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-6" />
                                    <label htmlFor="filled-in-box-6" />
                                  </td>
                                  <td>seminar</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-7" />
                                    <label htmlFor="filled-in-box-7" />
                                  </td>
                                  <td>admission</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-8" />
                                    <label htmlFor="filled-in-box-8" />
                                  </td>
                                  <td>awards</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-9" />
                                    <label htmlFor="filled-in-box-9" />
                                  </td>
                                  <td>student-profile</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-10" />
                                    <label htmlFor="filled-in-box-10" />
                                  </td>
                                  <td>dashboard</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <input type="checkbox" className="filled-in" id="filled-in-box-11" />
                                    <label htmlFor="filled-in-box-11" />
                                  </td>
                                  <td>exam-time-line</td>
                                  <td>12 May 2023</td>
                                  <td>
                                    <span className="label label-success">Active</span>
                                  </td>
                                </tr>												
                              </tbody>
                            </table>
                          </div>
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