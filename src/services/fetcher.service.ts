import { ThreeSixty } from '@material-ui/icons';
import { Users } from '../shared/users.model';
import { Companies } from '../shared/companies.model';
export class fetchDataService{
    private token = 'd1403eb77b702e8003e49988f659ab6d0648500c' || process.env.REACT_API_KEY;
    public users: Users[] = [];
    private companies: Companies[] = [];
    private contributions:any[] = [];
    
    constructor(public query:string){
        
    }
  
    fetchAllUsers(){
      let datas:any = [];
      if(this.query !=''){
        var apiResponse = fetch(`https://api.github.com/search/users?q=`+this.query+``, { method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
          console.log('inside service',data)
            datas= data
        })
      }
      
        return datas;
    }
  
  
  }