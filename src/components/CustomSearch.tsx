import './CustomSearch.scss';
import SearchIcon from '@material-ui/icons/Search';
import CircularSpinner from './CircularSpinner';
import {useEffect,useState} from 'react';


export const CustomSearch = (props:{receive:(e:string|any)=>void})=>{
    
    const [data,setData] = useState('');
    let timeout:any = null;
    
    function updateValue(e:string|any){
        clearTimeout(timeout)
        timeout = setTimeout(function(){
            setData(e.target.value)
            // console.log(e.target.value)
            props.receive(e.target.value);
        },1000)
        
    }
    
    return(
        <div className="custom-text-input">
            
            <input type="text" name="" id=""
             placeholder="Type a user name here" 
             onKeyUp={updateValue}/>
             <span>
                 {
                 data===''?<SearchIcon style={{color:'#fff'}}/>:<CircularSpinner/>
             }</span>
        </div>
        
       
    )
}