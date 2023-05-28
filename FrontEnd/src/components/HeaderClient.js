import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class HeaderClient extends Component {
    constructor(props) {
        super(props);

        this.social_Header = React.createRef();
        this.loginHeader = React.createRef();
        this.pop_close = React.createRef();
        this.loginSuccess = React.createRef();
        this.loginSuccess_AccountName = React.createRef();
        this.noneLogin = React.createRef();
        this.userName = React.createRef();
        this.userPass = React.createRef();
        this.dashboard_menu = React.createRef();
        this.loginFail = React.createRef();
        this.state = {
            Scholar: JSON.parse(localStorage.getItem('Account')),
            Login: {
                username: '',
                passwork: '',
                RoleId: -1,
            },
            CreateAccount: {
                username: '',
                password: '',
                email: '',
                phoneNumber: null,
                name: '',
                age: 0,
                gender: 'M',
                address: '',
                descreption: '',

                dateOfbirth: '',
            },
        };
    }
    async getToken(e) {
        e.preventDefault();
        var datasend = {
            username: this.state.Login.username,
            password: this.state.Login.passwork,
        };
        console.log(this.state.Login);

        await fetch('https://localhost:7156/api/Auth/Login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datasend),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                localStorage.setItem('Token', data.accessToken);
                localStorage.setItem('RoleId', data.roleId);
                if (data.roleId === 1 || data.roleId === 2) {
                    if (window.confirm('Bạn có muốn  chuyển sang trang admin không?')) {
                        // Thực hiện hành động nếu người dùng đồng ý

                        window.location.href = 'http://localhost:3000/admin';
                    } else {
                        // Thực hiện hành động nếu người dùng từ chối
                        console.log('Người dùng đã từ chối');
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                localStorage.setItem('Token', '');
            });
    }

    logOut(e) {
        e.preventDefault();
        this.social_Header.current.style.display = 'block';
        this.noneLogin.current.style.display = 'block';
        this.loginSuccess.current.style.display = 'none';
        localStorage.removeItem('Account');
        localStorage.removeItem('Token');
        this.dashboard_menu.current.style.display = 'none';
        window.location.href = '../';
    }
    displayLogin() {
        this.social_Header.current.style.display = 'none';
        this.noneLogin.current.style.display = 'none';
        this.loginSuccess.current.style.display = 'block';
        this.pop_close.current.click();

        this.loginSuccess_AccountName.current.innerHTML = `Hello: ${this.state.Scholar.name} `;
        this.dashboard_menu.current.style.display = 'block';
    }
    componentDidMount() {
        if (this.state.Scholar !== null) {
            this.displayLogin();
        }
    }
    handleChangeLogin(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState((prevState) => ({
            Login: {
                ...prevState.Login,
                [name]: value,
            },
        }));
    }
    async handleLogin(e) {
        e.preventDefault();
        await this.getToken(e);

        var token = localStorage.getItem('Token');
        if (token && token.trim() !== '') {
            // var id = await this.getIdAccount();
            try {
                var myHeaders = new Headers();
                myHeaders.append('Authorization', 'Bearer ' + localStorage.getItem('Token'));
                console.log(localStorage.getItem('Token'));
                var requestOptions = {
                    method: 'GET',
                    headers: myHeaders,
                    redirect: 'follow',
                };
                const response = await fetch(
                    'https://localhost:7156/api/ScholarDetail/GetDeailScholarLogin',
                    requestOptions,
                );
                var data = await response.json();
                // cap nhat gia tri cho state
                this.setState(
                    {
                        Scholar: data,
                    },
                    () => {
                        // set Account vao local storage
                        localStorage.setItem('Account', JSON.stringify(data));
                        this.displayLogin();
                        // chuyen sang trang admin
                    },
                );
            } catch (err) {
                console.log(err);
            }
            // edit header
        } else {
            this.userName.current.style.borderBottom = '2px solid red';
            this.userPass.current.style.borderBottom = '2px solid red';
            this.loginFail.current.style.display = 'block';
        }
    }
    handleOnchangeCreateAccount(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState((prevState) => ({
            CreateAccount: {
                ...prevState.CreateAccount,
                [name]: value,
            },
        }));
    }
    async handleCreateAccount(e) {
        e.preventDefault();
        var datasent = {
            username: this.state.CreateAccount.username,
            password: this.state.CreateAccount.password,
            name: this.state.CreateAccount.name,
            email: this.state.CreateAccount.email,
            phoneNumber: String(this.state.CreateAccount.phoneNumber),
            age: parseInt(this.state.CreateAccount.age),
            gender: this.state.CreateAccount.gender,
            address: this.state.CreateAccount.address,
            descreption: this.state.CreateAccount.descreption,

            dateOfbirth: this.state.CreateAccount.dateOfbirth,
        };
        console.log(datasent);
        var res = await fetch('https://localhost:7156/api/ScholarRegister/Create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datasent),
        });
        if (res.ok) {
            var data = await res.text();
            alert(data);
            this.pop_close.current.click();
        }
    }
    handleSearch(event) {
        event.preventDefault();

        const searchQuery = event.target.elements.search.value;
        window.location.href = `../search?key=${searchQuery}`;
    }
    render() {
        return (
            <div>
                <section>
                    {/* LOGIN SECTION */}
                    <div id="modal1" className="modal fade" role="dialog">
                        <div className="log-in-pop">
                            <div className="log-in-pop-left">
                                <h1>Hello...</h1>
                                <p>Don't have an account? Create your account. It's take less then a minutes</p>
                                <h4>Login with social media</h4>
                                <ul>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-facebook" /> Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-google" /> Google+
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-twitter" /> Twitter
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="log-in-pop-right">
                                <Link
                                    to="../#"
                                    className="pop-close"
                                    ref={this.pop_close}
                                    data-dismiss="modal"
                                    onClick={(e) => {
                                        e.preventDefault();
                                    }}
                                >
                                    <img src={require('../assets/images/cancel.png')} alt="" />
                                </Link>
                                <h4>Login</h4>
                                <p>Don't have an account? Create your account. It's take less then a minutes</p>
                                <form
                                    className="s12"
                                    onSubmit={(e) => {
                                        this.handleLogin(e);
                                    }}
                                >
                                    <div>
                                        <div className="input-field s12">
                                            <input
                                                type="text"
                                                data-ng-model="name"
                                                className="validate"
                                                name="username"
                                                ref={this.userName}
                                                value={this.state.Login.username}
                                                onChange={(e) => this.handleChangeLogin(e)}
                                            />
                                            <label>User name</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-field s12">
                                            <input
                                                type="password"
                                                className="validate"
                                                value={this.state.Login.passwork}
                                                name="passwork"
                                                ref={this.userPass}
                                                onChange={(e) => this.handleChangeLogin(e)}
                                            />
                                            <label>Password</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="s12 log-ch-bx">
                                            <p>
                                                <input type="checkbox" id="test5" />
                                                <label htmlFor="test5">Remember me</label>
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-field s4">
                                            <p
                                                style={{ color: 'red', fontSize: '10px', display: 'none' }}
                                                ref={this.loginFail}
                                            >
                                                UserName or Password is Incorrect !
                                            </p>
                                            <input
                                                type="submit"
                                                defaultValue="Login"
                                                className="waves-effect waves-light log-in-btn"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-field s12">
                                            {' '}
                                            <Link
                                                to="../#"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#modal3"
                                            >
                                                Forgot password
                                            </Link>{' '}
                                            |{' '}
                                            <Link
                                                to="../#"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#modal2"
                                            >
                                                Create a new account
                                            </Link>{' '}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* REGISTER SECTION */}
                    <div id="modal2" className="modal fade" role="dialog">
                        <div className="log-in-pop">
                            <div className="log-in-pop-left">
                                <h1>Hello...</h1>
                                <p>Don't have an account? Create your account. It's take less then a minutes</p>
                                <h4>Login with social media</h4>
                                <ul>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-facebook" /> Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-google" /> Google+
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-twitter" /> Twitter
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="log-in-pop-right">
                                <Link to="../#" className="pop-close" data-dismiss="modal">
                                    <img src={require('../assets/images/cancel.png')} alt="" />
                                </Link>
                                <h4>Create an Account</h4>
                                <p>Don't have an account? Create your account. It's take less then a minutes</p>
                                <form onSubmit={(e) => this.handleCreateAccount(e)} className="s12">
                                    <div className="form-group">
                                        <label htmlFor="username">Username:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            name="username"
                                            required
                                            value={this.state.CreateAccount.username}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password:</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={this.state.CreateAccount.password}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Name:</label>
                                        <input
                                            type="text"
                                            value={this.state.CreateAccount.name}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input
                                            type="email"
                                            value={this.state.CreateAccount.email}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phoneNumber">Phone Number:</label>
                                        <input
                                            type="number"
                                            value={this.state.CreateAccount.phoneNumber}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="age">Age:</label>
                                        <input
                                            type="number"
                                            value={this.state.CreateAccount.Age}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            className="form-control"
                                            id="age"
                                            name="age"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="gender">Gender:</label>
                                        <select
                                            className="form-control"
                                            id="gender"
                                            name="gender"
                                            value={this.state.CreateAccount.gender}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            required
                                        >
                                            <option value="">--Select--</option>
                                            <option value="M">Male</option>
                                            <option value="F">Female</option>
                                            <option value="O">Orther</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address:</label>
                                        <textarea
                                            className="form-control"
                                            id="address"
                                            value={this.state.CreateAccount.address}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            name="address"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="descreption">Description:</label>
                                        <textarea
                                            value={this.state.CreateAccount.descreption}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            className="form-control"
                                            id="descreption"
                                            name="descreption"
                                        ></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="dateOfbirth">Date of Birth:</label>
                                        <input
                                            value={this.state.CreateAccount.dateOfbirth}
                                            onChange={(e) => this.handleOnchangeCreateAccount(e)}
                                            type="datetime-local"
                                            className="form-control"
                                            id="dateOfbirth"
                                            name="dateOfbirth"
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Create
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* FORGOT SECTION */}
                    <div id="modal3" className="modal fade" role="dialog">
                        <div className="log-in-pop">
                            <div className="log-in-pop-left">
                                <h1>Hello... </h1>
                                <p>Don't have an account? Create your account. It's take less then a minutes</p>
                                <h4>Login with social media</h4>
                                <ul>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-facebook" /> Facebook
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-google" /> Google+
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="../#">
                                            <i className="fa fa-twitter" /> Twitter
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="log-in-pop-right">
                                <Link to="../#" className="pop-close" data-dismiss="modal">
                                    <img src={require('../assets/images/cancel.png')} alt="" />
                                </Link>
                                <h4>Forgot password</h4>
                                <p>Don't have an account? Create your account. It's take less then a minutes</p>
                                <form className="s12">
                                    <div>
                                        <div className="input-field s12">
                                            <input type="text" data-ng-model="name3" className="validate" />
                                            <label>User name or email id</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-field s4">
                                            <input
                                                type="submit"
                                                defaultValue="Submit"
                                                className="waves-effect waves-light log-in-btn"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="input-field s12">
                                            {' '}
                                            <Link
                                                to="../#"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#modal1"
                                            >
                                                Are you a already member ? Login
                                            </Link>{' '}
                                            |{' '}
                                            <Link
                                                to="../#"
                                                data-dismiss="modal"
                                                data-toggle="modal"
                                                data-target="#modal2"
                                            >
                                                Create a new account
                                            </Link>{' '}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="icon-float">
                        <ul>
                            <li>
                                <Link to="../#" className="sh">
                                    1k <br /> Share
                                </Link>{' '}
                            </li>
                            <li>
                                <Link to="../#" className="fb1">
                                    <i className="fa fa-facebook" aria-hidden="true" />
                                </Link>{' '}
                            </li>
                            <li>
                                <Link to="../#" className="gp1">
                                    <i className="fa fa-google-plus" aria-hidden="true" />
                                </Link>{' '}
                            </li>
                            <li>
                                <Link to="../#" className="tw1">
                                    <i className="fa fa-twitter" aria-hidden="true" />
                                </Link>{' '}
                            </li>
                            <li>
                                <Link to="../#" className="li1">
                                    <i className="fa fa-linkedin" aria-hidden="true" />
                                </Link>{' '}
                            </li>
                            <li>
                                <Link to="../#" className="wa1">
                                    <i className="fa fa-whatsapp" aria-hidden="true" />
                                </Link>{' '}
                            </li>
                            <li>
                                <Link to="../#" className="sh1">
                                    <i className="fa fa-envelope-o" aria-hidden="true" />
                                </Link>{' '}
                            </li>
                        </ul>
                    </div>
                </section>
                {/* MOBILE MENU */}
                <section>
                    <div className="ed-mob-menu">
                        <div className="ed-mob-menu-con">
                            <div className="ed-mm-left">
                                <div className="wed-logo">
                                    <Link to="../">
                                        <img src={require('../assets/images/logo.png')} alt="" />
                                    </Link>
                                </div>
                            </div>
                            <div className="ed-mm-right">
                                <div className="ed-mm-menu">
                                    <Link to="../#!" className="ed-micon">
                                        <i className="fa fa-bars" />
                                    </Link>
                                    <div className="ed-mm-inn">
                                        <Link to="../#!" className="ed-mi-close">
                                            <i className="fa fa-times" />
                                        </Link>
                                        <h4>All Courses</h4>
                                        <ul>
                                            <li>
                                                <Link to="../course-details">Accounting/Finance</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">civil engineering</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Art/Design</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Marine Engineering</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Business Management</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Journalism/Writing</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Physical Education</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Political Science</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Sciences</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Statistics</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Web Design/Development</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">SEO</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Google Business</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Graphics Design</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Networking Courses</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Information technology</Link>
                                            </li>
                                        </ul>
                                        <h4>User Account</h4>
                                        <ul>
                                            <li>
                                                <Link to="../#!" data-toggle="modal" data-target="#modal1">
                                                    Sign In
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="../#!" data-toggle="modal" data-target="#modal2">
                                                    Register
                                                </Link>
                                            </li>
                                        </ul>
                                        <h4>All Pages</h4>
                                        <ul>
                                            <li>
                                                <Link to="../">Home</Link>
                                            </li>
                                            <li>
                                                <Link to="../about">About us</Link>
                                            </li>
                                            <li>
                                                <Link to="../admission">Admission</Link>
                                            </li>
                                            <li>
                                                <Link to="../all-courses">All courses</Link>
                                            </li>
                                            <li>
                                                <Link to="../course-details">Course details</Link>
                                            </li>
                                            <li>
                                                <Link to="../awards">Awards</Link>
                                            </li>
                                            <li>
                                                <Link to="../seminar">Seminar</Link>
                                            </li>
                                            <li>
                                                <Link to="../events">Events</Link>
                                            </li>
                                            <li>
                                                <Link to="../event-details">Event details</Link>
                                            </li>
                                            <li>
                                                <Link to="../event-register">Event register</Link>
                                            </li>
                                            <li>
                                                <Link to="../contact-us">Contact us</Link>
                                            </li>
                                        </ul>
                                        <h4>User Profile</h4>
                                        <ul>
                                            <li>
                                                <Link to="../dashboard">User profile</Link>
                                            </li>
                                            <li>
                                                <Link to="../db-courses">Courses</Link>
                                            </li>
                                            <li>
                                                <Link to="../db-exams">Exams</Link>
                                            </li>
                                            <li>
                                                <Link to="../db-profile">Prfile</Link>
                                            </li>
                                            <li>
                                                <Link to="../db-time-line">Time line</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*HEADER SECTION*/}
                <section>
                    {/* TOP BAR */}
                    <div className="ed-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="ed-com-t1-left">
                                        <ul>
                                            <li>
                                                <Link to="../#">
                                                    Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="../#">Phone: +101-1231-1231</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ed-com-t1-right" ref={this.loginHeader}>
                                        <div ref={this.loginSuccess} style={{ display: 'none' }}>
                                            <b
                                                style={{ color: 'white', lineHeight: '30px' }}
                                                ref={this.loginSuccess_AccountName}
                                            >
                                                {/* Hello: {this.state.Scholar.name} */}
                                            </b>
                                            <button
                                                type="button"
                                                className="bg-light btn text-bold text-dark btn-xs m-2 text-capitalize"
                                                style={{ marginLeft: '10px' }}
                                                onClick={(e) => {
                                                    this.logOut(e);
                                                }}
                                            >
                                                {' '}
                                                Logout{' '}
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="16"
                                                    height="16"
                                                    fill="currentColor"
                                                    className="bi bi-box-arrow-right"
                                                    viewBox="0 0 16 16"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                                                    />
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                        <ul ref={this.noneLogin}>
                                            <li>
                                                <Link to="../#!" data-toggle="modal" data-target="#modal1">
                                                    Sign In
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="../#!" data-toggle="modal" data-target="#modal2">
                                                    Sign Up
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ed-com-t1-social" ref={this.social_Header}>
                                        <ul>
                                            <li>
                                                <Link to="../#">
                                                    <i className="fa fa-facebook" aria-hidden="true" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="../#">
                                                    <i className="fa fa-google-plus" aria-hidden="true" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="../#">
                                                    <i className="fa fa-twitter" aria-hidden="true" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* LOGO AND MENU SECTION */}
                    <div className="top-logo" data-spy="affix" data-offset-top={250}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="wed-logo">
                                        <Link to="../">
                                            <img src={require('../assets/images/logo.png')} alt="" />
                                        </Link>
                                    </div>
                                    <div className="main-menu">
                                        <ul>
                                            <li>
                                                <Link to="../">Home</Link>
                                            </li>

                                            <li>
                                                <Link to="../allcourses"> Courses</Link>
                                            </li>
                                            <li
                                                className="dashboard-menu"
                                                ref={this.dashboard_menu}
                                                style={{ display: 'none' }}
                                            >
                                                <Link to="../dashboard" className="mm-arr">
                                                    User Dashboard
                                                </Link>
                                                {/* MEGA MENU 1 */}
                                                <div className="mm-pos">
                                                    <div className="dashboard-mm m-menu">
                                                        <div className="m-menu-inn">
                                                            <div className="mm1-com mm1-s1">
                                                                <div className="ed-course-in">
                                                                    <Link
                                                                        className="course-overlay menu-about"
                                                                        to="../admission"
                                                                    >
                                                                        <img
                                                                            src={require('../assets/images/h-about.jpg')}
                                                                            alt=""
                                                                        />
                                                                        <span>Academics</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="mm1-com mm1-s2">
                                                                <p>
                                                                    Want to change the world? At Berkeley we’re doing
                                                                    just that. When you join the Golden Bear community,
                                                                    you’re part of an institution that shifts the global
                                                                    conversation every single day.
                                                                </p>
                                                                <Link to="../about" className="mm-r-m-btn">
                                                                    Read more
                                                                </Link>
                                                            </div>
                                                            <div className="mm1-com mm1-s3">
                                                                <ul>
                                                                    <li>
                                                                        <Link to="../dashboard">Dashboard </Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="../dbprofile">Student profile</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="../dbcourses">Dashboard courses</Link>
                                                                    </li>
                                                                    <li>
                                                                        <Link to="../dbexams">Dashboard exams</Link>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="../events">Events</Link>
                                            </li>

                                            {/*
                                        <li><Link class='dropdown-button ed-sub-menu' href='#' data-activates='dropdown1'>Courses</Link></li>*/}
                                            <li className="admi-menu">
                                                <Link to="../#" className="mm-arr">
                                                    Contact & Admission
                                                </Link>
                                                {/* MEGA MENU 1 */}
                                                <div className="mm-pos">
                                                    <div className="admi-mm m-menu">
                                                        <div className="m-menu-inn">
                                                            <div className="mm2-com mm1-com mm1-s1">
                                                                <div className="ed-course-in">
                                                                    <Link className="course-overlay" to="../awards">
                                                                        <img
                                                                            src={require('../assets/images/h-about1.jpg')}
                                                                            alt=""
                                                                        />
                                                                        <span>History and Award</span>
                                                                    </Link>
                                                                </div>
                                                                <p>
                                                                    Technical schools were founded in the 1800s to
                                                                    provide hands-on training in vocational skills. They
                                                                    grew in popularity in the early 1900s, and today
                                                                    offer a wide range of programs to prepare students
                                                                    for a variety of careers.
                                                                </p>
                                                                <Link to="../awards" className="mm-r-m-btn">
                                                                    Read more
                                                                </Link>
                                                            </div>
                                                            <div className="mm2-com mm1-com mm1-s1">
                                                                <div className="ed-course-in">
                                                                    <Link className="course-overlay" to="../about">
                                                                        <img
                                                                            src={require('../assets/images/h-adm1.jpg')}
                                                                            alt=""
                                                                        />
                                                                        <span>About US</span>
                                                                    </Link>
                                                                </div>
                                                                <p>
                                                                    We are a team of passionate individuals who are
                                                                    committed to providing quality education and
                                                                    training to our students. We believe that everyone
                                                                    has the potential to succeed, and we are here to
                                                                    help them reach their full potential.
                                                                </p>
                                                                <Link to="../about" className="mm-r-m-btn">
                                                                    Read more
                                                                </Link>
                                                            </div>
                                                            <div className="mm2-com mm1-com mm1-s1">
                                                                <div className="ed-course-in">
                                                                    <Link className="course-overlay" to="../contactus">
                                                                        <img
                                                                            src={require('../assets/images/h-cam1.jpg')}
                                                                            alt=""
                                                                        />
                                                                        <span>Contact US</span>
                                                                    </Link>
                                                                </div>
                                                                <p>
                                                                    Have questions? We're here to help. Contact us by
                                                                    phone, email, or social media. We look forward to
                                                                    hearing from you!
                                                                </p>
                                                                <Link to="../contactus" className="mm-r-m-btn">
                                                                    Read more
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="all-drop-down-menu"></div>
                            </div>
                        </div>
                    </div>
                    <div className="search-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="search-form">
                                        <form onSubmit={(e) => this.handleSearch(e)}>
                                            <div className="sf-type">
                                                <div className="sf-input">
                                                    <input
                                                        type="text"
                                                        id="sf-box"
                                                        name="search"
                                                        placeholder="Search course and discount courses"
                                                    />
                                                </div>
                                                <div className="sf-list">
                                                    <ul>
                                                        <li>
                                                            <Link to="../course-details">Accounting/Finance</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">civil engineering</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Art/Design</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Marine Engineering</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Business Management</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Journalism/Writing</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Physical Education</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Political Science</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Sciences</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Statistics</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Web Design/Development</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">SEO</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Google Business</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Graphics Design</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Networking Courses</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="../course-details">Information technology</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="sf-submit">
                                                <input type="submit" defaultValue="Search Course" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*END HEADER SECTION*/}
            </div>
        );
    }
}
