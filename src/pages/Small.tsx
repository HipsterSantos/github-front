import './Small.scss';
import React from "react";
import { UsersPage } from './Users';
import { CompaniesPage } from './Companies';
import { Data } from '../shared/shared';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export function Smaller(){
    // console.log(fromMain)
    return (
         <div className="mobile-content ">
       
         <Router>
         <div className="splitters-descriptors">
             <div className="menus">
                 <div className="github-users-left">
                     <Link to="/users" className="inside-menu">USERS(323)</Link>
                 </div>
                 <div className="github-companies-right">
                     <Link to="/companies" className="inside-menu">COMPANIES(423)</Link>
                 </div>
             </div>
               <div>
                  <Route path="/users" render={()=><UsersPage/>}></Route>
                  <Route path="/companies" render={()=><CompaniesPage/>}></Route>
             
               </div>
             
       </div>
       
       </Router>
     </div>
    )
}