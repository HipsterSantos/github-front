import './List.scss'
import empy from '../pages/empty.svg'
import {useContext,createContext} from 'react';
import { gitHubuser } from '../App';


export const Item = (props:{login:string,totalc:number,avatar:string})=>{
    const GitHubOutcome:any = useContext(gitHubuser)
    console.log('from list and put it ====',GitHubOutcome)
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