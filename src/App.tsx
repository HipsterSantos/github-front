import React from 'react';
import './App.css';
import { CustomSearch } from './components/CustomSearch';
function App() {
  return (
    <div className="App">
 <div className="holder-content">
            <div className="description">
                <h1>Search for GitHub Users</h1>
            </div>
            <div className="search" style={{width:'inherit'}}>
                <div className="input-customized">
                    <CustomSearch/>
                </div>
            </div>
            <div className="holder-responsive">
               here will come the next content
            </div>
    </div>
    </div>
  );
}

export default App;
