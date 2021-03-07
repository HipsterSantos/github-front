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
        })
      }
      
        return  datas;
    }



   getContributions(users:any[],username:string = this.query) {

      const headers = {
          'Authorization': `bearer d1403eb77b702e8003e49988f659ab6d0648500c`,
      }
      let body = {
          "query": `query {
              user(login: "${username}") {
                name
                contributionsCollection {
                  contributionCalendar {
                    
                    totalContributions
  
                  }
                }
              }
            }`
      }
      let setUser = (user:string)=>{
               body = {
          "query": `query {
              user(login: "${user}") {
                name
                contributionsCollection {
                  contributionCalendar {
                    
                    totalContributions
  
                  }
                }
              }
            }`
      }}
       users.forEach( async (data:any) =>{
        console.log('got reach each user from main')
          setUser(data.login);
          const response =  fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
             .then(data=>data.json())
              .then(value=>{
                 var dataa = value
                 this.contributions.push( dataa);
                 
  
                  })
  
         
      })
  
      
  //     return dataa
  }
  
  
  }