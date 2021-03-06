import './Empty.message.scss';
import { useMedia } from './Main';
import empty from './empty.svg'
export function Empty(){
    let small = useMedia("(max-width: 768px)")
    return (
    <div className="empty-holder">
            <img src={empty}alt="" style={small?{width:'60px'}:{}}/>
            <p>Enter a login, name or company you are looking for.</p>
        </div>
    )
}