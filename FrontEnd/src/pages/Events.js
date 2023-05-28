import React ,{Component} from "react";
import { Link } from 'react-router-dom';
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class Events extends Component{
  constructor(){
    super();
    this.state={
      AllEvent:[]
    }
  }
  async getListEvent(){
    var res= await fetch('https://localhost:7156/api/ScholarEvent/GetListEvent');
    var data= await res.json();
    this.setState({
      AllEvent:data
    })
    
  }
  componentDidMount(){
    this.getListEvent();
  }
  showAllEvent(){
    var listEvent= this.state.AllEvent===null? []:this.state.AllEvent;
    var result=listEvent.map(e=>{
      var date= new Date(e.startDate);
    
      
      return(
        <li>
        <div className="ho-ev-date pg-eve-date"><span>{date.getDate()}</span><span> {date.getMonth()}, {date.getFullYear()} </span>
        </div>
        <div className="ho-ev-link pg-eve-desc">
          <Link to="../EventRegister">
            <h4> {e.name} </h4>
          </Link>
          <p>Location: {e.location} </p>
          <span>Start:{ (new Date(e.startDate)).getHours() } h - End: { (new Date(e.endTime)).getHours() } h  </span>
        </div>
        <div className="pg-eve-reg">
         <Link to={`../EventDetail/${e.id}`}>Read more</Link>
        </div>
      </li>
      )
    });
    return result;
  }
    render() {
      return (
        <div>
          {/* MOBILE MENU */}
          <HeaderClient/>
          {/*END HEADER SECTION*/}
          {/*SECTION START*/}
          <section>
            <div className="container com-sp">
              <div className="row">
                <div className="cor about-sp">
                  <div className="ed-about-tit">
                    <div className="con-title">
                      <h2>College <span> Events</span></h2>
                      <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                    </div>
                    <div>
                      <div className="ho-event pg-eve-main">
                        <ul>
                          {this.showAllEvent()}
                         
                          
                        </ul>
                      </div>
                    </div>
                    {/* <div className="pg-pagina">
                      <ul className="pagination">
                        <li className="disabled"><Link to="../#!"><i className="fa fa-angle-left" aria-hidden="true" /></Link></li>
                        <li className="active"><Link to="../#!">1</Link></li>
                        <li className="waves-effect"><Link to="../#!">2</Link></li>
                        <li className="waves-effect"><Link to="../#!">3</Link></li>
                        <li className="waves-effect"><Link to="../#!">4</Link></li>
                        <li className="waves-effect"><Link to="../#!">5</Link></li>
                        <li className="waves-effect"><Link to="../#!"><i className="fa fa-angle-right" aria-hidden="true" /></Link></li>
                      </ul>
                    </div> */}
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
          <FooterClient/>
            {/*Import jQuery before materialize.js*/}
            </div>
    );
  }
}; 