import './App.scss';
import { CustomSearch } from './components/CustomSearch';
import {useState,useEffect,createContext}from 'react';
import { fetchData } from './services/fetchData.service';
import { Main } from './pages/Main';
import { Empty } from './pages/Empty.message';
import { Data } from './shared/shared';
export function shipper(value:any){
  return value;
}
export const  gitHubuser:any = createContext('');
function App() {
    const [value,setValue] = useState('')
    let users:any[] = [];
    let fetcher = new fetchData(value);
 

    async function receiveInput(value:any){
      setValue(value);
      fetcher = new fetchData(value)
      shipper(value)
      
      
    }
    

    
    
  return (
    <div className="App">
 <div className="holder-content">
            <div className="description">
                <h1>Search for GitHub Users</h1>
                {/* {value} */}
            </div>
            <div className="search" style={{width:'inherit'}}>
                <div className="input-customized">
                    <CustomSearch receive={receiveInput}/>
                </div>
            </div>
            
            <div className="holder-responsive">
              <gitHubuser.Provider value={[fetcher.fetchAllUsers(),fetcher.fetchAllOrgs()]}>
                { value===''?<Empty/>:<Main/>}
              </gitHubuser.Provider>
                
            </div>
    </div>
    </div>
  );
}

export default App;
