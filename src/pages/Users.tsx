import './Users.scss'
import { List } from '../components/List';
import { Data } from '../shared/shared';

export const UsersPage = ()=>{
    
    return(
        <div className="github-companies-right">
                    
                <div className="user-contributions">
                  <p className="user-left">USER<span></span></p>
                  <p className="companies-right">CONTRIBUTIONS<span></span></p>
                </div>
                <div className="content-itself">
                           <List/>
                           <p id="p" className="show-more">SHOW MORE</p>      
                 </div>
    </div>
    )
}