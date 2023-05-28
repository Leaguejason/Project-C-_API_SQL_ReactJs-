import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderAdmin } from "../components/HeaderAdmin";
import { SidebarAdmin } from "../components/SidebarAdmin";


const AdminExamAll = () => {
  var myHeaders = new Headers();
  myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
  
  const[exams,setExams] = useState([]);
  
  const [courseNames, setCourseNames] = useState({});
  const fetchExamData = async () => {
    try {
      // Fetch the exams data
      const res = await fetch('https://localhost:7156/api/AdminExam/GetList', {
        method: 'get',
        headers: myHeaders
      });
      const data = await res.json();
      setExams(data);

      // Fetch course names for each exam
      const courseNamesPromises = data.map((e) =>
        fetch(`https://localhost:7156/api/AdminCourse/GetDetail/${e.courseId}`, {
          method: 'get',
          headers: myHeaders
        }).then((res) => res.json())
      );

      const courseNamesData = await Promise.all(courseNamesPromises);
      const courseNamesMap = {};
      courseNamesData.forEach((courseName, index) => {
        courseNamesMap[data[index].courseId] = courseName.name;
      });
      setCourseNames(courseNamesMap);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchExamData();
  }, []);
      
  const DisplayAllExam = ()=>{
    const result = exams.map((e,index)=>{
            return(
            <tr key={index}>
              <th>{e.examCode}</th>
              <th>{courseNames[e.courseId]}</th>
              <th>{new Date(e.startDate).toLocaleString()}</th>
              <th>{new Date(e.endDate).toLocaleString()}</th>
              <th>
                <Link to={`../AdminExamEdit/${e.id}`} className="label label-warning text-white">EDIT</Link>
              </th>
            </tr>
            )
          });
          return result;
  } 
  console.log(exams);
    
      return (
        <div>
          {/*== MAIN CONTRAINER ==*/}
          <HeaderAdmin />
          {/*== BODY CONTNAINER ==*/}
          <div className="container-fluid sb2">
            <div className="row">
              <SidebarAdmin />
              {/*== BODY INNER CONTAINER ==*/}
              <div className="sb2-2" style={{height:1500}}>
                {/*== breadcrumbs ==*/}
                <div className="sb2-2-2">
                  <ul>
                    <li>
                      <Link to="../Admin">
                        <i className="fa fa-home" aria-hidden="true" /> Home
                      </Link>
                    </li>
                    <li className="active-bre">
                      <span> All Exams</span>
                    </li>
                    <li className="page-back">
                      <Link to="../AdminExamAll">
                        <i className="fa fa-backward" aria-hidden="true" /> Back
                      </Link>
                    </li>
                  </ul>
                </div>
                {/*== User Details ==*/}
                <div className="sb2-2-3">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="box-inn-sp">
                        <div className="inn-title">
                          <h4>Exams Time Table</h4>
                          <p>
                            All about students like name, student id, phone,
                            email, country, city and more
                          </p>
                        </div>
                        <div className="tab-inn">
                          <div className="table-responsive table-desi">
                            <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th>Exam Code</th>
                                  <th>Course Name</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                  <th>Edit</th>
                                </tr>
                              </thead>
                              <tbody>
                              {DisplayAllExam()}
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

export default AdminExamAll;
