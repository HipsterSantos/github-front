import './Large.scss' ;
import { CompaniesPage } from './Companies';
import React,{useContext,createContext} from "react";
import {UsersPage}from './Users'
export const toUserCompanyLarge:any|any[] = createContext(null)
export function Larger(){
   
    return ( 
    <div className="desktop-content">
          <div className="splitters-descriptors">
          
                <div className="github-users-left">
                    <div className="github">USERS(323)</div>
                    <UsersPage/>
                </div>
                <div className="github-companies-right">
                       <div className="github">COMPANIES(423)</div>
                       <CompaniesPage/>
                 </div>
              
          </div>
        </div>
    )
}