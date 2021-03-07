import './Companies.scss'
import { List } from '../components/List';
import { Data } from '../shared/shared';
import { toUserCompanySmall } from './Small';
import { gitHubuser } from '../App';
import {useContext,createContext} from 'react';


export const toList:any|any[] = createContext(null)
export const CompaniesPage = ()=>{
  const GitHubOutcome:any = useContext(gitHubuser)
    return(
        <div className="github-companies-right">
                    
                <div className="user-contributions">
                  <p className="user-left">COMPANY<span></span></p>
                  <p className="companies-right">PEOPLE<span></span></p>
                </div>
                <div className="content-itself">
                     <List collection={GitHubOutcome[0]}/>
                   <p id="p" className="show-more">SHOW MORE</p>      
                 </div>
    </div>
    )
}