import { ThreeSixty } from '@material-ui/icons';
import { Users } from '../shared/users.model';
import { Companies } from '../shared/companies.model';
export class fetchData{
    private token = 'd1403eb77b702e8003e49988f659ab6d0648500c' || process.env.REACT_API_KEY;
    private users: Users[] = [];
    private companies: Companies[] = [];
    private test:any[] = [];
    constructor(public query:string){
            
    }
    testFetch():any[]{
      const headers = {
        'Authorization': `bearer ${this.token}`,
    }
    let body = {
        "query": `query {
           user(login: "${this.query}") {
              name
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  
                }
              }
            }
          }`
    }
    const setUser = (value:string)=>{
        body = {
            "query": `query {
                user(login: "${value}") {
                  name
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      
                    }
                  }
                }
              }`
        }
    }
        var apiResponse = fetch(`https://api.github.com/search/users?q=`+this.query, { method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
            data.items?.filter(async (el:any)=>{
              if(el.type=="User"){
                //search contribuiton
                // setUser(el.login);
                // const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
                // const data = await response.json()
                console.log('User and contribution ',data)
                
              }
              else if (el.type == "Organization"){
                // //search for members
                // const response = await fetch('https://api.github.com/orgs/qquant-group/members?page=1', { method: 'POST', headers: headers })
                // const data = await response.json();
                console.log('Organization and Members',data)
              }
            })    
            })
        
     return this.test;
    }
    fetchAllUsers():Users[]{
        
        var apiResponse = fetch(`https://api.github.com/search/users?q=`+this.query.toString(), { method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
            data.items?.filter((each:Users)=>{
                    //filer all user by type = User
                       if(each.type == "User"){
                           
                           this.users.push(each);
                          //    console.log(each) 
                       }
                      //  console.log("coming from fetch user");
            })
        })
       
     return this.users;
    }

    fetchAllOrgs():Companies[]{
        var apiResponse = fetch(`https://api.github.com/search/users?q=`+this.query, { method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
            data.items?.filter((d:Companies)=>{
                       if( d.type == "Organization"){

                           this.companies.push(d);
                       }
                    })
                    // console.log("coming from fetch orgs")
            
        })
         return this.companies;
    }

    getContribution(users:Users[]){
        
        const headers = {
            'Authorization': `bearer ${this.token}`,
        }
        let body = {
            "query": `query {
               user(login: "${this.query}") {
                  name
                  contributionsCollection {
                    contributionCalendar {
                      totalContributions
                      
                    }
                  }
                }
              }`
        }
        const setUser = (value:string)=>{
            body = {
                "query": `query {
                    user(login: "${value}") {
                      name
                      contributionsCollection {
                        contributionCalendar {
                          totalContributions
                          
                        }
                      }
                    }
                  }`
            }
        }
        console.log('from get contribuitions',users)
         

        // return this.users;
    }
    
    async getMembers(){
        const headers = {
            'Authorization': `bearer ${this.token}`,
        }
        
    }




}