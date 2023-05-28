import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Blog } from "./pages/blog";

import { AllCourses } from "./pages/AllCourses";

import { Admission } from "./pages/Admission";
import { Awards } from "./pages/Awards";
import { Dashboard } from "./pages/Dashboard";
import { DbCourses } from "./pages/DbCourses";
import { DbExams } from "./pages/DbExam";
import { DbProfile } from "./pages/DbProfile";
import { DbTimeLine } from "./pages/DbTimeLine";
import { Events } from "./pages/Events";
import { ContactUs } from "./pages/ContactUs";
import  EventDetail  from "./pages/EventDetail";
import { Seminar } from "./pages/Seminar";
import { Departments } from "./pages/Departments";
import { EvenRegister } from "./pages/EventRegister";
import { Facilities } from "./pages/Facilities";
import { FacilitiesDetail } from "./pages/FacilitiesDetail";
import { GalleryPhoto } from "./pages/GalleryPhoto";
import { Research } from "./pages/Research";
// adminn
import { AdminAllEnquiry } from "./pages/AdminAllEnquiry";
import AdminViewEnquiry from "./pages/AdminViewEnquiry";
import { AdminEventEnquiry } from "./pages/AdminEventEnquiry";
import { AdminAdmissionEnquiry } from "./pages/AdminAdmissionEnquiry";
import { AdminCommonEnquiry } from "./pages/AdminCommonEnquir";
import { AdminCourseEnquiry } from "./pages/AdminCourseEnquiry";
// import event
import { AdminEventAll } from "./pages/AdminEventAll";
import AdminEventAdd from "./pages/AdminEventAdd";
// import Exam admin
import AdminExamAll from "./pages/AdminExamAll";

import { AdminAboutMenu } from "./pages/AdminAboutMenu";
import { AdminAdmissionMenu } from "./pages/AdminAdmissionMenu";
import { Admin } from "./pages/Admin";
import AdminExamAdd from "./pages/AdminExamAdd";
import { AdminAllCourses } from "./pages/AdminAllCourses";
import AdminAddCourses from "./pages/AdminAddCourses";
import { AdminUserAll } from "./pages/AdminUserAll";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./pages/NotFound";
import AdminEventEdit from "./pages/AdminEventEdit";
import {AdminTeacherAll} from "./pages/AdminTeacherAll";
import AdminTeacherAdd from "./pages/AdminTeacherAdd";
import AdminExamEdit from "./pages/AdminExamEdit";
import SearchClient from "./pages/SearchClient";
import AdminTeacherView from "./pages/AdminTeacherView";
import AdminScholarView from "./pages/AdminScholarView";
import AdminCourseRegister from "./pages/AdminCourseRegister";
import AdminViewCourse from "./pages/AdminViewCourse";

//import faculty
import { AdminFacultyAll } from "./pages/AdminFacultyAll";
import AdminAddFaculty from "./pages/AdminAddFaculty";
import AdminViewFaculty from "./pages/AdminViewFaculty";
import AdminEditFaculty from "./pages/AdminEditFaculty";

//import batch
import { AdminBatchAll } from "./pages/AdminBatchAll";
import AdminAddBatch from "./pages/AdminAddBatch";
import AdminEditBatch from "./pages/AdminEditBatch";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    // chau fix duong dan anh , the a  duong dan link
    path: "/About",
    element: <About />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },

  {
    path: "/Departments",
    element: <Departments />,
  },
  {
    path: "/EventRegister",
    element: <EvenRegister />,
  },
  {
    path: "/Facilities",
    element: <Facilities />,
  },
  {
    path: "/FacilitiesDetail",
    element: <FacilitiesDetail />,
  },
  {
    path: "/GalleryPhoto",
    element: <GalleryPhoto />,
  },
  {
    path: '/search',
    element: <SearchClient/>
  },
  {
    path: "/Research",
    element: <Research />,
  },
  {
    path:"/CourseDetails/:id",
    element: <CourseDetails/>,
  },
  {
    path: "/AllCourses",
    element: <AllCourses />,
  },

  {
    path: "/Admission",
    element: <Admission />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/DbCourses",
    element: <DbCourses />,
  },
  {
    path: "/DbTimeLine",
    element: <DbTimeLine />,
  },
  {
    path: "/DbExams",
    element: <DbExams />,
  },
  {
    path: "/DbProfile",
    element: <DbProfile />,
  },
  {
    path: "/Awards",
    element: <Awards />,
  },
  {
    path: "/Events",
    element: <Events />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/EventDetail/:id",
    element: <EventDetail />,
  },
  {
    path: "/Seminar",
    element: <Seminar />,
  },
   {
    path:'/notfound',
    element:<NotFound/>
   },
  // page admin
  {
    path: "/Admin",
    element: <Admin />,
  },
  //user admin
  {
    path: "/AdminAddCourses",
    element: <AdminAddCourses />,
  },
  {
    path: "/AdminUserAll",
    element: <AdminUserAll />,
  },
  {
    path: "/AdminScholarView/:id",
    element: <AdminScholarView />,
  },
  {
    path: "/AdminCourseRegister",
    element: <AdminCourseRegister />,
  },
  {
    path: "/AdminViewCourse/:id",
    element: <AdminViewCourse />,
  },
  // event admin
  {
    path: "/AdminEventAll",
    element: <AdminEventAll />,
  },
  {
    path: "/AdminEventAdd",
    element: <AdminEventAdd />,
  },
  {
    path: "/AdminEventEdit/:id",
    element: <AdminEventEdit />,
  },
  // Exam Admin
  {
    path: "/AdminExamAll",
    element: <AdminExamAll />,
  },
  {
    path: "/AdminExamAdd",
    element: <AdminExamAdd />,
  },
  {
    path: "/AdminExamEdit/:id",
    element: <AdminExamEdit />,
  },

  // old script
  {
    path: "/AdminAllEnquiry",
    element: <AdminAllEnquiry />,
  },
  {
    path: "/AdminViewEnquiry/:id",
    element: <AdminViewEnquiry />,
  },
  {
    path: "/AdminEventEnquiry",
    element: <AdminEventEnquiry />,
  },
  {
    path: "/AdminAdmissionEnquiry",
    element: <AdminAdmissionEnquiry />,
  },
  {
    path: "/AdminCommonEnquiry",
    element: <AdminCommonEnquiry />,
  },
  {
    path: "/AdminCourseEnquiry",
    element: <AdminCourseEnquiry />,
  },

  {
    path: "/AdminAllCourses",
    element: <AdminAllCourses />,
  },
  {
    path: "/AdminAboutMenu",
    element: <AdminAboutMenu />,
  },
  {
    path: "/AdminAdmissionMenu",
    element: <AdminAdmissionMenu />,
  },
  //admin teacher
  {
    path: "/AdminTeacherAll",
    element: <AdminTeacherAll />,
  },
  {
    path: "/AdminTeacherAdd",
    element: <AdminTeacherAdd />
  },
  {
    path: "/AdminTeacherView/:id",
    element: <AdminTeacherView />
  },
  //admin faculty
  {
    path: "/AdminFacultyAll",
    element: <AdminFacultyAll />,
  },
  {
    path: "/AdminAddFaculty",
    element: <AdminAddFaculty />,
  },
  {
    path: "/AdminViewFaculty/:id",
    element: <AdminViewFaculty />,
  },
  {
    path: "/AdminEditFaculty/:id",
    element: <AdminEditFaculty />,
  },
  //admin batch
  {
    path: "/AdminBatchAll",
    element: <AdminBatchAll />,
  },
  {
    path: "/AdminAddBatch",
    element: <AdminAddBatch />,
  },
  {
    path: "/AdminEditBatch/:id",
    element: <AdminEditBatch />,
  }
];

export default AppRoutes;
