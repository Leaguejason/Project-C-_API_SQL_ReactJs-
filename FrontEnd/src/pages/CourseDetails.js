import { Link, useParams } from 'react-router-dom';
import { HeaderClient } from '../components/HeaderClient';
import { FooterClient } from '../components/FooterClient';
import React, { useEffect, useState } from 'react';

const CourseDetails = () => {
    const { id } = useParams();
    const [feedback, setFeedback] = useState();
    const [course, setcourse] = useState({
        courseCode: 'MH-JAVA_2',
        name: 'Java 2',
        tuitionFees: 2000000.0,
        courseType: 'CHUYEN_NGANH',
        descreption: 'Môn h?c chuyên ngành',
        image: 'project/image/anh_1.jpg',
        quantity: 0,
    });
    const [AllFeedBack, setAllFeedBack] = useState([
        {
            id: 1,
            title: 'string                                                                                                                                                ',
            message: 'dddd',
            createBy: 6,
            createDate: '2023-05-26T20:23:09.04',
            account: {
                id: 6,
                username: 'hoat',
                password: 'efa71fcbb38a789a4f0c340b051796c75059dc7b75cfe4127edcba53b9a61d71',
                name: 'Mai Huy Hoat',
                age: 23,
                gender: 'M',
                address: 'việt nam',
                salt: '153821c2-8aa8-4dc8-9149-42490a831f5c',
                status: 1,
                descreption: 'Admin',
                roleId: 1,
                createdDate: null,
                createdBy: null,
                updatedDate: null,
                updatedBy: null,
                dateOfbirth: '2023-05-23T08:42:14.123',
                avatar: null,
                email: null,
                phoneNumber: null,
                role: null,
                scholars: [],
            },
        },
    ]);
    const handleChangeFeedback = (event) => {
        const target = event.target;
        const value = target.value;

        setFeedback(value);
    };
    const sendFeedback = async (e) => {
        e.preventDefault();
        try {
            var sendData = {
                title: 'string',
                message: feedback,
                courseId: id,
            };
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            myHeaders.append('Content-Type', 'application/json');
            const response = await fetch(`https://localhost:7156/api/ScholarFeedBack/SendFeedback`, {
                method: 'post',
                headers: myHeaders,
                body: JSON.stringify(sendData),
            });
            if (response.ok) {
                window.alert('Send Feeback Success');
                window.location.reload();
            } else {
                console.log('Error occurred:', response.status);
            }
        } catch (error) {
            console.log('Error occurred:', error.message);
        }
    };
    const Account = {
        Name: localStorage.getItem('Account') ? JSON.parse(localStorage.getItem('Account')).name : '',
        Phone: localStorage.getItem('Account') ? JSON.parse(localStorage.getItem('Account')).phoneNumber : '',
        Email: localStorage.getItem('Account') ? JSON.parse(localStorage.getItem('Account')).email : '',
    };

    const [eventData, setEventData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const course = await getCouses();
            const allEvent = await getAllEvent();
            const allFeedbach = await getAllFeedback();

            setcourse(course);
            setEventData(allEvent);
            setAllFeedBack(allFeedbach);
        };
        fetchData();
    }, []);
    const getCouses = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            const response = await fetch(`https://localhost:7156/api/ScholarCourse/GetDetail/${id}`, {
                headers: myHeaders,
            });
            if (response.ok) {
                const jsonData = await response.json();
                return jsonData;
            } else {
                console.log('Error occurred:', response.status);
            }
        } catch (error) {
            console.log('Error occurred:', error.message);
        }
    };
    const getAllEvent = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            const response = await fetch('https://localhost:7156/api/ScholarEvent/GetListEvent', {
                headers: myHeaders,
            });
            if (response.ok) {
                const jsonData = await response.json();
                return jsonData;
            } else {
                console.log('Error occurred:', response.status);
            }
        } catch (error) {
            console.log('Error occurred:', error.message);
        }
    };

    var displayEvent = () => {
        var eventRender = [];

        if (eventData.length > 3)
            for (let i = 0; i < 3; i++) {
                eventRender.push(
                    <li style={{ background: `url(${eventData[i].image})` }}>
                        <div className="ho-ev-link ho-ev-link-full">
                            <Link to="../#">
                                <h4 className="text-light">{eventData[i].name}</h4>
                            </Link>
                            <p className="text-light">{eventData[i].location}</p>
                            <span className="text-light">{eventData[i].startDate}</span>
                        </div>
                    </li>,
                );
            }
        else
            eventRender = eventData.map((e) => {
                return (
                    <li style={{ background: `url(${e.image})` }}>
                        <div className="ho-ev-link ho-ev-link-full">
                            <Link to="../#">
                                <h4 className="text-light">{e.name}</h4>
                            </Link>
                            <p className="text-light">{e.location}</p>
                            <span className="text-light">{e.startDate}</span>
                        </div>
                    </li>
                );
            });

        return eventRender;
    };
    const getAllFeedback = async () => {
        try {
            var myHeaders = new Headers();
            myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
            const response = await fetch(`https://localhost:7156/api/ScholarCourse/GetFeedbackByCourse/${id}`, {
                headers: myHeaders,
            });
            if (response.ok) {
                const jsonData = await response.json();
                return jsonData;
            } else {
                console.log('Error occurred:', response.status);
            }
        } catch (error) {
            console.log('Error occurred:', error.message);
        }
    };
    var displayFeedbach = () => {
        var result = [];
        if (AllFeedBack.length > 0) {
            result = AllFeedBack.map((e) => {
                const min = 1;
                const max = 90;
                const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                return (
                    <div>
                        <div className="cor-p6-revi">
                            <div className="cor-p6-revi-left">
                                <img src={`https://randomuser.me/api/portraits/men/${randomNumber}.jpg`} alt="" />
                            </div>
                            <div className="cor-p6-revi-right">
                                <h4> {e.account.name} </h4>
                                <span>Date: {e.createDate} </span>
                                <p>{e.message}</p>
                            </div>
                        </div>
                    </div>
                );
            });
        }
        return result;
    };
    const registerCourse = (e) => {
        e.preventDefault();
        var acc = JSON.parse(localStorage.getItem('Account'));
        if (acc == null) {
            window.alert('You are not logged in.');
            return;
        }
        var send = {
            courseId: parseInt(id),
            scholarId: acc.id,
        };
        console.log(send);

        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
        myHeaders.append('Content-Type', 'application/json');
        fetch('https://localhost:7156/api/ScholarRegister/CourseRegister', {
            method: 'post',
            headers: myHeaders,
            body: JSON.stringify(send),
        }).then((res) => {
            if (res.ok) {
                window.confirm('Register this Course is Success');
                window.location.reload();
            } else window.alert('Register failed');
        });
    };

    // Render loading state or fetched user data
    if (!course) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            {/* MOBILE MENU */}
            <HeaderClient />
            {/*END HEADER SECTION*/}
            {/*SECTION START*/}
            <section>
                <div className="container com-sp pad-bot-70 pg-inn">
                    <div className="row">
                        <div className="cor">
                            <div className="col-md-3">
                                <div className="cor-top-deta cor-side-com">
                                    <div className="cor-top-deta">
                                        <div className="ho-st-login cor-apply field-com">
                                            <div className="col s12">
                                                <form className="col s12" onSubmit={(e) => registerCourse(e)}>
                                                    <div className="cor-left-app-tit">
                                                        <h4>Apply This Course</h4>
                                                        <p>Nulla at velit convallis lectus.</p>
                                                    </div>
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <input
                                                                type="text"
                                                                className="validate"
                                                                value={Account.Name}
                                                                placeholder="Full Name"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <input
                                                                type="text"
                                                                className="validate"
                                                                value={Account.Email}
                                                                placeholder="Email"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <input
                                                                type="text"
                                                                className="validate"
                                                                value={Account.Phone}
                                                                placeholder="Phone Number"
                                                            />
                                                        </div>
                                                    </div>
                                                    {/* <div className="row">
                                <div className="input-field col s12">
                                  <select>
                                    <option value disabled selected>Select Course</option>
                                    <option value={1}>Option 1</option>
                                    <option value={2}>Option 2</option>
                                    <option value={3}>Option 3</option>
                                  </select>
                                </div>
                              </div> */}
                                                    <div className="row">
                                                        <div className="input-field col s12">
                                                            <i class="waves-effect waves-light light-btn waves-input-wrapper">
                                                                <input
                                                                    type="submit"
                                                                    value="APPLY NOW"
                                                                    className="waves-button-input"
                                                                />
                                                            </i>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cor-side-com">
                                    <div className>
                                        <div className="de-left-tit">
                                            <h4>Upcoming Event</h4>
                                        </div>
                                    </div>
                                    <div className="ho-event">
                                        <ul>{displayEvent()}</ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="cor-mid-img">
                                    <img src={course.image} alt="" />
                                </div>
                                <div className="cor-con-mid">
                                    <div className="cor-p1">
                                        <h2>{course.name}</h2>
                                        <span>{course.courseType}</span>
                                        <div className="share-btn">
                                            <ul>
                                                <li>
                                                    <Link to="https://www.facebook.com/">
                                                        <i className="fa fa-facebook fb1" /> Share On Facebook
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://twitter.com/">
                                                        <i className="fa fa-twitter tw1" /> Share On Twitter
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to="https://plus.google.com/">
                                                        <i className="fa fa-google-plus gp1" /> Share On Google Plus
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="cor-p4">
                                        <h3>Course Details:</h3>
                                        <p>{course.descreption}</p>
                                        <p>Tuition Fees : {course.tuitionFees}</p>
                                    </div>
                                    {/* <div className="cor-p5">
                        <h3>Course Syllabus</h3>
                        <ul className="nav nav-tabs">
                          <li className="active"><Link data-toggle="tab" href="#home">
                              <img src={require('../assets/images/icon/cor4.png')} alt="" /> <span>Requirements</span></Link>
                          </li>
                          <li><Link data-toggle="tab" href="#menu1"><img src={require('../assets/images/icon/cor3.png')} alt="" /><span>Fees</span></Link></li>
                          <li><Link data-toggle="tab" href="#menu2"><img src={require('../assets/images/icon/cor1.png')} alt="" /><span>Student Profile</span></Link></li>
                          <li><Link data-toggle="tab" href="#menu2"><img src={require('../assets/images/icon/cor5.png')} alt="" /><span>How to Apply</span></Link></li>
                        </ul>
                        <div className="tab-content">
                          <div id="home" className="tab-pane fade in active">
                            <h4>Home</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                          </div>
                          <div id="menu1" className="tab-pane fade">
                            <h4>Menu 1</h4>
                            <p>Some content in menu 1.</p>
                          </div>
                          <div id="menu2" className="tab-pane fade">
                            <h4>Menu 2</h4>
                            <p>Some content in menu 2.</p>
                          </div>
                        </div>
                      </div> */}
                                    <div className="cor-p4">
                                        <h3>A typical weekly timetable:</h3>
                                        <p>
                                            {' '}
                                            It was popularised in the 1960s with the release of Letraset sheets
                                            containing Lorem Ipsum passages, and more recently with desktop publishing
                                            software like Aldus PageMaker including versions of Lorem Ipsum.
                                        </p>
                                        <ul className="collapsible" data-collapsible="accordion">
                                            <li>
                                                <div className="collapsible-header active">1st year</div>
                                                <div className="collapsible-body cor-tim-tab">
                                                    <h4>First Year Courses</h4>
                                                    <ul>
                                                        <li>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour
                                                        </li>
                                                        <li>
                                                            Anything embarrassing hidden in the middle of text. All the
                                                            Lorem Ipsum generators on the Internet tend to repeat
                                                            predefined chunks as necessary
                                                        </li>
                                                        <li>
                                                            Combined with a handful of model sentence structures, to
                                                            generate Lorem Ipsum which looks reasonable. The generated
                                                            Lorem
                                                        </li>
                                                        <li>
                                                            Nullam tincidunt urna non porttitor luctus. Suspendisse sem
                                                            urna, auctor ac commodo eu, bibendum sed nulla.
                                                        </li>
                                                    </ul>
                                                    <h4>Assessment</h4>
                                                    <ul>
                                                        <li>
                                                            Three written papers form the First University Examination,
                                                            together with a submitted portfolio of two exam essays of
                                                            2,000 words for Introduction to English Language and
                                                            Literature.
                                                        </li>
                                                        <li>
                                                            All exams must be passed, but marks do not count towards the
                                                            final degree.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="collapsible-header">2st year</div>
                                                <div className="collapsible-body cor-tim-tab">
                                                    <h4>Second Year Courses</h4>
                                                    <ul>
                                                        <li>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour
                                                        </li>
                                                        <li>
                                                            Anything embarrassing hidden in the middle of text. All the
                                                            Lorem Ipsum generators on the Internet tend to repeat
                                                            predefined chunks as necessary
                                                        </li>
                                                        <li>
                                                            Combined with a handful of model sentence structures, to
                                                            generate Lorem Ipsum which looks reasonable. The generated
                                                            Lorem
                                                        </li>
                                                    </ul>
                                                    <h4>Assessment</h4>
                                                    <ul>
                                                        <li>
                                                            Three written papers form the First University Examination,
                                                            together with a submitted portfolio of two exam essays of
                                                            2,000 words for Introduction to English Language and
                                                            Literature.
                                                        </li>
                                                        <li>
                                                            All exams must be passed, but marks do not count towards the
                                                            final degree.
                                                        </li>
                                                        <li>
                                                            Combined with a handful of model sentence structures, to
                                                            generate Lorem Ipsum which looks reasonable. The generated
                                                            Lorem
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="collapsible-header">3st year</div>
                                                <div className="collapsible-body cor-tim-tab">
                                                    <h4>Third Year Courses</h4>
                                                    <ul>
                                                        <li>
                                                            There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have suffered alteration in some
                                                            form, by injected humour
                                                        </li>
                                                        <li>
                                                            Anything embarrassing hidden in the middle of text. All the
                                                            Lorem Ipsum generators on the Internet tend to repeat
                                                            predefined chunks as necessary
                                                        </li>
                                                    </ul>
                                                    <h4>Assessment</h4>
                                                    <ul>
                                                        <li>
                                                            Three written papers form the First University Examination,
                                                            together with a submitted portfolio of two exam essays of
                                                            2,000 words for Introduction to English Language and
                                                            Literature.
                                                        </li>
                                                        <li>
                                                            All exams must be passed, but marks do not count towards the
                                                            final degree.
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cor-p6">
                                        <h3>Student Feedbacks</h3>
                                        {displayFeedbach()}
                                        <div className="cor-p6-revi">
                                            <div className="cor-p6-revi-left">
                                                <img src={require('../assets/images/4.jpg')} alt="" />
                                            </div>
                                            <div className="cor-p6-revi-right">
                                                <h4>Rachel Britain</h4>
                                                <span>Date: 12may, 2017</span>
                                                <p>
                                                    Mauris elementum et libero ac pharetra. Proin tristique dapibus
                                                    tellus, lacinia blandit mi tincidunt at. Vivamus vitae interdum
                                                    felis. Pellentesque congue mollis erat in imperdiet.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cor-p6">
                                        <h3>Write Reviews</h3>
                                        <div className="cor-p7-revi">
                                            <form className="col s12" onSubmit={(e) => sendFeedback(e)}>
                                                <div className="row">
                                                    <div className="input-field col s6">
                                                        <input
                                                            type="text"
                                                            className="validate"
                                                            value={Account.Name}
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                    <div className="input-field col s6">
                                                        <input
                                                            type="text"
                                                            className="validate"
                                                            value={Account.Email}
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                        <textarea
                                                            className="materialize-textarea"
                                                            value={feedback}
                                                            onChange={(e) => handleChangeFeedback(e)}
                                                            placeholder="Message"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="input-field col s12">
                                                        <input
                                                            type="submit"
                                                            value="SUBMIT"
                                                            className="waves-effect waves-light btn-book"
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                {/* <div className="cor-side-com">
                      <div className="ho-ev-latest ho-ev-latest-bg-3">
                        <div className="ho-lat-ev">
                          <h4>Student Login</h4>
                          <p>Student area velit convallis venenatis lacus quis, efficitur lectus.</p>
                        </div>
                      </div>
                      <div className="ho-st-login">
                        <div className="col s12">
                          <form className="col s12">
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="text" className="validate" />
                                <label>Student user name</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <input type="password" className="validate" />
                                <label>Password</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="input-field col s12">
                                <i class="waves-effect waves-light light-btn waves-input-wrapper">
                                  <input type="submit" value="LOGIN" className="waves-button-input"/>
                                </i>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div> */}
                                <div className="cor-side-com">
                                    <div className="ho-ev-latest ho-ev-latest-bg-2">
                                        <div className="ho-lat-ev">
                                            <Link to="../#">
                                                <h4>Exciting Job Opportunities</h4>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
                                                    nisi a leo convallis semper.
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ho-ev-latest in-ev-latest-bg-1">
                                        <div className="ho-lat-ev">
                                            <Link to="../#">
                                                <h4>Join Our Team</h4>
                                                <p>
                                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                                                    posuere cubilia curae;
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="ho-ev-latest in-ev-latest-bg-3">
                                        <div className="ho-lat-ev">
                                            <Link to="../#">
                                                <h4>Job Vacants</h4>
                                                <p>
                                                    Currently, we have IT job vacancies available.
                                                    <br />
                                                    Apply now and join our team!
                                                </p>
                                            </Link>
                                        </div>
                                    </div>
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
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour
                                    </p>
                                </div>
                                <div className="col-md-3 bb-link">
                                    <Link to="../CousrseDetails">Book This Course</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterClient />
            {/*Import jQuery before materialize.js*/}
        </div>
    );
};

export default CourseDetails;
