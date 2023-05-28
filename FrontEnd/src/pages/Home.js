import React, { Component } from 'react';
import { HeaderClient } from '../components/HeaderClient';
import { FooterClient } from '../components/FooterClient';
import { Link } from 'react-router-dom';
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Course: [],

            AllEvent: [],
        };
    }
    async getListEvent() {
        var res = await fetch('https://localhost:7156/api/ScholarEvent/GetListEvent');
        var data = await res.json();
        this.setState({
            AllEvent: data,
        });
    }
    showNewEvent(){
        var listEvent = this.state.AllEvent === null ? [] : this.state.AllEvent;
        var result =[];
        if(listEvent.length>5)
        for(var i=0;i<5;i++){
            var e=listEvent[i];
              var date= new Date(e.startDate);
            result.push(
            
                    <div>
    
                        <li>
                            <div className="ho-ev-date">
                                <span>{date.getDate()}</span>
                                <span>
                                    {date.getMonth()}, {date.getFullYear()}{' '}
                                </span>
                            </div>
                            <div className="ho-ev-link">
                                <Link to={`../EventDetail/${e.id}`}>
                                    <h4>{e.name}</h4>
                                </Link>
                                <p>Location: {e.location} </p>
                                <span>
                                    Start:{new Date(e.startDate).getHours()} h - End: {new Date(e.endTime).getHours()} h{' '}
                                </span>
                            </div>
                            
                        </li>
                    </div>
              
            )
        }
        return result; 
    }
    showAllEvent() {
        var listEvent = this.state.AllEvent === null ? [] : this.state.AllEvent;
        var result =[];
        if(listEvent.length>5)
        for(var i=listEvent.length-1;i>listEvent.length-6;i--){
            var e=listEvent[i];
              var date= new Date(e.startDate);
            result.push(
            
                    <div>
    
                        <li>
                            <div className="ho-ev-date">
                                <span>{date.getDate()}</span>
                                <span>
                                    {date.getMonth()}, {date.getFullYear()}{' '}
                                </span>
                            </div>
                            <div className="ho-ev-link">
                                <Link to={`../EventDetail/${e.id}`}>
                                    <h4>{e.name}</h4>
                                </Link>
                                <p>Location: {e.location} </p>
                                <span>
                                    Start:{new Date(e.startDate).getHours()} h - End: {new Date(e.endTime).getHours()} h{' '}
                                </span>
                            </div>
                            
                        </li>
                    </div>
              
            )
        }
        return result;
    }
    async GetListCourse() {
        try {
            const response = await fetch('https://localhost:7156/api/ScholarCourse/GetListCourse', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                const jsonData = await response.json();
                this.setState(
                    {
                        Course: jsonData,
                    },
                    () => {
                        // console.log(this.state.Course);
                    },
                );
            } else {
                console.log('Error occurred:', response.status);
            }
        } catch (error) {
            console.log('Error occurred:', error.message);
        }
    }

    componentDidMount() {
        this.GetListCourse();
        this.getListEvent();
    }
    showTopCourse() {
        console.log(this.state.Course);
        const dataArray = this.state.Course;
        if (dataArray.length > 0) {
            const render1 = [];
            for (let i = 0; i < dataArray.length; i++) {
                render1.push(
                    <div className="home-top-cour" key={i}>
                        {/*POPULAR COURSES IMAGE*/}
                        <div className="col-md-3">
                            {' '}
                            <img src={`${dataArray[i].image}`} alt="" />{' '}
                        </div>
                        {/*POPULAR COURSES: CONTENT*/}
                        <div className="col-md-9 home-top-cour-desc">
                            <Link to={`../CourseDetails/${dataArray[i].id}`}>
                                <h3>{dataArray[i].name}</h3>
                            </Link>
                            <h4>
                                Course-Type: {dataArray[i].courseType} | Course-Code: {dataArray[i].courseCode}{' '}
                            </h4>
                            <span className="home-top-cour-rat">
                                <i class="fas fa-star text-warning"></i>
                            </span>
                            <b className="card-price text-success">Fees: {dataArray[i].tuitionFees} $ </b>
                            <div className="hom-list-share">
                                <ul>
                                    <li>
                                        <Link to={`../CourseDetails/${dataArray[i].id}`}>
                                            <i className="fa fa-bar-chart" aria-hidden="true" /> Read More
                                        </Link>{' '}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>,
                );
            }
            const render2 = [];
            for (let i = 3; i < dataArray.length; i++) {
                render2.push(
                    <div className="home-top-cour" key={i}>
                        {/*POPULAR COURSES IMAGE*/}
                        <div className="col-md-3">
                            {' '}
                            <img src={`${dataArray[i].image}`} alt="" />{' '}
                        </div>
                        {/*POPULAR COURSES: CONTENT*/}
                        <div className="col-md-9 home-top-cour-desc">
                            <Link to={`../CourseDetails/${dataArray[i].id}`}>
                                <h3>{dataArray[i].name}</h3>
                            </Link>
                            <h4>
                                Course-Type: {dataArray[i].courseType} | Course-Code: {dataArray[i].courseCode}{' '}
                            </h4>
                            <span className="home-top-cour-rat">
                                <i class="fas fa-star text-warning"></i>
                            </span>
                            <b className="card-price text-success">Fees: {dataArray[i].tuitionFees} $ </b>
                            <div className="hom-list-share">
                                <ul>
                                    <li>
                                        <Link to={`../CourseDetails/${dataArray[i].id}`}>
                                            <i className="fa fa-bar-chart" aria-hidden="true" /> Read More
                                        </Link>{' '}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>,
                );
            }
            return (
                <div className="row">
                    <div className="col-md-6">
                        <div>{render1}</div>
                    </div>
                    <div className="col-md-6">
                        <div>{render2}</div>
                    </div>
                </div>
            );
        } else {
            return <p>No Data</p>;
        }
    }
    render() {
        return (
            <div>
                <HeaderClient />
                {/* SLIDER */}
                <section>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/* Wrapper for slides */}
                        <div className="carousel-inner">
                            <div className="item slider1 active">
                                <img src={require('../assets/images/slider/1.jpg')} alt="" />
                                <div className="carousel-caption slider-con">
                                    <h2>
                                        Welcome to <span>University</span>
                                    </h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form
                                    </p>
                                    <Link to="../allcourses" className="bann-btn-1">
                                        All Courses
                                    </Link>
                                    <Link to="../awards" className="bann-btn-2">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="item">
                                <img src={require('../assets/images/slider/2.jpg')} alt="" />
                                <div className="carousel-caption slider-con">
                                    <h2>
                                        Admission open <span>2023</span>
                                    </h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form
                                    </p>
                                    <Link to="../admission" className="bann-btn-1">
                                        Admission
                                    </Link>
                                    <Link to="../awards" className="bann-btn-2">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                            <div className="item">
                                <img src={require('../assets/images/slider/3.jpg')} alt="" />
                                <div className="carousel-caption slider-con">
                                    <h2>
                                        Education <span>Master</span>
                                    </h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form
                                    </p>
                                    <Link to="../allcourses" className="bann-btn-1">
                                        All Courses
                                    </Link>
                                    <Link to="../awards" className="bann-btn-2">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Left and right controls */}
                        <Link className="left carousel-control" to="../#myCarousel" data-slide="prev">
                            <i className="fa fa-chevron-left slider-arr" />
                        </Link>
                        <Link className="right carousel-control" to="../#myCarousel" data-slide="next">
                            <i className="fa fa-chevron-right slider-arr" />
                        </Link>
                    </div>
                </section>
                {/* QUICK LINKS */}
                <section>
                    <div className="container">
                        <div className="row">
                            <div className="wed-hom-ser">
                                <ul>
                                    <li>
                                        <Link
                                            to="../awards"
                                            className="waves-effect waves-light btn-large wed-pop-ser-btn"
                                        >
                                            <img src={require('../assets/images/icon/h-ic1.png')} alt="" /> Academy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="../admission"
                                            className="waves-effect waves-light btn-large wed-pop-ser-btn"
                                        >
                                            <img src={require('../assets/images/icon/h-ic2.png')} alt="" /> Admission
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="../allcourses"
                                            className="waves-effect waves-light btn-large wed-pop-ser-btn"
                                        >
                                            <img src={require('../assets/images/icon/h-ic4.png')} alt="" /> Courses
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="../seminar"
                                            className="waves-effect waves-light btn-large wed-pop-ser-btn"
                                        >
                                            <img src={require('../assets/images/icon/h-ic3.png')} alt="" /> Seminar
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                {/* DISCOVER MORE */}
                <section>
                    <div className="container com-sp pad-bot-70">
                        <div className="row">
                            <div className="con-title">
                                <h2>
                                    Discover <span>More</span>
                                </h2>
                                <p>
                               Unleash Your Curiosity: Discover More Opportunities and Insights
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="ed-course">
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="ed-course-in">
                                        <Link className="course-overlay" to="../about">
                                            <img src={require('../assets/images/h-about.jpg')} alt="" />
                                            <span>Academics</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="ed-course-in">
                                        <Link className="course-overlay" to="../admission">
                                            <img src={require('../assets/images/h-adm1.jpg')} alt="" />
                                            <span>Admission</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="ed-course-in">
                                        <Link className="course-overlay" to="../dashboard">
                                            <img src={require('../assets/images/h-cam.jpg')} alt="" />
                                            <span>Students profile</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="ed-course-in">
                                        <Link className="course-overlay" to="../research">
                                            <img src={require('../assets/images/h-res.jpg')} alt="" />
                                            <span>Research &amp; Education</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="ed-course-in">
                                        <Link className="course-overlay" to="../allcourses">
                                            <img src={require('../assets/images/h-about1.jpg')} alt="" />
                                            <span>Couse</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="ed-course-in">
                                        <Link className="course-overlay" to="../dbexams">
                                            <img src={require('../assets/images/h-adm.jpg')} alt="" />
                                            <span>Exam </span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="ed-course-in">
                                        <Link className="course-overlay" to="../seminar">
                                            <img src={require('../assets/images/h-cam1.jpg')} alt="" />
                                            <span>Seminar 2023</span>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-4 col-xs-12">
                                    <div className="ed-course-in">
                                        <Link className="course-overlay" to="../events">
                                            <img src={require('../assets/images/h-res1.jpg')} alt="" />
                                            <span>Research &amp; Education</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* POPULAR COURSES */}
                <section className="pop-cour">
                    <div className="container com-sp pad-bot-70">
                        <div className="row">
                            <div className="con-title">
                                <h2>
                                    New <span>Courses</span>
                                </h2>
                                <p>
                                Discover New Courses: Expand Your Knowledge and Skills
                                </p>
                            </div>
                        </div>
                        {this.showTopCourse()}
                    </div>
                </section>
                {/* UPCOMING EVENTS */}
                <section>
                    <div className="container com-sp pad-bot-0">
                        <div className="row">
                            <div className="col-md-6">
                                {/*<div class="ho-ex-title">
        <h4>Upcoming Event</h4>
    </div>*/}
                                <div className="ho-ev-latest ho-ev-latest-bg-1">
                                    <div className="ho-lat-ev">
                                        <h4>Upcoming Event</h4>
                                        <p>Save the Date: Upcoming Event to Look Forward To</p>
                                    </div>
                                </div>
                                <div className="ho-event ho-event-mob-bot-sp">
                                    <ul>
                                        {this.showAllEvent()}
                                   
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/*<div class="ho-ex-title">
        <h4>Upcoming Event</h4>
    </div>*/}
                                <div className="ho-ev-latest ho-ev-latest-bg-2">
                                    <div className="ho-lat-ev">
                                        <h4>Job Vacants</h4>
                                        <p>Job Vacancies: Explore Exciting Opportunities</p>
                                    </div>
                                </div>
                                <div className="ho-event ho-event-mob-bot-sp">
                                    <ul>
                                        <li>
                                            <div className="ho-ev-img">
                                                <img src={require('../assets/images/event/1.jpg')} alt="" />
                                            </div>
                                            <div className="ho-ev-link">
                                                <Link to="../#">
                                                    <h4>Almost before we knew it, we had left the ground</h4>
                                                </Link>
                                                <p>Etiam ornare lacus nec lectus vestibulum aliquam.</p>
                                                <span>Location: New York</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ho-ev-img">
                                                <img src={require('../assets/images/event/2.jpg')} alt="" />
                                            </div>
                                            <div className="ho-ev-link">
                                                <Link to="../#">
                                                    <h4>Then came the night of the first falling star.</h4>
                                                </Link>
                                                <p>Vestibulum sollicitudin sem arcu</p>
                                                <span>Location: Los Angeles</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ho-ev-img">
                                                <img src={require('../assets/images/event/3.jpg')} alt="" />
                                            </div>
                                            <div className="ho-ev-link">
                                                <Link to="../#">
                                                    <h4>Educate to Empower NYE Party</h4>
                                                </Link>
                                                <p>
                                                    Vestibulum sollicitudin sem arcu, eget ullamcorper purus hendrerit
                                                </p>
                                                <span>Location: Chennai</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ho-ev-img">
                                                <img src={require('../assets/images/event/4.jpg')} alt="" />
                                            </div>
                                            <div className="ho-ev-link">
                                                <Link to="../#">
                                                    <h4>Then came the night of the first falling star.</h4>
                                                </Link>
                                                <p>Venenatis lacus lectus.</p>
                                                <span>Location: Chicago</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* NEWS AND EVENTS */}
                <section>
                    <div className="container com-sp">
                        <div className="row">
                            <div className="con-title">
                                <h2>
                                Events and <span>Orther</span>
                                </h2>
                                <p>
                                Stay Updated: News and Events in the Latest Updates
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="bot-gal h-gal ho-event-mob-bot-sp">
                                    <h4>Photo Gallery</h4>
                                    <ul>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/8.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/9.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/10.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/11.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/1.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/2.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/3.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/4.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/5.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/6.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/7.jpg')}
                                                alt=""
                                            />
                                        </li>
                                        <li>
                                            <img
                                                className="materialboxed"
                                                data-caption="Education master image captions"
                                                src={require('../assets/images/ami/8.jpg')}
                                                alt=""
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bot-gal h-vid ho-event-mob-bot-sp">
                                    <h4>Video Gallery</h4>
                                    <iframe
                                        src="https://www.youtube.com/embed/2WqFtiR4-F4?autoplay=0&showinfo=0&controls=0"
                                        allowFullScreen
                                        title="youtube"
                                    />
                                    <h5>Maecenas sollicitudin lacinia</h5>
                                    <p>
                                        Maecenas finibus neque a tellus auctor mattis. Aliquam tempor varius ornare.
                                        Maecenas dignissim leo leo, nec posuere purus finibus vitae.
                                    </p>
                                    <p>
                                        Quisque vitae neque at tellus malesuada convallis. Phasellus in lectus vitae ex
                                        euismod interdum non a lorem. Nulla bibendum. Curabitur mi odio, tempus quis
                                        risus cursus.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="bot-gal h-blog ho-event">
                                    <h4>News &amp; Event</h4>
                                    <div className="ho-event">
                                        <ul>
                                            {this.showNewEvent()}
                                   
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterClient />
            </div>
        );
    }
}
