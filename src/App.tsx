import './App.scss';
import { CustomSearch } from './components/CustomSearch';
import {useState,useEffect}from 'react';
import { fetchData } from './services/fetchData.service';
import { Main } from './pages/Main';
import { Empty } from './pages/Empty.message';
import { Data } from './shared/shared';

function App() {
    const [value,setValue] = useState('')
    const [user,setUser] = useState([]);
    const [orgs,setOrgs] = useState([]);
    let fetcher = new fetchData(value);
   
    async function receiveInput(value:any){
      setValue(value);
      fetcher = new fetchData(value);
      fetcher.getContribution(fetcher.fetchAllUsers())
      console.log(fetcher.fetchAllOrgs());
    }


    
    
  return (
    <div className="App">
 <div className="holder-content">
            <div className="description">
                <h1>Search for GitHub Users</h1>
                {value}
            </div>
            <div className="search" style={{width:'inherit'}}>
                <div className="input-customized">
                    <CustomSearch receive={receiveInput}/>
                </div>
            </div>
            
            <div className="holder-responsive">
                { value===''?<Empty/>:<Main/>}
            </div>
    </div>
    </div>
  );
}

export default App;
