import {useState,useEffect,useContext, createContext}from 'react';
import { Larger } from './Large';
import { Smaller } from './Small';
import { gitHubuser } from '../App';

export function Main(){
  var value = useContext(gitHubuser)
      let small = useMedia("(max-width: 768px)")
      let large = useMedia("(min-width: 769px)")
      
    return(
        <div>
         
            {small?<Smaller/>:<Larger/>}
         
        </div>
    )
}
export function useMedia(query: string) {
    // tslint:disable-next-line:prettier
    const [matches,setMatches] = useState(window.matchMedia(query).matches);
    useEffect(()=>{
      let media = window.matchMedia(query);
      if(media.matches !== matches){
        setMatches(media.matches);
      }
      let listener = ()=> setMatches(media.matches);
      media.addListener(listener);
      return ()=> media.removeListener(listener);
    },[query])
  
    return matches;
  }