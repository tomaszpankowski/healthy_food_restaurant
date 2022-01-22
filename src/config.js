import {Redirect} from "react-router-dom";
import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Delivery from "./views/delivery";
import Error from "./views/error";
import Home from "./views/home";
import Login from "./views/login";
import Menu from "./views/menu";
import PrivacyPolicy from "./views/privacy";
import Register from "./views/register";
import Reservation from "./views/reservation";
import Services from "./views/services";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
        {navItem:true, exact:true, path:"/menu",name:"Menu",view:<Menu/>},
        {navItem:true, exact:true, path:"/services",name:"Services",view:<Services/>},
        {navItem:true, exact:true, path:"/about",name:"About",view:<About/>},
        {navItem:true, exact:true, path:"/delivery",name:"Delivery",view:<Delivery/>},
        {navItem:true, exact:true, path:"/reservation",name:"Reservation",view:<Reservation/>},
        {navItem:true, exact:true, path:"/contact",name:"Contact",view:<Contact/>},
        {navItem:true, exact:true, path:"/login",name:<span className="fa fa-user-circle"></span>,view:<Login backLink={{name:" Register now!",href:"/register"}}/>},
        {navItem:false, exact:true, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},
        {navItem:false, exact:true, path:"/register",name:"Register",view:<Register backLink={{name:" Login now!",href:"/login"}}/>},
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:true, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};

const APP_LINKS = {
    messages: "",
    users: ""
};

const MESSAGES = {
    comingSoon:{
        title:"Starting soon",
        text:"Hi, we are not ready yet, however we are starting soon. Please visit us again in a while."
    },    
    error404:{        
        title:"Page not found!",
        text:""
    }
};

export {
    appCfg,
    APP_LINKS,
    MESSAGES
}