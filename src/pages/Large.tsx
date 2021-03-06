import './Large.scss' ;
import { CompaniesPage } from './Companies';
import {UsersPage}from './Users'
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