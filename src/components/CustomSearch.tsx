import './CustomSearch.scss';
import SearchIcon from '@material-ui/icons/Search';
import CircularSpinner from './CircularSpinner';
import {useEffect,useState} from 'react';


export const CustomSearch = ()=>{
    let value = 1;
    const [data,setData] = useState('');
    function updateValue(e:string){
        useEffect( ()=>{
        setData(data)
         },[e])
    }
    

    return(
        <div className="custom-text-input">
            <input type="text" name="" id="" onChange={(e)=>updateValue}placeholder="Type a user name here"/>
             <span>
                 {
                 data==''?<SearchIcon style={{color:'#fff'}}/>:<CircularSpinner/>
             }</span>
           
        </div>
       
    )
}