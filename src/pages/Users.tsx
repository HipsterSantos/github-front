import './Users.scss'
import { List } from '../components/List';
import { Data } from '../shared/shared';
import { toUserCompanySmall } from './Small';
import { gitHubuser, shipper } from '../App';
import {useContext,createContext} from 'react';

export const UsersPage = ()=>{
  const GitHubOutcome:any = useContext(gitHubuser)
  
    console.log('from user page',GitHubOutcome)
    return(
        <div className="github-companies-right">
                    
                <div className="user-contributions">
                  <p className="user-left">USER<span></span></p>
                  <p className="companies-right">CONTRIBUTIONS<span></span></p>
                </div>
                <div className="content-itself">
                     <List collection={GitHubOutcome[0]}/>
                   <p id="p" className="show-more">SHOW MORE</p>      
                 </div>
    </div>
    )
}