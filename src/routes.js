import Dashboard from "views/Dashboard.js";
import AddDoctor from "views/AddDoctor";
import Login from "views/Login";
import Forgot from "views/Forgot";
import Appointment from "views/Appointment";
import AddPatient from "views/AddPatient";
import Blood from "views/Blood";
import Video from "views/Video";
import Hospitals from "views/Hospitals";
import Emergency from "views/Emergency";

var routes = [  
  {
    path: "/Appointment",
    name: "Appointments",    
    icon: "tim-icons icon-bullet-list-67",
    component: <Appointment />,
    layout: "/admin",
  },  
  {
    path: "/Blood",
    name: "Blood Availability",    
    icon: "tim-icons icon-heart-2",
    component: <Blood />,
    layout: "/admin",
  },
  {
    path: "/Video",
    name: "Video Consultation",    
    icon: "tim-icons icon-video-66",
    component: <Video />,
    layout: "/admin",
  },
  {
    path: "/AddPatient",
    name: "Add Patient",    
    icon: "tim-icons icon-simple-add",
    component: <AddPatient />,
    layout: "/admin",
  },
  {
    path: "/Emergency",
    name: "Emergency Contact",    
    icon: "tim-icons icon-simple-add",
    component: <Emergency />,
    layout: "/admin",
  },
  
  {
    path: "/Adddoctor",
    name: "Add Doctor",    
    icon: "tim-icons icon-simple-add",
    component: <AddDoctor />,
    layout: "/admin",
  },
  {
    path: "/Login",
    name: "Login",    
    icon: "tim-icons icon-bullet-list-67",
    component: <Login />,
    layout: "/admin",
  },
  {
    path: "/Forgot",
    name: "Forgot",    
    icon: "tim-icons icon-bullet-list-67",
    component: <Forgot />,
    layout: "/admin",
  },
  
];
export default routes;
