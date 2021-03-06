import './Companies.scss'
import { List } from '../components/List';
import { Data } from '../shared/shared';
export const CompaniesPage = ()=>{
  
    return(
        <div className="github-companies-right">
                    
                <div className="user-contributions">
                  <p className="user-left">COMPANY<span></span></p>
                  <p className="companies-right">PEOPLE<span></span></p>
                </div>
                <div className="content-itself">
                           <List/>
                           <p id="p" className="show-more">SHOW MORE</p>      
                 </div>
    </div>
    )
}