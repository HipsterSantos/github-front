import './Large.scss' ;
import { CompaniesPage } from './Companies';
import React,{useContext,createContext} from "react";
import {UsersPage}from './Users'
import { fromMain } from './Main';
export const toUserCompanyLarge:any|any[] = createContext(null)
export function Larger(){
    const receivedFromMain = useContext(fromMain);
    console.log('from large content ',receivedFromMain)
    return ( 
    <div className="desktop-content">
          <div className="splitters-descriptors">
          <toUserCompanyLarge.Provider value={receivedFromMain}>
                <div className="github-users-left">
                    <div className="github">USERS(323)</div>
                    <UsersPage/>
                </div>
                <div className="github-companies-right">
                       <div className="github">COMPANIES(423)</div>
                       <CompaniesPage/>
                 </div>
         </toUserCompanyLarge.Provider>       
          </div>
        </div>
    )
}