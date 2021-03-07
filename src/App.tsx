import './App.scss';
import { CustomSearch } from './components/CustomSearch';
import {useState,useEffect,createContext}from 'react';
import { fetchData } from './services/fetchData.service';
import { Main } from './pages/Main';
import { Empty } from './pages/Empty.message';
import { Data } from './shared/shared';
import { fetchDataService } from './services/fetcher.service';

export const  gitHubuser:any = createContext('');
function App() {
    const [value,setValue] = useState('')
    let users:any[] = [];
    const [orgs,setOrgs] = useState(null);
    // let fetcher = new fetchData(value);
    let getter = new fetchDataService(value);
    let timeout:any = null;
    async function receiveInput(value:any){
      setValue(value);
      getter = new fetchDataService(value)
     
      clearTimeout(timeout)
      setTimeout(()=>{
        getter.fetchAllUsers();
         console.log('users',getter.users)
      },2000)
     
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
              <gitHubuser.Provider value={[users]}>
                { value===''?<Empty/>:<Main/>}
              </gitHubuser.Provider>
                
            </div>
    </div>
    </div>
  );
}

export default App;
