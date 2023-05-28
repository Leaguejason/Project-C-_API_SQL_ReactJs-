import React, { useState, useEffect } from 'react';
import {Link, useParams } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";
import { data } from 'jquery';

const AdminExamEdit = ()=>{
  const id = useParams().id;
  
  var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
    myHeaders.append('Content-Type', 'application/json');
  
  const [courseName, setCourseId] = useState([]);
  
  useEffect(()=>{
    const fetchListCourse = async ()=>{
      try{
        await fetch('https://localhost:7156/api/AdminCourse/GetListCourse',{
            method : 'GET',
            headers : myHeaders
        }).then(res=>res.json()).then(data=>setCourseId(data));
      }catch(error){
        console.log('Error occurred:', error.message);
      }
    };
    fetchListCourse();
  }, [])
  
  const [formData, setFormData] = useState({
    examCode: '',
    startDate: '',
    endDate: '',
    courseId: '',
    descreption: ''
  });
  
  useEffect(()=>{
    const fetchCourseDetail = async ()=>{
        try{
            await fetch(`https://localhost:7156/api/AdminExam/Details/${id}`,
            {method: 'GET',headers:myHeaders})
            .then(res=>res.json()).then(data=>setFormData(data));
          }catch (error) {
            console.log('Error occurred:', error.message);
          }
    };
    fetchCourseDetail();
  }, [])
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      examCode : formData.examCode,
      startDate: formData.startDate,
      endDate: formData.endDate,
      courseId: formData.courseId,
      descreption: formData.descreption,
    };

    // Send the data to the API
    fetch(`https://localhost:7156/api/AdminExam/Edit/${id}`, {
      method: 'PUT',
      headers:myHeaders,
      body: JSON.stringify(requestBody),
    })
      .then(response => {
        if(response.ok){
          let navigate = window.confirm("EDIT SUCCESS!")
          if(navigate===true){window.location.href="/AdminExamAll"};
        }else{
          alert("EDIT FAILED!");
        }
      })
      .catch(error => {
        console.error('Error sending form data:', error);
      });
  };
  
  const optionCourse = [];
  for (let e = 0; e < courseName.length; e++) {
    optionCourse.push(<option key={e} value={courseName[e].id}>{courseName[e].name}</option>);
  }
  console.log(courseName);
  
  return(
    <div>
      {/*== MAIN CONTRAINER ==*/}
      <HeaderAdmin/>
      {/*== BODY CONTNAINER ==*/}
      <div className="container-fluid sb2">
        <div className="row">
          <SidebarAdmin/>
          {/*== BODY INNER CONTAINER ==*/}
          <div className="sb2-2">
            {/*== breadcrumbs ==*/}
            <div className="sb2-2-2">
              <ul>
                <li><Link to="../Admin"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                </li>
                <li className="active-bre"><span> Edit Exam</span>
                </li>
                <li className="page-back"><Link to="../AdminExamAll"><i className="fa fa-backward" aria-hidden="true" /> Back</Link>
                </li>
              </ul>
            </div>
            {/*== User Details ==*/}
            <div className="sb2-2-3">
              <div className="row">
                <div className="col-md-12">
                  <div className="box-inn-sp admin-form">
                    <div className="sb2-2-add-blog sb2-2-1">
                      <h2>New Exam</h2>
                      <p>The table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                      <div className="tab-content">
                        <div id="home" className="tab-pane fade active in">
                          <div className="box-inn-sp">
                            <div className="inn-title">
                              <h4>Exam Details</h4>
                            </div>
                            <div className="bor">
                              <form onSubmit={e=>handleSubmit(e)}>
                                <div className="row">
                                  <label htmlFor="courseId">Course Name</label>
                                  <div className="mb-3">
                                    <select className="form-select form-select-lg" value={formData.courseId} required onChange={e=>handleChange(e)} name="courseId">
                                      <option>Choose a course name</option>
                                      {optionCourse}
                                    </select>
                                  </div>
                                </div>
                                <div className="row">
                                  <label htmlFor="examCode">Exam Code</label>
                                  <div className="input-field mb-3">
                                    <input type="text" name="examCode" value={formData.examCode} required className="validate" placeholder="Enter exam code" onChange={e=>handleChange(e)}/>
                                  </div>
                                  <label htmlFor="startDate">Starting Date</label>
                                  <div className="input-field mb-3">
                                    <input type="datetime-local" name="startDate" value={formData.startDate} required className="validate" placeholder="Enter start date" onChange={e=>handleChange(e)}/>
                                  </div>
                                  <label htmlFor="endDate">Ending Date</label>
                                  <div className="input-field mb-3">
                                    <input type="datetime-local" name="endDate" value={formData.endDate} required className="validate" placeholder="Enter end date" onChange={e=>handleChange(e)}/>
                                  </div>
                                  <label htmlFor="descreption">Description</label>
                                  <div className="input-field mb-3">
                                    <input type="text" name="descreption" value={formData.descreption} className="validate" placeholder="Enter description" onChange={e=>handleChange(e)}/>
                                  </div>
                                </div>
                                <div className="row">
                                  <div className="input-field mb-3">
                                    <button type="submit" className="btn btn-primary">Submit</button>
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
            </div>
          </div>
        </div>
      </div>
      {/*Import jQuery before materialize.js*/}
    </div>
  );
}

export default AdminExamEdit;
