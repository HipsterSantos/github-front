import './Large.scss' ;
import { CompaniesPage } from './Companies';
import React,{useContext,createContext} from "react";
import {UsersPage}from './Users'
import { gitHubuser } from '../App';
export const toUserCompanyLarge:any|any[] = createContext(null)
export function Larger(){
    const GitHubOutcome:any = useContext(gitHubuser)
    return ( 
    <div className="desktop-content">
          <div className="splitters-descriptors">
          
                <div className="github-users-left">
                    <div className="github">USERS({GitHubOutcome[0].length})</div>
                    <UsersPage/>
                </div>
                <div className="github-companies-right">
                       <div className="github">COMPANIES({GitHubOutcome[1].length})</div>
                       <CompaniesPage/>
                 </div>
              
          </div>
        </div>
    )
}