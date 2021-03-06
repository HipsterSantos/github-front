import './Users.scss'
import { List } from '../components/List';
import { Data } from '../shared/shared';
import { toUserCompanySmall } from './Small';

import {useContext,createContext} from 'react';
import { toUserCompanyLarge } from './Large';
export const toList:any|any[] = createContext(null)
export const UsersPage = ()=>{
    const receivedFromSmall = useContext(toUserCompanySmall || toUserCompanyLarge)
    // console.log('from user page',receivedFromSmall)
    return(
        <div className="github-companies-right">
                    
                <div className="user-contributions">
                  <p className="user-left">USER<span></span></p>
                  <p className="companies-right">CONTRIBUTIONS<span></span></p>
                </div>
                <div className="content-itself">
                   <toList.Provider value={receivedFromSmall}>
                     <List/>
                  </toList.Provider>
                           <p id="p" className="show-more">SHOW MORE</p>      
                 </div>
    </div>
    )
}