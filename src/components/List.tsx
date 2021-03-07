import './List.scss'
import empy from '../pages/empty.svg'
import {useContext,createContext} from 'react';
import { gitHubuser } from '../App';


export const Item = (props:{login:string,totalc:number,avatar:string})=>{
    const GitHubOutcome:any = useContext(gitHubuser)
    let cont:any[] = GitHubOutcome[0];
    let totalCont:any[] = [];
    let timeout: any = null; 
    clearTimeout(timeout);
    setTimeout(()=>{
            const headers = {
                'Authorization': `bearer e0d1a029679a1120cc9dc67275b3fd94321d9c24`,
            }
            cont.forEach( async (data:any) =>{
              console.log('contribuitons loop')
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
                            totalCont.push({...value,...cont});
                        //  console.log('Number of contribuition',value)
      
                          }) 
            })
        
        console.log('from list and put it ====',totalCont)
    },5000)


    return( 
        <div className="list-main">
            <div className="divider"></div>
            <div className="whole-content">
                <div className="avatar">
                    <img src={props.avatar} alt="" width="50" height="50"/>
                </div>
                <div className="content">
                    <p>{props.login}</p> <br/>
                    <span>{props.login}</span>
                </div>
                <div className="contribution-people">
                    <p>{props.totalc}</p>
                </div>
            </div>
        </div>
    )
}

export const List  = ({collection}:{collection:any[]})=>{
    return(<>
            {collection.map( data=>(

            <Item key={data.node_id} login={data.login} avatar={data.avatar_url} totalc={43}/>
            ))}   
            </>
    )
}