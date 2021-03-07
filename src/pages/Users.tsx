import './Users.scss'
import { List } from '../components/List';
import { Data } from '../shared/shared';
import { toUserCompanySmall } from './Small';
import { gitHubuser, shipper } from '../App';
import {useContext,createContext} from 'react';

export const UsersPage = ()=>{
  const GitHubOutcome:any = useContext(gitHubuser)
  
  let cont:any[] = GitHubOutcome[0];
  let totalCont:any[] = cont;
  let timeout: any = null; 
  // console.log('from list and put it ====',cont)
  clearTimeout(timeout);
  setTimeout(()=>{
          const headers = {
              'Authorization': `bearer 348e0517425e6fcc7a815b6489626d381b9e2a65`,
          }
          cont.forEach( async (data:any) =>{
            // console.log('contribuitons loop')
              let body = {
                  "query": `query {
                      user(login: "${data.login}") {
                        name
                        contributionsCollection {
                          contributionCalendar {
                            
                            totalContributions
          
                          }
                        }
                      }
                    }`
              }
               
    
              const response =  fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
                 .then(data=>data.json())
                  .then((value:any)=>{
                       let  dataa = value
                          totalCont = [{...value,...data}];
                          console.log("Total coutn array",totalCont)
                        }) 
          })
     
  },1000)



    // console.log('from user page',GitHubOutcome)
    return(
        <div className="github-companies-right">
                    
                <div className="user-contributions">
                  <p className="user-left">USER<span></span></p>
                  <p className="companies-right">CONTRIBUTIONS<span></span></p>
                </div>
                <div className="content-itself">
                     <List collection={totalCont}/>
                   <p id="p" className="show-more">SHOW MORE</p>      
                 </div>
    </div>
    )
}