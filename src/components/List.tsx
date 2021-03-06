import './List.scss'
import empy from '../pages/empty.svg'
export const Item = ()=>{
    return( 
        <div className="list-main">
            <div className="divider"></div>
            <div className="whole-content">
                <div className="avatar">
                    <img src={empy} alt="" width="50" height="50"/>
                </div>
                <div className="content">
                    <p>John Doe</p> <br/>
                    <span>John doe</span>
                </div>
                <div className="contribution-people">
                    <p>23</p>
                </div>
            </div>
        </div>
    )
}

export const List  = ({user,org}:{user:any,org:any})=>{
    return(
        <div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        
    )
}