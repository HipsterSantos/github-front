import './List.scss'
import empy from '../pages/empty.svg'
export const Item = ()=>{
    return( 
        <div className="list-main">
            <div className="divider"></div>
            <div className="whole-content">
                <div className="avatar">
                    <img src={"https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"} alt="" width="50" height="50"/>
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

export const List  = ()=>{
    return(
        <div>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
        
    )
}