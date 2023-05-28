import React ,{Component} from "react";
import { Link } from "react-router-dom";
import { HeaderClient } from "../components/HeaderClient";
import { FooterClient } from "../components/FooterClient";
export class AllCourses extends Component{
  constructor(props){
    super(props);
    this.state = {
      Course: []
    };
  }
  async GetListCourse()
    {
      try {
        const response = await fetch('https://localhost:7156/api/ScholarCourse/GetListCourse', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
          const jsonData = await response.json();
          this.setState({
             Course : jsonData
          },()=>{
            // console.log(this.state.Course);
          });
          
        } else {
          console.log('Error occurred:', response.status);
        }
        
      } catch (error) {
        console.log('Error occurred:', error.message);
      }
      
    } 
    componentDidMount(){
      this.GetListCourse();
    }
    render() {
      console.log(this.state.Course);
      const dataArray = this.state.Course;
      
      const render1 = [];
      for (let i = 0; i < dataArray.length/2; i++) {
        render1.push
        (
          <div className="home-top-cour" key={i}>
          {/*POPULAR COURSES IMAGE*/}
          <div className="col-md-3"> <img src={`${dataArray[i].image}`} alt="" /> </div>
          {/*POPULAR COURSES: CONTENT*/}
          <div className="col-md-9 home-top-cour-desc">
          <Link to={`../CourseDetails/${dataArray[i].id}`}>
            <h3>{dataArray[i].name}</h3>
          </Link>
          <h4>Course-Type: {dataArray[i].courseType} | Course-Code: {dataArray[i].courseCode} </h4>
          <span className="home-top-cour-rat"><i class="fas fa-star text-warning"></i></span>
          <b className="card-price text-success">Fees: {dataArray[i].tuitionFees} $ </b>
          <div className="hom-list-share">
            <ul>
              <li><Link to={`../CourseDetails/${dataArray[i].id}`}><i className="fa fa-bar-chart" aria-hidden="true" /> Read More</Link> </li>
            
            </ul>
          </div>
          </div>
          </div>
        );
      }
      const render2 = [];
      for (let i = dataArray.length-1; i >= dataArray.length/2; i--) {
        render2.push
        (
          <div className="home-top-cour" key={i}>
          {/*POPULAR COURSES IMAGE*/}
          <div className="col-md-3"> <img src={`${dataArray[i].image}`} alt="" /> </div>
          {/*POPULAR COURSES: CONTENT*/}
          <div className="col-md-9 home-top-cour-desc">
          <Link to={`../CourseDetails/${dataArray[i].id}`}>
            <h3>{dataArray[i].name}</h3>
          
           
          </Link>
          <h4>Course-Type: {dataArray[i].courseType} | Course-Code: {dataArray[i].courseCode} </h4>
          <b className="card-price text-success">Fees: {dataArray[i].tuitionFees} $ </b>
          <div className="hom-list-share">
            <ul>
              <li><Link to={`../CourseDetails/${dataArray[i].id}`}><i className="fa fa-bar-chart" aria-hidden="true" /> Read More</Link> </li>
            
            </ul>
          </div>
          </div>
          </div>
        );
      }
      
        return (
        <div>
      <HeaderClient/>
          <section className="pop-cour">
            <div className="container com-sp pad-bot-70">
              <div className="row">
                <div className="con-title">
                  <h2>All <span>Courses</span></h2>
                  <p>Fusce id sem at ligula laoreet hendrerit venenatis sed purus. Ut pellentesque maximus lacus, nec pharetra augue.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div>
                    {render1}
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    {render2}
                  </div>
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
