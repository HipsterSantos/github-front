import './Large.scss' ;
import { CompaniesPage } from './Companies';
import React,{useContext,createContext} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {UsersPage}from './Users'
import { gitHubuser } from '../App';
export const toUserCompanyLarge:any|any[] = createContext(null)
export function Larger(){
    const GitHubOutcome:any = useContext(gitHubuser)
    return ( 
    <div className="desktop-content">
        <Router>
          <div className="splitters-descriptors">
          
                <div className="github-users-left">
                    <Link to="/" className="github inside-menu">USERS({GitHubOutcome[0].length})</Link>
                    <Route path="/" exact render={()=><UsersPage/>}></Route>
                </div>
                <div className="github-companies-right">
                       <Link to="/" className="github inside-menu">COMPANIES({GitHubOutcome[1].length})</Link>
                       <Route path="/" render={()=><CompaniesPage/>}></Route>
                 </div>
              
          </div>
          </Router>
        </div>
    )
}