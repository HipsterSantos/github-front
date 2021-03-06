import './Small.scss';
import React,{useContext,createContext} from "react";
import { UsersPage } from './Users';
import { CompaniesPage } from './Companies';
import { Data } from '../shared/shared';
import { fromMain } from './Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const toUserCompanySmall:any|any[] = createContext(null)

export function Smaller(){
    // console.log(fromMain)
    const receivedFromMain = useContext(fromMain);
    // console.log('this is coming form main',receivedFromMain)
    let canIChange:boolean = true;
    return (
         <div className="mobile-content ">
       
         <Router>
         <div className="splitters-descriptors">
             <div className="menus">
                 <div className="github-users-left ">
                     
                     <Link to="/users" className="inside-menu github-u">USERS(323)</Link>
                 </div>
                 <div className="github-companies-right">
                     <Link to="/companies" className="inside-menu ">COMPANIES(423)</Link>
                 </div>
             </div>
               <div>
                 <toUserCompanySmall.Provider value={receivedFromMain}>
                     <Route path="/users" render={()=><UsersPage/>}></Route>
                    <Route path="/companies" render={()=><CompaniesPage/>}></Route>
            
                 </toUserCompanySmall.Provider>
               </div>
             
       </div>
       
       </Router>
     </div>
    )
}