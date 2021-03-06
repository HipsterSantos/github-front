import { ThreeSixty } from '@material-ui/icons';
import { Users } from '../shared/users.model';
import { Companies } from '../shared/companies.model';
export class fetchData{
    private token = '44027e0bb7d0755a73f1a3721265208c4658cd35' || process.env.REACT_API_KEY;
    private users: Users[] = [];
    private companies: Companies[] = [];
    constructor(public query:string){

    }
    fetchAllUsers():Users[]{
        var apiResponse = fetch(`https://api.github.com/search/users?q=`+this.query, { method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
            data.items?.forEach((eachone: any[])=>{
                    //filer all user by type = User
                    eachone.filter(d=>{
                        d.type == "User"
                        this.users.push(d);
                    })
            })
        })
     return this.users;
    }

    fetchAllOrgs():Companies[]{
        var apiResponse = fetch(`https://api.github.com/search/users?q=`+this.query, { method: 'GET'})
        .then(data=>data.json())
        .then(data=>{
            data.items?.forEach((eachone: any[])=>{
                //filter all users by type = Organization 
                eachone.filter(d=>{
                        d.type == "Organization"
                        this.companies.push(d);
                    })
            })
        })
         return this.companies;
    }

    async getContribution(login:string):Promise<Users[]>{
        const headers = {
            'Authorization': `bearer ${this.token}`,
        }
        let body = {
            "query": `query {
               user(login: "${login}") {
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
        this.fetchAllUsers().forEach(async user=>{
            setUser(user.login)
            const response = await fetch('https://api.github.com/graphql', { method: 'POST', body: JSON.stringify(body), headers: headers })
            const data = await response.json()
              // data.data.user.contributionsCollection.contributionCalendar.totalContributions:'empty'
            this.users.push({...user,...data});
        })

        return this.users;
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