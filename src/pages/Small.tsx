import './Small.scss';
import React,{useContext,createContext} from "react";
import { UsersPage } from './Users';
import { CompaniesPage } from './Companies';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { gitHubuser } from '../App';

export const toUserCompanySmall:any|any[] = createContext(null)

export function Smaller(){
    const GitHubOutcome:any = useContext(gitHubuser)
    let canIChange:boolean = true;
    return (
         <div className="mobile-content ">
       
         <Router>
         <div className="splitters-descriptors">
             <div className="menus">
                 <div className="github-users-left ">
                     
                     <Link to="/users" className="inside-menu github-u">USERS({GitHubOutcome[0].length})</Link>
                 </div>
                 <div className="github-companies-right">
                     <Link to="/companies" className="inside-menu ">COMPANIES({GitHubOutcome[1].length})</Link>
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