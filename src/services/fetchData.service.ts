import { ThreeSixty } from '@material-ui/icons';
import { Users } from '../shared/users.model';
import { Companies } from '../shared/companies.model';
export class fetchData{
    private token = '44027e0bb7d0755a73f1a3721265208c4658cd35' || process.env.REACT_API_KEY;
    private users: Users[] = [];
    private companies: Companies[] = [];
    private test:any[] = [];
    constructor(public query:string){
            this.fetchAllUsers();
    }
    testFetch():any[]{
        
        var apiResponse = fetch(`https://api.github.com/search/users?q=`+this.query, { method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
            data.items?.filter((d:any)=>{
                       if(d.type == "User"){
                           
                           this.test.push(d);
                           
                       }
                      console.log(d)
                    })
                   
            })
        
     return this.test;
    }
    fetchAllUsers():Users[]{
        
        var apiResponse = fetch(`https://api.github.com/search/users?q=`+this.query, { method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
            data.items?.filter((each:Users)=>{
                    //filer all user by type = User
                       if(each.type == "User"){
                           
                           this.users.push(each);
                          //    console.log(each) 
                       }
                    //    console.log(this.users)
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
                    // console.log(eachone)
            
        })
         return this.companies;
    }

    getContribution(users:Users[]){
        let fake:Users[]=[];
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
        fake = Array.from(users);
        fake.forEach(d=>{
            console.log(d)
        })
        console.log('from get contribuitions',users)
         

        // return this.users;
    }
    
    async getMembers():Promise<Companies[]>{
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
        this.fetchAllOrgs().forEach(async orgs =>{
        setUser(orgs.login)
        const response = await fetch('https://api.github.com/orgs/'+orgs.login+'/members?page=1', { method: 'POST', body: JSON.stringify(body), headers: headers })
        let data = await response.json()
        // data = Array.from(data).length
        // data.data.user.contributionsCollection.contributionCalendar.totalContributions:'empty'
        this.companies.push({...orgs, ...data});
        })

        return this.companies
    }




}