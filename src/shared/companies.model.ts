export interface Companies{
    login:string;
    avatar_url:string;
    gravatar_id:string;
    node_id:string;
    id:number
    totalContribution:number;
    site_admin:boolean;
    score:number;
    url:string;
    html_url:string;
    followers_url:string;
    following_url:string;
    gists_url:string;
    subscriptions_ur:string;
    organizations_url:string;
    starred_url?:string;
    repos_url:string;
    events_url:string;
    received_events_url:string;
    company_members?:number;
    type: GithubAccount.ORG
}
enum GithubAccount{
    USER="User",
    ORG="Organization"
}